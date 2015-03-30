angular.module('app')
.service('SingleQuestSvc', function ($http) {

  this.fetchById = function (id) {
    return $http.get('/api/questions/' + id)
  }

  this.postAnswer = function(answer){
  	return $http.post('/api/questions/answer', answer)
  }

  this.fetchAnswers = function(id){
  	return $http.get('/api/questions/answer/' + id)
  }

})
