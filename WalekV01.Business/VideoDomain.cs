using WalekV01.Core.Exceptions;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Business
{
    public class VideoDomain
    {
        private readonly IVideoRepository _videoRepository;

        public VideoDomain(IVideoRepository videoRepository)
        {
            _videoRepository = videoRepository;
        }
        
        public async Task<VideoCore> CreateAsync(VideoCore video, string id)
        {
            var userIdInt = int.Parse(id);
            video.UserId = userIdInt;
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

        public async Task<VideoCore> UpdateAsync(VideoCore video)
        {
            await this.Exist(video.Id);
            return await this._videoRepository.UpdateAsync(video);
        }
        
        public async Task<IEnumerable<VideoCore>> FindAsync(VideoSearchParameters searchParameters)
        {
            return await this._videoRepository.FindAsync(searchParameters);
        }

        private async Task Exist(int id)
        {
            if (!await this._videoRepository.Exist(id))
            {
                throw new EntityNotFoundException(typeof(Video).Name, id);
            }
        }

        public async Task DeleteAsync(int videoId)
        {
            await this.Exist(videoId);
            await this._videoRepository.DeleteAsync(videoId);
        }
        
    }
}
