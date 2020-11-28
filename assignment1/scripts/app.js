(function () {
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope){
        $scope.LunchMenu = "";
        $scope.message = "";

        $scope.PopulateMessage = function(){
         
            var count = LunchMenuCounter($scope.LunchMenu) 
            $scope.message = ($scope.LunchMenu == "") ? ("Please enter data first") : ( (count <= 3) ? "Enjoy!" : "Too much!" );
            
        }

        var LunchMenuCounter =  function(menu) { return menu.split(",").length; } 
    }  
    
}

)();