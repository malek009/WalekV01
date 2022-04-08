using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace WalekV01.Providers.Sql.Models
{
    [Table("Gender")]
    public class Gender
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
