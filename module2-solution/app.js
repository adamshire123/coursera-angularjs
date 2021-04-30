(function () {
    'use strict';
    
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy()
    
    toBuy.buy = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var ItemsToBuy = [
        { name: "cookies", quantity: 3 },
        { name: "salad", quantity: 4 }, 
        { name: "chips", quantity: 10 }, 
        { name: "cola", quantity: 10 }, 
        { name: "pizza", quantity: 98 }
    ]
    var boughtItems = [];

    

    service.buyItem = function (itemIndex) {
        var bought = ItemsToBuy.splice(itemIndex, 1);
        boughtItems.push(bought[0]);
        console.log(boughtItems)
    };

    service.getItemsToBuy = function () {
        return ItemsToBuy;
    };

    service.getBoughtItems = function () {
        return boughtItems;
    };
}

   
    
    })();