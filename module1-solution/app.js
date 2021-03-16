(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('lcController', lcController);

    lcController.$inject = ['$scope'];
    
    function lcController ($scope) {
      $scope.menu = "";
      $scope.message = "";
      $scope.lcCheck = function () {
        var msg1 = "Enjoy!";
        var msg2 = "Too, much!";
        var empty = "Please enter data first";
        var menu = $scope.menu.split(",").filter(e => String(e).trim());;
            if ($scope.menu.length == 0) {
                $scope.message = empty;
            } else if (menu.length <= 3 ) {
                $scope.message = msg1;
            } else {
                $scope.message = msg2;
            }
        }
       
      };
    
    })();