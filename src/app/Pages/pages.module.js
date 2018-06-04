/**
 * @author Mehdi
 * created on 30/05/2018
 */
(function () {
    'use strict';

    angular.module('pages', [
        'ui.router',
        'pages.dashboard-page'
    ])
        .config(['$urlRouterProvider',routeConfig]);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

})();
