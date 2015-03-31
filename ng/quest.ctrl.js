angular.module('app')
.controller('QuestCtrl', function ($scope, QuestSvc, $location, toastr) {
  $scope.addQuestion = function () {
    if ($scope.postBody) {
      QuestSvc.create({
        username: $scope.currentUser.username,
        title:    $scope.title,
        body:     $scope.postBody,
        answersCount: 0,
        votes:   0
      })
      .success(function (question) {
        $scope.questions.unshift(question)
        $scope.postBody = null
        $location.path('/')
      })
    }
  }

  $scope.upvoteQuestion = function(index){
    if($scope.currentUser){
      QuestSvc.up({ type: "Question", id: $scope.questions[index]._id}).then(function(quest){
        $scope.questions[index] = quest.data;
      })
    } else{
      toastr.error('You must be logged in to vote', 'Error');
    }
  }

  $scope.downvoteQuestion = function(index){
    if($scope.currentUser){
      QuestSvc.down({ type: "Question", id: $scope.questions[index]._id}).then(function(quest){
        $scope.questions[index] = quest.data;
      })
    }else{
      toastr.error('You must be logged in to vote', 'Error');
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

})
