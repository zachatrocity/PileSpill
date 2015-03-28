angular.module('app')
.controller('ApplicationCtrl', function ($scope, $location, $window, UserSvc) {
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
