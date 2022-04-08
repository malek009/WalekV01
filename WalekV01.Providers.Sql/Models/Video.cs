using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WalekV01.Providers.Sql.Models
{
    [Table("Video")]
    public class Video
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Duration { get; set; }
        public int? Episode { get; set; }
        public string Producer { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int UserId { get; set; }
        public int GenderId { get; set; }


    }
}
