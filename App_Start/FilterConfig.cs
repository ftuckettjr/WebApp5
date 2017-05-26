﻿using System.Web;
using System.Web.Mvc;

namespace WebApplication5
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());

            //Apply HTTPS globally
            //filters.Add(new RequireHttpsAttribute());
        }
    }
}
