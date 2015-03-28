angular.module('app')
.service('UserSvc', function ($http) {
  var svc = this
  svc.getUser = function () {
    return $http.get('/api/users')
    .then(function (response) {
      return response.data
    })
  }
  svc.login = function (username, password) {
    return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function (response) {
      window.sessionStorage.token = response.data
      $http.defaults.headers.common['x-auth'] = response.data
      return svc.getUser()
    })
  }
  svc.register = function (username, password) {
    return $http.post('/api/users', {
      username: username, password: password
    }).then(function () {
      return svc.login(username, password)
    })
  }
  svc.isLoggedIn = function (){
    var result = false;
    if(window.sessionStorage.token){
      $http.defaults.headers.common['x-auth'] = window.sessionStorage.token
      result = true;
    }
    return result;
  }
})
