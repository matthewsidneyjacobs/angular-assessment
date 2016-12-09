angular.module('assessment').controller('productController', function($scope, $state, $http){

  $scope.id = $state.params.id



  $scope.checkId = function() {
      return $http({
        method:'GET',
        url: "http://practiceapi.devmounta.in/products/"+$scope.id      }).then(function(response){
        $scope.selected = response.data
      });
    }


    $scope.checkId();

})
