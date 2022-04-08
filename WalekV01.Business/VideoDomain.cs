using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;

namespace WalekV01.Business
{
    public class VideoDomain
    {
        private readonly IVideoRepository _videoRepository;
        private readonly UserDomain _userDomain;

        public VideoDomain(IVideoRepository videoRepository, UserDomain userDomain)
        {
            _videoRepository = videoRepository;
            _userDomain = userDomain;
        }
        
        public async Task<VideoCore> CreateAsync(VideoCore video, string id)
        {
            var userIdInt = int.Parse(id);
            var videoDb = await this._videoRepository.CreateAsync(video);
            videoDb.UserId = userIdInt;
            return videoDb;
        }

        public async Task<IEnumerable<VideoCore>> GetAllAsync()
        {
            return await this._videoRepository.GetAllAsync();
        }
    }
}
