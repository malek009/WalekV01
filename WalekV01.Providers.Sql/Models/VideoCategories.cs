using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WalekV01.Providers.Sql.Models
{
    [Table("VideoCategories")]
    public class VideoCategories
    {
        [Key]
        public int Id { get; set; }
        public int VideoId { get; set; }
        public int CategoriesId { get; set; }
    }
}
