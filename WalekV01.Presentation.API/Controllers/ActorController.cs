using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WalekV01.Business;
using WalekV01.Core.ModelsCore.ActorCore;
using WalekV01.Presentation.API.ViewModels.ActorViewModel;

namespace WalekV01.Presentation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorController : ControllerBase
    {
        private readonly ActorDomain _actorDomain;
        private readonly IMapper _mapper;
        public ActorController(ActorDomain actorDomain, IMapper mapper)
        {
            this._actorDomain = actorDomain;
            this._mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> CreateAsync(ActorCreateViewModel actor)
        {
            try
            {
                var actorCore = this._mapper.Map<ActorCore>(actor);
                var result = await this._actorDomain.CreateAsync(actorCore);
                return this.Ok(this._mapper.Map<ActorCreateViewModel>(result));
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
                var result = await this._actorDomain.GetAllAsync();
                return this.Ok(this._mapper.Map<IEnumerable<ActorListViewModel>>(result));
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }

    }
}
