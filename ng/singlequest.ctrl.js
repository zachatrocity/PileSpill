angular.module('app')
.controller('SingleQuestCtrl', ['$scope', '$routeParams', 'SingleQuestSvc', '$location',
  function($scope, $routeParams, SingleQuestSvc, $location) {

    SingleQuestSvc.fetchById($routeParams.questId).then(function(response){
      console.log(response)
      $scope.quest = response.data;
    })

    $scope.addAnswer = function(){
      console.log("answering");
    }
}])
