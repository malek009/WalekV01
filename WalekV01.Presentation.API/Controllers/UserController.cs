using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalekV01.Business;
using WalekV01.Core.ModelsCore.UserCore;
using WalekV01.Presentation.API.ViewModels.UserViewModel;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Presentation.API.Controllers
{
 
        [Route("api/[controller]/[action]")]
        [ApiController]
        public class UserController : ControllerBase
        {
            private readonly UserDomain _userDomain;
            private readonly IMapper _mapper;
            public UserController(UserDomain userDomain, IMapper mapper)
            {
                this._userDomain = userDomain;
                this._mapper = mapper;
            }

            [HttpPost]
            public async Task<IActionResult> CreateForUserAsync(UserCreate user)
            {
                try
                {
                    var userCore = this._mapper.Map<UserCore>(user);
                    var result = await this._userDomain.CreateForUserAsync(userCore);
                    return this.Ok(this._mapper.Map<ViewModels.UserViewModel.UserData>(result));
                }
                catch (Exception e)
                {
                    return this.BadRequest(e.Message);
                }
            }
            [HttpPost]
            public async Task<IActionResult> CreateForAdminAsync(UserCreate user)
            {
                try
                {
                    var userCore = this._mapper.Map<UserCore>(user);
                    var result = await this._userDomain.CreateForAdminAsync(userCore);
                    return this.Ok(this._mapper.Map<ViewModels.UserViewModel.UserData>(result));
                }
                catch (Exception e)
                {
                    return this.BadRequest(e.Message);
                }
            }
            [HttpGet]
            public async Task<IActionResult> GetAllAsync()
            {
                try
                {
                    return this.Ok(this._mapper.Map<IEnumerable<UserListViewModel>> (await this._userDomain.GetAllAsync()));
                }
                catch (Exception e)
                {
                    return this.BadRequest(e.Message);
                }
            }
        }
    }

