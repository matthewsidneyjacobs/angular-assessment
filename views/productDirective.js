angular.module('assessment').directive('productDirective', function($state, $http, mainService) {

    return {
      restrict: 'E',
      scope: {
        $scope.show = true;
      },
      templateUrl: 'views/product-tmpl.html',


      link: function(scope,elem, attrs) {
      }
    //   controller: function($scope, mainService) {
    //     $scope.getProducts  = mainService.getProducts().then(function(response){
    //       $scope.products = response.data
    //   }
    // }




})
