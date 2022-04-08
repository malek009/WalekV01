


using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WalekV01.Providers.Sql.Models
{
    [Table("User")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public int Age { get; set; }
        public string? ZipCode { get; set; }
        public string? Contry { get; set; }
        public int RoleId { get; set; }

    }
}
