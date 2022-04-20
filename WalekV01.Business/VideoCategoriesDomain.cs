
using WalekV01.Core.Exceptions;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Business
{
    public class VideoCategoriesDomain
    {
        private readonly IVideoCategoriesRepository _videoCategoriesRepository;
        public VideoCategoriesDomain(IVideoCategoriesRepository videoCategoriesRepository)
        {
            _videoCategoriesRepository = videoCategoriesRepository;
        }

        public async Task<VideoCategoriesCore> CreateAsync(VideoCategoriesCore videoCategories)
        {
            var videoCategoriesDb = await this._videoCategoriesRepository.CreateAsync(videoCategories);
            return videoCategoriesDb;
        }

        public async Task<IEnumerable<VideoCategoriesCore>> GetAllAsync()
        {
            return await this._videoCategoriesRepository.GetAllAsync();
        }

        public async Task<VideoCategoriesCore> GetByIdAsync(int videoCategoriesId)
        {
            return await this._videoCategoriesRepository.GetByIdAsync(videoCategoriesId);
        }

        public async Task DeleteAsync(int videoCategoriesId)
        {
            await this.Exist(videoCategoriesId);
            await this._videoCategoriesRepository.DeleteAsync(videoCategoriesId);
        }
        
        private async Task Exist(int id)
        {
            if (!await this._videoCategoriesRepository.Exist(id))
            {
                throw new EntityNotFoundException(typeof(VideoCategories).Name, id);
            }
        }
           
    }
}
