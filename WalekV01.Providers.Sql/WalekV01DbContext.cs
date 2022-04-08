using Microsoft.EntityFrameworkCore;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Providers.Sql
{
    public class WalekV01DbContext : DbContext
    {
        public WalekV01DbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Video> Videos { get; set; }


    }
}
