angular.module('app')
.service('QuestSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/quests')
  }
  this.create = function (quest) {
    return $http.post('/api/quests', quest)
  }
})
