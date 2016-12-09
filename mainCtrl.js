angular.module('assessment').controller('mainCtrl', function($scope, mainService, $state){

    $scope.test = "this is working";

    mainService.getProducts().then(function(response){
      $scope.products = response.data
    });


    $scope.id = $state.params.id

})
