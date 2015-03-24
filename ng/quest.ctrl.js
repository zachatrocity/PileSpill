angular.module('app')
.controller('QuestCtrl', function ($scope, QuestSvc, $location) {
  $scope.addQuestion = function () {
    if ($scope.postBody) {
      QuestSvc.create({
        username: 'dickeyxxx',
        title:    $scope.title,
        body:     $scope.postBody
      })
      .success(function (question) {
        $scope.questions.unshift(question)
        $scope.postBody = null
        $location.path('/')
      })
    }
  }

  QuestSvc.fetch()
  .success(function (questions) {
    $scope.questions = questions
  })
})
