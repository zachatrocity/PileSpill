angular.module('app')
.controller('SingleQuestCtrl', ['$scope', '$routeParams', 'SingleQuestSvc', '$location', 'toastr',
  function($scope, $routeParams, SingleQuestSvc, $location, toastr) {

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

    $scope.deleteAnswer = function(index){
    	SingleQuestSvc.delete({id: $scope.answers[index]._id}).then(function(res){
    		$scope.answers.splice(index, 1);
	    })
    }

    $scope.upvoteAnswer = function(index){
    	if($scope.currentUser){
		    SingleQuestSvc.up({ type: "Answer", id: $scope.answers[index]._id}).then(function(ans){
		      $scope.answers[index] = ans.data;
		    })
		} else{
			toastr.error('You must be logged in to vote', 'Error');
		}
	  }

	$scope.downvoteAnswer = function(index){
		if($scope.currentUser){
		    SingleQuestSvc.down({type: "Answer", id: $scope.answers[index]._id}).then(function(ans){
		      $scope.answers[index] = ans.data;
		    })
		}else{
			toastr.error('You must be logged in to vote', 'Error');
		}
	  }

    SingleQuestSvc.fetchAnswers($routeParams.questId).then(function(response){
    	$scope.answers = response.data;
    })
}])
/**
 * A generic confirmation for risky actions.
 * Usage: Add attributes: ng-really-message="Are you sure"? ng-really-click="takeAction()" function
 */
.directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);