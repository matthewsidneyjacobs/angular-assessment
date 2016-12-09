angular.module('assessment').controller('mainCtrl', function($scope, mainService){

    $scope.test = "this is working";

    mainService.getProducts().then(function(response){
      $scope.products = response.data
    });


})
