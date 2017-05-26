
(function() {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['home'], {
            strictDi: true
        });
    });

    angular
        .module('home', [
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

            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/logout', {
                controller: 'LogoutController',
                templateUrl: 'logout/logout.view.html',
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
            var restrictedPage = $.inArray($location.path(), ['/home', '/logout']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            console.log(restrictedPage);
            console.log(!loggedIn);
            console.log($rootScope.globals);
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();