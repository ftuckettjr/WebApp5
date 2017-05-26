using System.Web;
using System.Web.Optimization;

namespace WebApplication5
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            /*bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));*/

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            /*bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));*/

            /*bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));*/

            bundles.Add(new ScriptBundle("~/bundles/thirdPartyJs").Include(
                      "~/Scripts/jquery-{version}.js",
                      "~/Scripts/q.js",
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-animate.js",
                      "~/Scripts/angular-cookies.js",
                      "~/Scripts/angular-route.js",
                      "~/Scripts/angular-sanitize.js",
                      "~/Scripts/breeze.min.js",
                      "~/Scripts/breeze.bridge.angular.js",
                      "~/Scripts/breeze.debug.js",
                      "~/Scripts/toastr.js"));

            bundles.Add(new ScriptBundle("~/bundles/customApp").Include(
                      "~/App/app.js",
                      "~/App/logger.js",
                      "~/App/login/login.controller.js"));

            bundles.Add(new StyleBundle("~/Content/thirdPartyCss").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/toastr.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
