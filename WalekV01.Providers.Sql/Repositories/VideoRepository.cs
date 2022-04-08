using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Providers.Sql.Repositories
{
    public class VideoRepository : IVideoRepository
    {
        private readonly WalekV01DbContext _context;
        private readonly IMapper _mapper;

        public VideoRepository(WalekV01DbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<VideoCore> CreateAsync(VideoCore video)
        {
            var videoDb = this._mapper.Map<Video>(video);
            this._context.Videos.Add(videoDb);
            await this._context.SaveChangesAsync();
            video.Id = videoDb.Id;
            return video;
        }

        public async Task DeleteAsync(int id)
        {
            var videoDb = new Video { Id = id };
            this._context.Entry(videoDb).State = EntityState.Deleted;
            await this._context.SaveChangesAsync();
        }

        public async Task<bool> Exist(int id)
        {
            return await this._context.Videos.AsNoTracking().AnyAsync(r => r.Id == id);
        }

        public Task<IEnumerable<VideoCore>> FindAsync(VideoSearchParameters searchParameters)
        {
            throw new NotImplementedException();
        }

        public async Task<VideoCore> GetByIdAsync(int id)
        {
            return this._mapper.Map<VideoCore>(await this._context.Videos.AsNoTracking().FirstOrDefaultAsync(v => v.Id == id));
        }

        public async Task<VideoCore> UpdateAsync(VideoCore video)
        {
            var videoDb = this._mapper.Map<Video>(video);
            this._context.Attach(videoDb);
            this._context.Entry(videoDb).State = EntityState.Modified;
            await this._context.SaveChangesAsync();
            return video;
        }

        public async Task<IEnumerable<VideoCore>> GetAllAsync()
        {
            return this._mapper.Map<IEnumerable<VideoCore>>(await this._context.Videos.AsNoTracking().ToListAsync());
        }
    }
}
