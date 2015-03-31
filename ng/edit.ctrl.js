angular.module('app')
.controller('EditCtrl', function ($scope, EditSvc, $location, $routeParams) {

	EditSvc.fetchById($routeParams.ansId).then(function(response){
		console.log(response.data)
	  $scope.answer = response.data;
      $scope.answerTitle = response.data.title
      $scope.answerBody = response.data.body
    })

    $scope.saveEdit = function(){
    	EditSvc.updateById({id: $routeParams.ansId, body: $scope.answerBody})
    	.then(function(response){
    		$location.path('/questions/' + $scope.answer.questionId)
    	})
    }

    $scope.discard = function(){
    	$location.path('/questions/' + $scope.answer.questionId)
    }

})