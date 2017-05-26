
(function() {
    'use strict';

    angular
        .module('home')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', '$scope', '$timeout', 'dataservice', 'logger', '$location']; //, 'AuthenticationService', 'FlashService'
    function LoginController($q, $scope, $timeout, dataservice, logger, $location) { //, AuthenticationService, FlashService
        var vm = this;

        vm.username = "";
        vm.password = "";

        vm.login = login;

        (function initController() {
            // reset login status
            //AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            $timeout(getUsersImpl, 0);

            function getUsersImpl() {
                dataservice.getUserN(vm.username, vm.password)
                    .then(querySucceeded)
                    .catch(queryFailed);
            }

            function querySucceeded(data) {
                vm.users = data.results;
                if (vm.users.length === 1) {
                    logger.success("Valid User ");
                    $location.path('/home');
                }
                else {
                    logger.error("Invalid User ");
                    vm.dataLoading = false;
                }
            }

            function queryFailed(error) {
                logger.error(error.message, "Query failed");
            }

        };

    }

})();
