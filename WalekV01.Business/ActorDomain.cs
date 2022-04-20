using WalekV01.Core.Exceptions;
using WalekV01.Core.ModelsCore.ActorCore;
using WalekV01.Data.IRepositories;

namespace WalekV01.Business
{
    public class ActorDomain
    {
        private readonly IActorRepository _actorRepository;


        public ActorDomain(IActorRepository actorRepository)
        {
            _actorRepository = actorRepository;
        }

        public async Task<ActorCore> CreateAsync(ActorCore actor)
        {
            this.Validate(actor);
            var actorDb = await this._actorRepository.CreateAsync(actor);
            return actorDb;
        }
        
        public async Task DeleteAsync(int id)
        {
            await this.Exist(id);
            await this._actorRepository.DeleteAsync(id);
        }
        public async Task<IEnumerable<ActorCore>> GetAllAsync()
        {
            var actorDb = await this._actorRepository.GetAllAsync();
            return actorDb;
        }

        public async Task<ActorCore> GetByIdAsync(int id)
        {
            await this.Exist(id);
            var actorDb = await this._actorRepository.GetByIdAsync(id);
            return actorDb;
        }
        private async Task Exist(int id)
        {
            if (!await this._actorRepository.Exist(id))
            {
                throw new EntityNotFoundException(typeof(ActorCore).Name, id);
            }
        }
        private void Validate(ActorCore actor)
        {
            if (string.IsNullOrWhiteSpace(actor.Name))
            {
                throw new Exception("L'acteur doit avoir un nom");
            }
            if (string.IsNullOrWhiteSpace(actor.PlaceOfBirth))
            {
                throw new Exception("L'acteur doit avoir un lieu de naissance");
            }
        }
    }
}
