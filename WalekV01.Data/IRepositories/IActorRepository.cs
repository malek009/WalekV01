

using WalekV01.Core.ModelsCore.ActorCore;

namespace WalekV01.Data.IRepositories
{
    public interface IActorRepository
    {
        Task<ActorCore> GetByIdAsync(int actorId);
        Task<ActorCore> CreateAsync(ActorCore actor);
        Task DeleteAsync(int actorId);
        Task<bool> Exist(int actorId);
        Task<IEnumerable<ActorCore>> GetAllAsync();
    }
}
