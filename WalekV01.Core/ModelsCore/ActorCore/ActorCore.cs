using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WalekV01.Core.ModelsCore.ActorCore
{
    public class ActorCore
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string PlaceOfBirth { get; set; }
        public string ImageUrl { get; set; }
        public int Like { get; set; }
    }
}
