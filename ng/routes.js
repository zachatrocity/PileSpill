angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         { controller: 'QuestCtrl', templateUrl: '/templates/questions.html' })
  .when('/register', { controller: 'RegisterCtrl', templateUrl: '/templates/register.html' })
  .when('/login',    { controller: 'LoginCtrl', templateUrl: '/templates/login.html' })
  .when('/ask',      { controller: 'QuestCtrl', templateUrl: '/templates/ask.html' })
  .when('/questions/:questId',    { controller: 'SingleQuestCtrl', templateUrl: '/templates/quest.html' })
  .when('/answer/edit/:ansId',    { controller: 'EditCtrl', templateUrl: '/templates/edit.html' })
})
