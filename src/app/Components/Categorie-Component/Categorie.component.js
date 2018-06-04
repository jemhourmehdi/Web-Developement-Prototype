(function(){
'use strict';
angular.module('components.categorie',[])
    .component('categorieComponent',{
        controller: [CategorieController],
        controllerAs:'vm',
        templateUrl:'App/Components/Categorie-component/Categorie.html',
       
    });
    
    function CategorieController(){
    
    var vm=this;
        
        // Title of Component
        vm.title="Categorie";
        
        //$onInit 
        vm.$onInit=function()
        {
            vm.categorieData=[
                {id:1, name:"Cat 1"},
                {id:2, name:"Cat 2"},
                {id:3, name:"Cat 3"},
                {id:4, name:"Cat 4"},
                {id:5, name:"Cat 5"},
                {id:6, name:"Cat 6"}
            ]
        };
    }
})();