angular.module('app')
.controller('SingleQuestCtrl', ['$scope', '$routeParams', 'SingleQuestSvc', '$location',
  function($scope, $routeParams, SingleQuestSvc, $location) {

    SingleQuestSvc.fetchById($routeParams.questId).then(function(response){
      $scope.quest = response.data;
    })

    $scope.addAnswer = function(){
      SingleQuestSvc.postAnswer(
      	  {
	        username: $scope.currentUser.username,
	        questionId: $routeParams.questId,
	        body:     $scope.answerBody
	      }
      	).then(function(response){
      		//reload
      })
    }

    SingleQuestSvc.fetchAnswers($routeParams.questId).then(function(response){
    	$scope.answers = response.data;
    })
}])