using AutoMapper;
using WalekV01.Core.ModelsCore.UserCore;
using WalekV01.Presentation.API.ViewModels.UserViewModel;

namespace WalekV01.Presentation.API.Mapping
{
    public class UserMapping : Profile
    {
        public UserMapping()
        {
            this.CreateMap<UserCore, UserCreate>().ReverseMap();
            this.CreateMap<Core.ModelsCore.UserCore.UserData, ViewModels.UserViewModel.UserData>().ReverseMap();
            this.CreateMap<UserCore, ViewModels.UserViewModel.UserData>().ReverseMap();
            this.CreateMap<UserCore, UserListViewModel>().ReverseMap();
            
        }
    }
}
