using WalekV01.Core.Exceptions;
using WalekV01.Core.ModelsCore;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Business
{
    public class VideoDomain
    {
        private readonly IVideoRepository _videoRepository;
        private readonly IVideoCategoriesRepository _videoCategoriesRepository;

        public VideoDomain(IVideoRepository videoRepository, IVideoCategoriesRepository videoCategoriesRepository)
        {
            _videoRepository = videoRepository;
            _videoCategoriesRepository = videoCategoriesRepository;
        }
        
        public async Task<VideoCore> CreateAsync(VideoCore video, string id)
        {
            var userIdInt = int.Parse(id);
            video.UserId = userIdInt;
            this.Validate(video);
            var videoDb = await this._videoRepository.CreateAsync(video);
            return videoDb;
        }

        public async Task<IEnumerable<VideoCore>> GetAllAsync()
        {
            return await this._videoRepository.GetAllAsync();
        }

        public async Task<VideoCore> GetByIdAsync(int videoId)
        {
            return await this._videoRepository.GetByIdAsync(videoId);
        }

        public async Task<VideoCore> UpdateAsync(VideoCore video, string id)
        {
            var userIdInt = int.Parse(id);
            video.UserId = userIdInt;
            await this.Exist(video.Id);
            return await this._videoRepository.UpdateAsync(video);
        }
        
        public async Task<Pagination<VideoCore>> FindAsync(VideoSearchParameters searchParameters)
        {
            return await this._videoRepository.FindAsync(searchParameters);
        }

        public async Task DeleteAsync(int videoId)
        {
            await this.Exist(videoId);
            await this._videoRepository.DeleteAsync(videoId);
        }

        public async Task<VideoCategoriesCore> AddCategoryToVideo(VideoCategoriesCore videoCategories)
        {
            await this.Exist(videoCategories.VideoId);
            await this._videoCategoriesRepository.Exist(videoCategories.CategoriesId);

            return await this._videoCategoriesRepository.CreateAsync(videoCategories);
             
        }
        
        private async Task Exist(int id)
        {
            if (!await this._videoRepository.Exist(id))
            {
                throw new EntityNotFoundException(typeof(Video).Name, id);
            }
        }
        private void Validate(VideoCore video)
        {
            if (string.IsNullOrEmpty(video.Title))
            {
                throw new BusinessException("doit contenir un titre");
            }
            if (string.IsNullOrEmpty(video.Description))
            {
                throw new BusinessException("doit contenir un titre");
            }
            if (string.IsNullOrEmpty(video.ImageUrl))
            {
                throw new BusinessException("doit contenir un lien vers l'image");
            }
            if (string.IsNullOrEmpty(video.Producer))
            {
                throw new BusinessException("doit contenir le nom du producteur");
            }

        }
    }
}
