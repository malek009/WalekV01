﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WalekV01.Business;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Presentation.API.ViewModels.VideoViewModel;

namespace WalekV01.Presentation.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly VideoDomain _videoDomain;
        private readonly VideoCategoriesDomain _videoCategoriesDomain;
        private readonly IMapper _mapper;
        public VideoController(VideoDomain videoDomain, IMapper mapper, VideoCategoriesDomain videoCategoriesDomain)
        {
            this._videoDomain = videoDomain;
            this._videoCategoriesDomain = videoCategoriesDomain;
            this._mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> CreateAsync(VideoCreateViewModel video)
        {
            try
            {
                var userDb = this.User.FindFirst(ClaimTypes.NameIdentifier);
                if (userDb == null)
                {
                    return BadRequest("User not found");
                }
                var userId = userDb.Value;
                var videoCore = this._mapper.Map<VideoCore>(video);
                var result = await this._videoDomain.CreateAsync(videoCore, userId);
                return this.Ok(this._mapper.Map<VideoCreateViewModel>(result));
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
        
        [HttpPost]
        public async Task<IActionResult> AddCategoryToVideoAsync(AddCategoriesTOVideoViewModel videoCategories)
        {
            try
            {
                var videoCategoriesCore = this._mapper.Map<VideoCategoriesCore>(videoCategories);
                var result = await this._videoDomain.AddCategoryToVideoAsync(videoCategoriesCore);
                return this.Ok(result);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteCategoryFromVideoAsync(int videoCategoriesId)
        {
            try
            {
                await this._videoDomain.DeleteCategoryFromVideoAsync(videoCategoriesId);
                return this.Ok();
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
        [HttpGet]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            try
            {
                return this.Ok(this._mapper.Map<VideoListViewModel>(await this._videoDomain.GetByIdAsync(id)));
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
        [HttpGet]
        public async Task<IActionResult> GetCategoriesByVideoIdAsync(int id)
        {
            try
            {
                return this.Ok(this._mapper.Map<IEnumerable<CategoriesCreateViewModel>>(await this._videoDomain.GetByIdAsync(id)));
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> FindAsync([FromQuery] string? title, [FromQuery] string? Producer, [FromQuery] int? dateYear, [FromQuery] int? GenderId,
                                                    [FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 3)
        {
            try
            {
                var searchParameters = new VideoSearchParameters
                {
                    Title = title,
                    Producer = Producer,
                    ReleaseDate = dateYear,
                    GenderId = GenderId,
                    PageNumber = pageNumber,
                    PageSize = pageSize
                };
                var result = await this._videoDomain.FindAsync(searchParameters);
                return this.Ok(result);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync(VideoCreateViewModel video)
        {
            try
            {
                var userDb = this.User.FindFirst(ClaimTypes.NameIdentifier);
                if (userDb == null)
                {
                    return BadRequest("User not found");
                }
                return this.Ok(this._mapper.Map<VideoCreateViewModel>(await this._videoDomain.UpdateAsync(this._mapper.Map<VideoCore>(video),userDb.Value)));
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int videoId)
        {
            try
            {
                var videoTodelete = await this._videoDomain.GetByIdAsync(videoId);
                var count = videoTodelete.Categories.Count();
                if (count > 0)
                {
                    foreach (var videoCategory in videoTodelete.Categories)
                    {
                        await this._videoCategoriesDomain.DeleteAsync(videoCategory.Id);
                    }
                }
                await this._videoDomain.DeleteAsync(videoTodelete.Id);
                return this.Ok();
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
        
    }
}
