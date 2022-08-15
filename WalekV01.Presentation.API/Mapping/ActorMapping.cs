using AutoMapper;
using WalekV01.Core.ModelsCore.ActorCore;
using WalekV01.Presentation.API.ViewModels.ActorViewModel;

namespace WalekV01.Presentation.API.Mapping
{
    public class ActorMapping : Profile
    {
        public ActorMapping()
        {
            CreateMap<ActorCore, ActorCreateViewModel>().ReverseMap();
            CreateMap<ActorCore, ActorListViewModel>().ReverseMap();
        }

    }
}
