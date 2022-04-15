using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Providers.Sql.Repositories
{
    public class VideoCategoriesRepository : IVideoCategoriesRepository
    {
        private readonly WalekV01DbContext _context;
        private readonly IMapper _mapper;
        public VideoCategoriesRepository(WalekV01DbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<VideoCategoriesCore> CreateAsync(VideoCategoriesCore videoCategories)
        {
            var VideoCategoriesDb = this._mapper.Map<VideoCategories>(videoCategories);
            this._context.VideoCategories.Add(VideoCategoriesDb);
            await this._context.SaveChangesAsync();
            videoCategories.Id = VideoCategoriesDb.Id;
            return videoCategories;
        }

        public async Task DeleteAsync(int id)
        {
            var videoCategoriesDb = new VideoCategories { Id = id };
            this._context.Entry(videoCategoriesDb).State = EntityState.Deleted;
            await this._context.SaveChangesAsync();
        }

        public async Task<bool> Exist(int id)
        {
            return await this._context.VideoCategories.AsNoTracking().AnyAsync(vc => vc.Id == id);
        }

        public async Task<IEnumerable<VideoCategoriesCore>> GetAllAsync()
        {
            return this._mapper.Map<IEnumerable<VideoCategoriesCore>>(await this._context.VideoCategories.AsNoTracking().ToListAsync());
        }

        public async Task<VideoCategoriesCore> GetByIdAsync(int id)
        {
            return this._mapper.Map<VideoCategoriesCore>(await this._context.VideoCategories.AsNoTracking().FirstOrDefaultAsync(vc => vc.Id == id));
        }
    }
}
