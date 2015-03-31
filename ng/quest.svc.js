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

  this.up = function(obj) {
  	return $http.put('/api/questions/up/', obj)
  }

  this.down = function(obj) {
  	return $http.put('/api/questions/down/', obj)
  }
})
