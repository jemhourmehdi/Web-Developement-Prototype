(function(){
    'use strict';
    angular.module('AlMedinet')
        .service('dataManager', ['$http',dataManagerCtrl]);
    
    function dataManagerCtrl($http){
        
        function getData(url) {
            return $http.get(url); // Handle Promise
        }
        
        return {
            getData: getData
        }
    };
})();