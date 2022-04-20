using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalekV01.Core.ModelsCore;
using WalekV01.Core.ModelsCore.VideoCore;

namespace WalekV01.Data.IRepositories
{
    public  interface IVideoRepository
    {
        Task<Pagination<VideoCore>> FindAsync(VideoSearchParameters searchParameters);
        Task<VideoCore> GetByIdAsync(int id);
        Task<VideoCore> CreateAsync(VideoCore video);
        Task<VideoCore> UpdateAsync(VideoCore video);
        Task DeleteAsync(int id);
        Task<bool> Exist(int id);
        Task<IEnumerable<VideoCore>> GetAllAsync();
    }
}
