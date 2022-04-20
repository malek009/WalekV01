using WalekV01.Business;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Repositories;

namespace WalekV01.Presentation.API.Extensions
{
    public static class WalekV01BuilderExtension
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IVideoRepository, VideoRepository>();
            services.AddScoped<ICategoriesRepository, CategoriesRepository>();
            services.AddScoped<IVideoCategoriesRepository, VideoCategoriesRepository>();
            services.AddScoped<IActorRepository, ActorRepository>();
        }

        public static void AddDomains(this IServiceCollection services)
        {
           
            services.AddScoped<UserDomain>();
            services.AddScoped<VideoDomain>();
            services.AddScoped<CategoriesDomain>();
            services.AddScoped<VideoCategoriesDomain>();
            services.AddScoped<ActorDomain>();
        }
    }
}
