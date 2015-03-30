angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","$location","$window","UserSvc",function(e,t,n,o){if(e.$on("login",function(n,o){e.currentUser=o,t.path("/")}),e.logout=function(){delete e.currentUser,t.path("/"),window.sessionStorage.removeItem("token")},o.isLoggedIn()){o.getUser().then(function(t){e.currentUser=t})}}]),angular.module("app").controller("AskCtrl",["$scope","QuestSvc",function(e,t){e.addQuestion=function(){e.postBody&&t.create({username:e.currentUser.username,body:e.postBody}).success(function(t){e.questions.unshift(t),e.postBody=null})},t.fetch().success(function(t){e.questions=t})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(e,t){e.login=function(n,o){e.errorMsg="",t.login(n,o).then(function(t){e.$emit("login",t)},function(){e.errorMsg="Incorrect username/password."})}}]),angular.module("app").controller("QuestCtrl",["$scope","QuestSvc","$location",function(e,t,n){e.addQuestion=function(){e.postBody&&t.create({username:e.currentUser.username,title:e.title,body:e.postBody,answersCount:0,upvote:0,downvote:0}).success(function(t){e.questions.unshift(t),e.postBody=null,n.path("/")})},e.askQuestionView=function(){n.path("/ask")},t.fetch().success(function(t){e.questions=t}),e.getQuestionById=function(n){t.fetchById(n).then(function(t){e.quest=t})},e.addAnswer=function(){console.log("answering")}}]),angular.module("app").service("QuestSvc",["$http",function(e){this.fetch=function(){return e.get("/api/quests")},this.fetchById=function(t){return e.get("/api/quests/"+t)},this.create=function(t){return e.post("/api/quests",t)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,t){e.register=function(n,o){t.register(n,o).then(function(t){e.$emit("login",t)})}}]),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"QuestCtrl",templateUrl:"/templates/questions.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"}).when("/ask",{controller:"QuestCtrl",templateUrl:"/templates/ask.html"}).when("/quest/:questId",{controller:"SingleQuestCtrl",templateUrl:"/templates/quest.html"})}]),angular.module("app").controller("SingleQuestCtrl",["$scope","$routeParams","SingleQuestSvc","$location",function(e,t,n){n.fetchById(t.questId).then(function(t){console.log(t),e.quest=t.data}),e.addAnswer=function(){console.log("answering")}}]),angular.module("app").service("SingleQuestSvc",["$http",function(e){this.fetchById=function(t){return e.get("/api/quests/"+t)}}]),angular.module("app").service("UserSvc",["$http",function(e){var t=this;t.getUser=function(){return e.get("/api/users").then(function(e){return e.data})},t.login=function(n,o){return e.post("/api/sessions",{username:n,password:o}).then(function(n){return window.sessionStorage.token=n.data,e.defaults.headers.common["x-auth"]=n.data,t.getUser()})},t.register=function(n,o){return e.post("/api/users",{username:n,password:o}).then(function(){return t.login(n,o)})},t.isLoggedIn=function(){var t=!1;return window.sessionStorage.token&&(e.defaults.headers.common["x-auth"]=window.sessionStorage.token,t=!0),t}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJhc2suY3RybC5qcyIsImxvZ2luLmN0cmwuanMiLCJxdWVzdC5jdHJsLmpzIiwicXVlc3Quc3ZjLmpzIiwicmVnaXN0ZXIuY3RybC5qcyIsInJvdXRlcy5qcyIsInNpbmdsZXF1ZXN0LmN0cmwuanMiLCJzaW5nbGVxdWVzdC5zdmMuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRsb2NhdGlvbiIsIiR3aW5kb3ciLCJVc2VyU3ZjIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsInBhdGgiLCJsb2dvdXQiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJpc0xvZ2dlZEluIiwiZ2V0VXNlciIsInRoZW4iLCJyZXNwb25zZSIsIlF1ZXN0U3ZjIiwiYWRkUXVlc3Rpb24iLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJxdWVzdGlvbiIsInF1ZXN0aW9ucyIsInVuc2hpZnQiLCJmZXRjaCIsImxvZ2luIiwicGFzc3dvcmQiLCJlcnJvck1zZyIsIiRlbWl0IiwidGl0bGUiLCJhbnN3ZXJzQ291bnQiLCJ1cHZvdGUiLCJkb3dudm90ZSIsImFza1F1ZXN0aW9uVmlldyIsImdldFF1ZXN0aW9uQnlJZCIsImlkIiwiZmV0Y2hCeUlkIiwicXVlc3QiLCJhZGRBbnN3ZXIiLCJjb25zb2xlIiwibG9nIiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsInBvc3QiLCJyZWdpc3RlciIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiJHJvdXRlUGFyYW1zIiwiU2luZ2xlUXVlc3RTdmMiLCJxdWVzdElkIiwiZGF0YSIsInN2YyIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicmVzdWx0Il0s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LEVBQUFlLFNBQUFDLFFBQUFDLE9BQUEsVUFBQXBELE9BQUFDLGVBQUFnRCxNQUNBSSxHQUFBLEdBRUZBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICduZ1JvdXRlJ1xuXSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgJHdpbmRvdywgVXNlclN2Yykge1xuICAkc2NvcGUuJG9uKCdsb2dpbicsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlclxuICAgICRsb2NhdGlvbi5wYXRoKCcvJylcbiAgfSlcblxuICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24oKXtcbiAgXHRkZWxldGUoJHNjb3BlLmN1cnJlbnRVc2VyKSBcbiAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgfVxuXG4gIGlmKFVzZXJTdmMuaXNMb2dnZWRJbigpKXtcblx0ICBcdHZhciB1c2VyID0gVXNlclN2Yy5nZXRVc2VyKCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0ICAgICRzY29wZS5jdXJyZW50VXNlciA9IHJlc3BvbnNlO1xuXHQgIFx0fSlcbiBcdH1cblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0Fza0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBRdWVzdFN2Yykge1xuICAkc2NvcGUuYWRkUXVlc3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xuICAgICAgUXVlc3RTdmMuY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWU6ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZSxcbiAgICAgICAgYm9keTogICAgICRzY29wZS5wb3N0Qm9keVxuICAgICAgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgICAkc2NvcGUucXVlc3Rpb25zLnVuc2hpZnQocXVlc3Rpb24pXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgUXVlc3RTdmMuZmV0Y2goKVxuICAuc3VjY2VzcyhmdW5jdGlvbiAocXVlc3Rpb25zKSB7XG4gICAgJHNjb3BlLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uc1xuICB9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjKSB7XG4gICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgXHQkc2NvcGUuZXJyb3JNc2cgPSAnJztcbiAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHVzZXIpXG4gICAgfSwgZnVuY3Rpb24oZXJyb3Ipe1xuICAgIFx0JHNjb3BlLmVycm9yTXNnID0gXCJJbmNvcnJlY3QgdXNlcm5hbWUvcGFzc3dvcmQuXCI7XG4gICAgfSlcbiAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1F1ZXN0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFF1ZXN0U3ZjLCAkbG9jYXRpb24pIHtcbiAgJHNjb3BlLmFkZFF1ZXN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcbiAgICAgIFF1ZXN0U3ZjLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWUsXG4gICAgICAgIHRpdGxlOiAgICAkc2NvcGUudGl0bGUsXG4gICAgICAgIGJvZHk6ICAgICAkc2NvcGUucG9zdEJvZHksXG4gICAgICAgIGFuc3dlcnNDb3VudDogMCxcbiAgICAgICAgdXB2b3RlOiAgIDAsXG4gICAgICAgIGRvd252b3RlOiAwXG4gICAgICB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgICAgICRzY29wZS5xdWVzdGlvbnMudW5zaGlmdChxdWVzdGlvbilcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gICRzY29wZS5hc2tRdWVzdGlvblZpZXcgPSBmdW5jdGlvbigpe1xuICAgICRsb2NhdGlvbi5wYXRoKCcvYXNrJyk7XG4gIH1cblxuICBRdWVzdFN2Yy5mZXRjaCgpXG4gIC5zdWNjZXNzKGZ1bmN0aW9uIChxdWVzdGlvbnMpIHtcbiAgICAkc2NvcGUucXVlc3Rpb25zID0gcXVlc3Rpb25zXG4gIH0pXG5cbiAgJHNjb3BlLmdldFF1ZXN0aW9uQnlJZCA9IGZ1bmN0aW9uIChpZCl7XG4gICAgUXVlc3RTdmMuZmV0Y2hCeUlkKGlkKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICRzY29wZS5xdWVzdCA9IHJlc3BvbnNlO1xuICAgIH0pXG4gIH1cblxuICAkc2NvcGUuYWRkQW5zd2VyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcImFuc3dlcmluZ1wiKTtcbiAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1F1ZXN0U3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9xdWVzdHMnKVxuICB9XG4gIFxuICB0aGlzLmZldGNoQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcXVlc3RzLycgKyBpZClcbiAgfVxuXG4gIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKHF1ZXN0KSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcXVlc3RzJywgcXVlc3QpXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdSZWdpc3RlckN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjKSB7XG4gICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICBVc2VyU3ZjLnJlZ2lzdGVyKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHVzZXIpXG4gICAgfSlcbiAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXJcbiAgLndoZW4oJy8nLCAgICAgICAgIHsgY29udHJvbGxlcjogJ1F1ZXN0Q3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9xdWVzdGlvbnMuaHRtbCcgfSlcbiAgLndoZW4oJy9yZWdpc3RlcicsIHsgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9yZWdpc3Rlci5odG1sJyB9KVxuICAud2hlbignL2xvZ2luJywgICAgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL2xvZ2luLmh0bWwnIH0pXG4gIC53aGVuKCcvYXNrJywgICAgICB7IGNvbnRyb2xsZXI6ICdRdWVzdEN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvYXNrLmh0bWwnIH0pXG4gIC53aGVuKCcvcXVlc3QvOnF1ZXN0SWQnLCAgICB7IGNvbnRyb2xsZXI6ICdTaW5nbGVRdWVzdEN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcXVlc3QuaHRtbCcgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdTaW5nbGVRdWVzdEN0cmwnLCBbJyRzY29wZScsICckcm91dGVQYXJhbXMnLCAnU2luZ2xlUXVlc3RTdmMnLCAnJGxvY2F0aW9uJyxcbiAgZnVuY3Rpb24oJHNjb3BlLCAkcm91dGVQYXJhbXMsIFNpbmdsZVF1ZXN0U3ZjLCAkbG9jYXRpb24pIHtcblxuICAgIFNpbmdsZVF1ZXN0U3ZjLmZldGNoQnlJZCgkcm91dGVQYXJhbXMucXVlc3RJZCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICRzY29wZS5xdWVzdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfSlcblxuICAgICRzY29wZS5hZGRBbnN3ZXIgPSBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coXCJhbnN3ZXJpbmdcIik7XG4gICAgfVxufV0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdTaW5nbGVRdWVzdFN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gIHRoaXMuZmV0Y2hCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9xdWVzdHMvJyArIGlkKVxuICB9XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gIHZhciBzdmMgPSB0aGlzXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWF1dGgnXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpXG4gICAgfSlcbiAgfVxuICBzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMnLCB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgfSlcbiAgfVxuICBzdmMuaXNMb2dnZWRJbiA9IGZ1bmN0aW9uICgpe1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pe1xuICAgICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ3gtYXV0aCddID0gd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuXG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9