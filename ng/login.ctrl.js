angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc) {
  $scope.login = function (username, password) {
  	$scope.errorMsg = '';
    UserSvc.login(username, password)
    .then(function (user) {
      $scope.$emit('login', user)
    }, function(error){
    	$scope.errorMsg = "Incorrect username/password.";
    })
  }
})
