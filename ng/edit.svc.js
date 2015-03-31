angular.module('app')
.service('EditSvc', function ($http) {

  this.fetchById = function (id) {
    return $http.get('/api/questions/edit/' + id)
  }

  this.updateById = function(obj) {
  	return $http.put('/api/questions/edit/submit', obj)
  }

})