using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WalekV01.Business;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Presentation.API.ViewModels.VideoViewModel;

namespace WalekV01.Presentation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly VideoDomain _videoDomain;
        private readonly IMapper _mapper;
        public VideoController(VideoDomain videoDomain, IMapper mapper)
        {
            this._videoDomain = videoDomain;
            this._mapper = mapper;
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateAsync(VideoCreateViewModel video)
        {
            try
            {
                var userId = this.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                var videoCore = this._mapper.Map<VideoCore>(video);
                var result = await this._videoDomain.CreateAsync(videoCore, userId);
                return this.Ok(this._mapper.Map<VideoCreateViewModel>(result));
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
                var result = await this._videoDomain.GetAllAsync();
                return this.Ok(this._mapper.Map<IEnumerable<VideoListViewModel>>(result));
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
