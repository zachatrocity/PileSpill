angular.module('app', ['ngRoute','toastr'])
.controller('ApplicationCtrl', function ($scope, $location, $window, UserSvc, toastr) {
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user
    $location.path('/')
  })

  $scope.logout = function(){
  	delete($scope.currentUser) 
    $location.path('/')
    window.sessionStorage.removeItem('token')
  }

  if(UserSvc.isLoggedIn()){
	  	var user = UserSvc.getUser().then(function(response){
		    $scope.currentUser = response;
	  	})
 	}

})
