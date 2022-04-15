using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WalekV01.Business;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Presentation.API.ViewModels.VideoViewModel;

namespace WalekV01.Presentation.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly CategoriesDomain _categoriesDomain;
        private readonly IMapper _mapper;
        public CategoriesController(CategoriesDomain categoriesDomain, IMapper mapper)
        {
            this._categoriesDomain = categoriesDomain;
            this._mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> CreateAsync(CategoriesCreateViewModel category)
        {
            try
            {
                var categoryCore = this._mapper.Map<CategoriesCore>(category);
                var result = await this._categoriesDomain.CreateAsync(categoryCore);
                return this.Ok(this._mapper.Map<CategoriesCreateViewModel>(result));
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
                return this.Ok(this._mapper.Map<IEnumerable<CategoriesCore>>(await this._categoriesDomain.GetAllAsync()));
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
                return this.Ok(this._mapper.Map<CategoriesCore>(await this._categoriesDomain.GetByIdAsync(id)));
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            try
            {
                await this._categoriesDomain.DeleteAsync(id);
                return this.Ok();
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
