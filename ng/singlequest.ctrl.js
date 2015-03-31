angular.module('app')
.controller('SingleQuestCtrl', ['$scope', '$routeParams', 'SingleQuestSvc', '$location',
  function($scope, $routeParams, SingleQuestSvc, $location) {

    SingleQuestSvc.fetchById($routeParams.questId).then(function(response){
      $scope.quest = response.data;
    })
    
    $scope.answerBody = "";

    $scope.addAnswer = function(){
      if($scope.answerBody){
	      SingleQuestSvc.postAnswer(
	      	  {
		        username: $scope.currentUser.username,
		        questionId: $routeParams.questId,
		        body:     $scope.answerBody
		      }
	      	).then(function(response){
	      		//reload
	      		$scope.answers.push(response.data)
	      })

	      	$scope.answerBody = ""
      }
    }

    $scope.upvoteAnswer = function(index){
	    SingleQuestSvc.up({ type: "Answer", id: $scope.answers[index]._id}).then(function(ans){
	      $scope.answers[index] = ans.data;
	    })
	  }

	$scope.downvoteAnswer = function(index){
	    SingleQuestSvc.down({type: "Answer", id: $scope.answers[index]._id}).then(function(ans){
	      $scope.answers[index] = ans.data;
	    })
	  }

    SingleQuestSvc.fetchAnswers($routeParams.questId).then(function(response){
    	$scope.answers = response.data;
    })
}])