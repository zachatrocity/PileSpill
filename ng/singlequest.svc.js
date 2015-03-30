angular.module('app')
.service('SingleQuestSvc', function ($http) {

  this.fetchById = function (id) {
    return $http.get('/api/questions/' + id)
  }

})
