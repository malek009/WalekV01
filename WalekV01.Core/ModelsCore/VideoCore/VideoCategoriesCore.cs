using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WalekV01.Core.ModelsCore.VideoCore
{
    public class VideoCategoriesCore
    {
        public int Id { get; set; }
        public int VideoId { get; set; }
        public int CategoriesId { get; set; }
        public CategoriesCore Categories { get; set; }
    }
}
