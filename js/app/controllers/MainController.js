function MainController($scope) {
  $scope.name = 'Charles Samuels'
  $scope.email = 'chasms@chas.ms'
  $scope.phone = '917.913.0066'
}

angular
  .module('app')
  .controller('MainController', MainController)
