angular.module('app')
.controller('QuestCtrl', function ($scope, QuestSvc, $location) {
  $scope.addQuestion = function () {
    if ($scope.postBody) {
      QuestSvc.create({
        username: $scope.currentUser.username,
        title:    $scope.title,
        body:     $scope.postBody,
        answersCount: 0,
        upvote:   0,
        downvote: 0
      })
      .success(function (question) {
        $scope.questions.unshift(question)
        $scope.postBody = null
        $location.path('/')
      })
    }
  }

  $scope.askQuestionView = function(){
    $location.path('/ask');
  }

  QuestSvc.fetch()
  .success(function (questions) {
    $scope.questions = questions
  })

  $scope.getQuestionById = function (id){
    QuestSvc.fetchById(id).then(function(response){
      $scope.quest = response;
    })
  }

  $scope.addAnswer = function(){
    console.log("answering");
  }
})
