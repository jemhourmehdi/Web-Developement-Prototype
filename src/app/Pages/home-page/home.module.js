/**
 * @author Mehdi
 * created on 01/06/2018
 */
(function () {
    'use strict';

    angular.module('pages.dashboard-page', [])
        .config(['$stateProvider',routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        var articleState = {
            name: 'article',
            url: '/articles',
            templateUrl: 'app/Pages/home-page/gestion-articles/article.html'
        };

        var categorieState = {
            name: 'categorie',
            url: '/categories',
            templateUrl: 'app/Pages/home-page/gestion-categories/categorie.html'
        };

        var indexState = {
            name: 'index',
            url: '/',
            template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>'
        };


        $stateProvider.state(indexState);
        $stateProvider.state(articleState);
        $stateProvider.state(categorieState);
    }

})();
