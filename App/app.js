
/*
(function() {
    'use strict';

    var app = angular.module('app', [
        'breeze.angular',
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
        'ngCookies'

        // Custom modules 
        //'common',           // common functions, logger, spinner
        //'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
        //'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    // Handle routing errors and success events
    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();
*/


(function() {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app'], {
            strictDi: true
        });
    });

    angular
        .module('app', [
            'breeze.angular',
            // Angular modules 
            'ngAnimate',        // animations
            'ngRoute',          // routing
            'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
            'ngCookies'

            // Custom modules 
            //'common',           // common functions, logger, spinner
            //'common.bootstrap', // bootstrap dialog wrapper functions

            // 3rd Party Modules
            //'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
        ])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'App/home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'App/login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'App/register/register.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

    // Configure Toastr
    /*toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    toastr.info('Are you the 6 fingered man?');

    // Display a warning toast, with no title
    toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');

    // Display a success toast, with a title
    toastr.success('Have fun storming the castle!', 'Miracle Max Says');

    // Display an error toast, with a title
    toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');*/

})();