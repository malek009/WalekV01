
using WalekV01.Core.ModelsCore.VideoCore;

namespace WalekV01.Data.IRepositories
{
    public interface ICategoriesRepository
    {
        Task<CategoriesCore> GetByIdAsync(int categorieId);
        Task<CategoriesCore> CreateAsync(CategoriesCore category);
        Task DeleteAsync(int categoryId);
        Task<bool> Exist(int categoryId);
        Task<IEnumerable<CategoriesCore>> GetAllAsync();
    }
}
