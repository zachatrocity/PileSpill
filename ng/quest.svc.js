angular.module('app')
.service('QuestSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/questions')
  }
  
  this.fetchById = function (id) {
    return $http.get('/api/questions/' + id)
  }

  this.create = function (quest) {
    return $http.post('/api/questions', quest)
  }
})
