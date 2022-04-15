using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalekV01.Core.ModelsCore.VideoCore;

namespace WalekV01.Data.IRepositories
{
    public interface IVideoCategoriesRepository
    {
        Task<VideoCategoriesCore> GetByIdAsync(int id);
        Task<VideoCategoriesCore> CreateAsync(VideoCategoriesCore videoCategories);
        Task DeleteAsync(int id);
        Task<bool> Exist(int id);
        Task<IEnumerable<VideoCategoriesCore>> GetAllAsync();
    }
}
