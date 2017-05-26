
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using Newtonsoft.Json.Linq;

using WebApplication5.Models;


namespace WebApplication5.Controllers
{

    /*public class QwertyEntitiesContextProvider : EFContextProvider<qwertyEntities>
    {
        public QwertyEntitiesContextProvider() : base() { }

        protected override bool BeforeSaveEntity(EntityInfo entityInfo)
        {
            // return false if we don't want the entity saved.
            // prohibit any additions of entities of type 'Role'
            if (entityInfo.Entity.GetType() == typeof(Role)
              && entityInfo.EntityState == EntityState.Added)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        protected override Dictionary<Type, List<EntityInfo>> BeforeSaveEntities(Dictionary<Type, List<EntityInfo>> saveMap)
        {
            // return a map of those entities we want saved.
            return saveMap;
        }
    }*/

    [BreezeController]
    public class QwertyController : ApiController
    {

        readonly EFContextProvider<qwertyEntities> ContextProvider =
             new EFContextProvider<qwertyEntities>();

        [HttpGet]
        public String Metadata()
        {
            return ContextProvider.Metadata();
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return ContextProvider.SaveChanges(saveBundle);
        }

        [HttpGet]
        public IQueryable<article> articles()
        {
            return ContextProvider.Context.articles;
        }

        [HttpGet]
        public IQueryable<encryption> encryptions()
        {
            return ContextProvider.Context.encryptions;
        }

        [HttpGet]
        public IQueryable<idioma> idiomas()
        {
            return ContextProvider.Context.idiomas;
        }

        [HttpGet]
        public IQueryable<language> languages()
        {
            return ContextProvider.Context.languages;
        }

        [HttpGet]
        public IQueryable<store_map> store_map()
        {
            return ContextProvider.Context.store_map;
        }

        [HttpGet]
        public IQueryable<user> users()
        {
            return ContextProvider.Context.users;
        }

        [HttpGet]
        public IQueryable<imagez> imagezs()
        {
            return ContextProvider.Context.imagezs;
        }

        [HttpGet]
        public IQueryable<privacy> privacies()
        {
            return ContextProvider.Context.privacies;
        }

        [HttpGet]
        public IQueryable<store_price> store_price()
        {
            return ContextProvider.Context.store_price;
        }
    }
}