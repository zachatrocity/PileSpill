angular.module('app')
.service('QuestSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/quests')
  }
  
  this.fetchById = function (id) {
    return $http.get('/api/quests?id=' + id)
  }

  this.create = function (quest) {
    return $http.post('/api/quests', quest)
  }
})
