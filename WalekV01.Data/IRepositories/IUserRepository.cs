using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalekV01.Core.ModelsCore.UserCore;

namespace WalekV01.Data.IRepositories
{
    public interface IUserRepository
    {
        Task<UserCore> CreateAsync(UserCore user);
        Task<UserCore> GetUserByEmailAsync(string email);
        Task<bool> Exist(int id);
        Task<IEnumerable<UserCore>> GetAllAsync();
    }
}
