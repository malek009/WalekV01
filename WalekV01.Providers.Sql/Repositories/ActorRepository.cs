

using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WalekV01.Core.ModelsCore.ActorCore;
using WalekV01.Data.IRepositories;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Providers.Sql.Repositories
{
    public class ActorRepository : IActorRepository
    {
        private readonly WalekV01DbContext _context;
        private readonly IMapper _mapper;

        public ActorRepository(WalekV01DbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ActorCore> CreateAsync(ActorCore actor)
        {
            var actorDb = this._mapper.Map<Actor>(actor);
            this._context.Actors.Add(actorDb);
            try
            {
                await this._context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
            actor.Id = actorDb.Id;
            return actor;
        }

        public async Task DeleteAsync(int actorId)
        {
            var actorDb = new Categories { Id = actorId };
            this._context.Entry(actorDb).State = EntityState.Deleted;
            await this._context.SaveChangesAsync();
        }

        public async Task<bool> Exist(int actorId)
        {
            return await this._context.Actors.AsNoTracking().AnyAsync(a => a.Id == actorId);
        }

        public async Task<IEnumerable<ActorCore>> GetAllAsync()
        {
            return this._mapper.Map<IEnumerable<ActorCore>>(await this._context.Actors.AsNoTracking().ToListAsync());
        }

        public async Task<ActorCore> GetByIdAsync(int actorId)
        {
            return this._mapper.Map<ActorCore>(await this._context.Actors.AsNoTracking().FirstOrDefaultAsync(a => a.Id == actorId));
        }
    }
}
