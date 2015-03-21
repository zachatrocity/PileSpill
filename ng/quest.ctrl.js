angular.module('app')
.controller('QuestCtrl', function ($scope, QuestSvc) {
  $scope.addQuestion = function () {
    if ($scope.postBody) {
      QuestSvc.create({
        username: 'dickeyxxx',
        body:     $scope.postBody
      })
      .success(function (question) {
        $scope.questions.unshift(question)
        $scope.postBody = null
      })
    }
  }

  QuestSvc.fetch()
  .success(function (questions) {
    $scope.questions = questions
  })
})
