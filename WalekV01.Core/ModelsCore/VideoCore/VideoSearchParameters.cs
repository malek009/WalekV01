using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WalekV01.Core.ModelsCore.VideoCore
{
    public class VideoSearchParameters
    {
        public string? Title { get; set; }
        public string? Producer { get; set; }
        public int ReleaseDate { get; set; }
        public int GenderId { get; set; }
    }
}
