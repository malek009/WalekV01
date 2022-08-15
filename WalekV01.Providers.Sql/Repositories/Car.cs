using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WalekV01.Providers.Sql.Repositories
{
    [Table("Car")]
    public class Car
    {
        [Key]

        public int Id { get; set; }
        
    }
}
