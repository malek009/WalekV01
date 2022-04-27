using WalekV01.Core.Exceptions;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;

namespace WalekV01.Business
{
    public class CategoriesDomain
    {
        private readonly ICategoriesRepository _categoriesRepository;

        public CategoriesDomain(ICategoriesRepository categoriesRepository)
        {
            _categoriesRepository = categoriesRepository;
           
        }
        
        public async Task<CategoriesCore> CreateAsync(CategoriesCore category)
        {
            this.Validate(category);
            var categoryDb = await this._categoriesRepository.CreateAsync(category);
            return categoryDb;
        }

        public async Task DeleteAsync(int id)
        {
            await this.Exist(id);
            await this._categoriesRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<CategoriesCore>> GetAllAsync()
        {
            var categoriesDb = await this._categoriesRepository.GetAllAsync();
            return categoriesDb;
        }

        public async Task<CategoriesCore> GetByIdAsync(int id)
        {
            await this.Exist(id);
            var categoryDb = await this._categoriesRepository.GetByIdAsync(id);
            return categoryDb;
        }
        private async Task Exist(int id)
        {
            if (!await this._categoriesRepository.Exist(id))
            {
                throw new EntityNotFoundException(typeof(CategoriesCore).Name, id);
            }
        }
        private void Validate(CategoriesCore categorie)
        {
            if (string.IsNullOrWhiteSpace(categorie.Name))
            {
                throw new Exception("Le nom de la categorie est obligatoire");
            }
        }
    }
}
