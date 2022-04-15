using AutoMapper;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Presentation.API.ViewModels.VideoViewModel;

namespace WalekV01.Presentation.API.Mapping
{
    public class VideoMapping : Profile
    {
        public VideoMapping()
        {
            CreateMap<VideoCore, VideoCreateViewModel>().ReverseMap();
            CreateMap<VideoCore, VideoListViewModel>().ReverseMap();
            CreateMap<CategoriesCore, CategoriesCreateViewModel>().ReverseMap();
        }
    }
}
