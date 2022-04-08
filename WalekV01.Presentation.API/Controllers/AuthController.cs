using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WalekV01.Business;
using WalekV01.Core.ModelsCore.UserCore;
using WalekV01.Presentation.API.ViewModels.UserViewModel;

namespace WalekV01.Presentation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserDomain _userDomain;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AuthController(UserDomain userDomain, IMapper mapper, IConfiguration configuration)
        {
            this._userDomain = userDomain;
            this._configuration = configuration;
            this._mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> Login(Credentials credentials)
        {
            var userData = await this._userDomain.Login(credentials);

            if (userData == null)
            {
                return this.Unauthorized();
            }

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, userData.Id.ToString()),
                new Claim(ClaimTypes.Email, userData.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role,userData.RoleId.ToString())
            };

            var token = this.GetToken(authClaims);

            var response = new ConnectedUser
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = token.ValidTo,
                UserData = this._mapper.Map<ViewModels.UserViewModel.UserData>(userData)
            };

            return this.Ok(response);
        }

        private JwtSecurityToken GetToken(List<Claim> claims)
        {
            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            return new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddMinutes(15),
                    claims: claims,
                    signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
                );
        }
    }
}
