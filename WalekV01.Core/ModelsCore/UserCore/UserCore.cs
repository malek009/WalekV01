using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WalekV01.Core.ModelsCore.UserCore
{
    public class UserCore
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public int Age { get; set; }
        public string ZipCode { get; set; }
        public string Contry { get; set; }
        public int RoleId { get; set; }


    }
}
