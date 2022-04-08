using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalekV01.Core.ModelsCore.UserCore;
using WalekV01.Core.ModelsCore.VideoCore;
using WalekV01.Providers.Sql.Models;

namespace WalekV01.Providers.Sql
{
    public class SqlMapping : Profile
    {
        public SqlMapping ()
            {
                CreateMap<User, UserCore>().ReverseMap();
                CreateMap<VideoCore, Video>().ReverseMap();
        }
}
}
