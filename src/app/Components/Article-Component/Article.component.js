(function(){
'use strict';
angular.module('components.article',[])
    .component('articleComponent',{
        controller: [ArticleController],
        controllerAs:'vm',
        templateUrl:'App/Components/Article-component/Article.html',
       
    });

    function ArticleController(){
    
    var vm=this;
        
       
        //$onInit 
        vm.$onInit=function()
        {
            vm.articleData=[
                {
                    id:1,
                    name:"Champo",
                    prix: 152.2
                },
                {
                    id:2,
                    name:"IPhone",
                    prix: 5200
                },
                {
                    id:3,
                    name:"IMac",
                    prix: 78150
                }
            ]
        }
    }
})();