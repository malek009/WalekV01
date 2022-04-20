using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WalekV01.Providers.Sql.Models
{
    [Table("VideoCategories")]
    public class VideoCategories
    {
        [Key]
        public int Id { get; set; }
        public int VideoId { get; set; }
        public int CategoriesId { get; set; }
        public Categories Categories { get; set; }
    }
}
