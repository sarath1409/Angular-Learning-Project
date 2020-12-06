( function(){
    "use strict";
    
    angular.module("ShoppingListCheckOff",[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        toBuy.list = ShoppingListCheckOffService.getToBuyList();
        toBuy.buyItem = function(index){
            ShoppingListCheckOffService.buyAnItem(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        alreadyBought.list = ShoppingListCheckOffService.getAlreadyBoughtList();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyList = [ 
            {name : 'Cookies', quantity: 10},
            {name : 'Candies', quantity: 30},
            {name : 'Milk Chocolates', quantity: 5},
            {name : 'Caramel', quantity: 2},
            {name : 'Gums', quantity: 10},
            {name : 'Mints', quantity: 20}
         ];
         var alreadyBoughtList = [];
         service.getToBuyList= function(){
            return toBuyList;
        };
        service.getAlreadyBoughtList = function(){
            return alreadyBoughtList;
        };
        service.buyAnItem = function(index){
            alreadyBoughtList.push(toBuyList[index])
            toBuyList.splice(index,1)
        }
    }

})();