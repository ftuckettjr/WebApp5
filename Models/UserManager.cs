using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication5.Models
{
    public class UserManager
    {
        public bool IsValid(string username, string password)
        {
            using (var db = new qwertyEntities()) // use your DbConext
            {
                // if your users set name is Users
                return db.users.Any(u => u.userid == username
                    && u.password == password);
            }
        }
    }
}