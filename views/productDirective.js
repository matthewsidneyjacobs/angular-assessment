angular.module('assessment').directive('productDirective', function($state, $http, mainService) {

    return {
      restrict: 'AE',
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
