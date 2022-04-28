
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Providers.Sql.Repositories
{
    public class CategoriesRepository : ICategoriesRepository
    {
        private readonly WalekV01DbContext _context;
        private readonly IMapper _mapper;

        public CategoriesRepository(WalekV01DbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<CategoriesCore> CreateAsync(CategoriesCore category)
        {
            var categoriesDb = this._mapper.Map<Categories>(category);
            this._context.Categories.Add(categoriesDb);
            await this._context.SaveChangesAsync();
            category.Id = categoriesDb.Id;
            return category;
        }

        public async Task DeleteAsync(int categoryId)
        {
            var categoryDb = new Categories { Id = categoryId };
            this._context.Entry(categoryDb).State = EntityState.Deleted;
            await this._context.SaveChangesAsync();
        }
        

        public async Task<bool> Exist(int categoryId)
        {
            return await this._context.Categories.AsNoTracking().AnyAsync(c => c.Id == categoryId);
        }

        public async Task<IEnumerable<CategoriesCore>> GetAllAsync()
        {
            return this._mapper.Map<IEnumerable<CategoriesCore>>(await this._context.Categories.AsNoTracking().ToListAsync());
        }
       
        public async Task<CategoriesCore> GetByIdAsync(int categorieId)
        {
            return this._mapper.Map<CategoriesCore>(await this._context.Categories.AsNoTracking().FirstOrDefaultAsync(c => c.Id == categorieId));
        }

    }
}
