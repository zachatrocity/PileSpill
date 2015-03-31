angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","$location","$window","UserSvc",function(t,e,n,o){if(t.$on("login",function(n,o){t.currentUser=o,e.path("/")}),t.logout=function(){delete t.currentUser,e.path("/"),window.sessionStorage.removeItem("token")},o.isLoggedIn()){o.getUser().then(function(e){t.currentUser=e})}}]),angular.module("app").controller("AskCtrl",["$scope","QuestSvc",function(t,e){t.addQuestion=function(){t.postBody&&e.create({username:t.currentUser.username,body:t.postBody}).success(function(e){t.questions.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.questions=e})}]),angular.module("app").controller("EditCtrl",["$scope","EditSvc","$location","$routeParams",function(t,e,n,o){e.fetchById(o.ansId).then(function(e){console.log(e.data),t.answer=e.data,t.answerTitle=e.data.title,t.answerBody=e.data.body}),t.saveEdit=function(){e.updateById({id:o.ansId,body:t.answerBody}).then(function(){n.path("/questions/"+t.answer.questionId)})},t.discard=function(){n.path("/questions/"+t.answer.questionId)}}]),angular.module("app").service("EditSvc",["$http",function(t){this.fetchById=function(e){return t.get("/api/questions/edit/"+e)},this.updateById=function(e){return t.put("/api/questions/edit/submit",e)}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(n,o){t.errorMsg="",e.login(n,o).then(function(e){t.$emit("login",e)},function(){t.errorMsg="Incorrect username/password."})}}]),angular.module("app").controller("QuestCtrl",["$scope","QuestSvc","$location",function(t,e,n){t.addQuestion=function(){t.postBody&&e.create({username:t.currentUser.username,title:t.title,body:t.postBody,answersCount:0,votes:0}).success(function(e){t.questions.unshift(e),t.postBody=null,n.path("/")})},t.upvoteQuestion=function(n){e.up({type:"Question",id:t.questions[n]._id}).then(function(e){t.questions[n]=e.data})},t.downvoteQuestion=function(n){e.down({type:"Question",id:t.questions[n]._id}).then(function(e){t.questions[n]=e.data})},t.askQuestionView=function(){n.path("/ask")},e.fetch().success(function(e){t.questions=e}),t.getQuestionById=function(n){e.fetchById(n).then(function(e){t.quest=e})}}]),angular.module("app").service("QuestSvc",["$http",function(t){this.fetch=function(){return t.get("/api/questions")},this.fetchById=function(e){return t.get("/api/questions/"+e)},this.create=function(e){return t.post("/api/questions",e)},this.up=function(e){return t.put("/api/questions/up/",e)},this.down=function(e){return t.put("/api/questions/down/",e)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(t,e){t.register=function(n,o){e.register(n,o).then(function(e){t.$emit("login",e)})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"QuestCtrl",templateUrl:"/templates/questions.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"}).when("/ask",{controller:"QuestCtrl",templateUrl:"/templates/ask.html"}).when("/questions/:questId",{controller:"SingleQuestCtrl",templateUrl:"/templates/quest.html"}).when("/answer/edit/:ansId",{controller:"EditCtrl",templateUrl:"/templates/edit.html"})}]),angular.module("app").controller("SingleQuestCtrl",["$scope","$routeParams","SingleQuestSvc","$location",function(t,e,n){n.fetchById(e.questId).then(function(e){t.quest=e.data}),t.answerBody="",t.addAnswer=function(){t.answerBody&&(n.postAnswer({username:t.currentUser.username,questionId:e.questId,body:t.answerBody}).then(function(e){t.answers.push(e.data)}),t.answerBody="")},t.upvoteAnswer=function(e){n.up({type:"Answer",id:t.answers[e]._id}).then(function(n){t.answers[e]=n.data})},t.downvoteAnswer=function(e){n.down({type:"Answer",id:t.answers[e]._id}).then(function(n){t.answers[e]=n.data})},n.fetchAnswers(e.questId).then(function(e){t.answers=e.data})}]),angular.module("app").service("SingleQuestSvc",["$http",function(t){this.fetchById=function(e){return t.get("/api/questions/"+e)},this.postAnswer=function(e){return t.post("/api/questions/answer",e)},this.fetchAnswers=function(e){return t.get("/api/questions/answer/"+e)},this.up=function(e){return t.put("/api/questions/up/",e)},this.down=function(e){return t.put("/api/questions/down/",e)}}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users").then(function(t){return t.data})},e.login=function(n,o){return t.post("/api/sessions",{username:n,password:o}).then(function(n){return window.sessionStorage.token=n.data,t.defaults.headers.common["x-auth"]=n.data,e.getUser()})},e.register=function(n,o){return t.post("/api/users",{username:n,password:o}).then(function(){return e.login(n,o)})},e.isLoggedIn=function(){var e=!1;return window.sessionStorage.token&&(t.defaults.headers.common["x-auth"]=window.sessionStorage.token,e=!0),e}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJhc2suY3RybC5qcyIsImVkaXQuY3RybC5qcyIsImVkaXQuc3ZjLmpzIiwibG9naW4uY3RybC5qcyIsInF1ZXN0LmN0cmwuanMiLCJxdWVzdC5zdmMuanMiLCJyZWdpc3Rlci5jdHJsLmpzIiwicm91dGVzLmpzIiwic2luZ2xlcXVlc3QuY3RybC5qcyIsInNpbmdsZXF1ZXN0LnN2Yy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiJHdpbmRvdyIsIlVzZXJTdmMiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwicGF0aCIsImxvZ291dCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJnZXRVc2VyIiwidGhlbiIsInJlc3BvbnNlIiwiUXVlc3RTdmMiLCJhZGRRdWVzdGlvbiIsInBvc3RCb2R5IiwiY3JlYXRlIiwidXNlcm5hbWUiLCJib2R5Iiwic3VjY2VzcyIsInF1ZXN0aW9uIiwicXVlc3Rpb25zIiwidW5zaGlmdCIsImZldGNoIiwiRWRpdFN2YyIsIiRyb3V0ZVBhcmFtcyIsImZldGNoQnlJZCIsImFuc0lkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhbnN3ZXIiLCJhbnN3ZXJUaXRsZSIsInRpdGxlIiwiYW5zd2VyQm9keSIsInNhdmVFZGl0IiwidXBkYXRlQnlJZCIsImlkIiwicXVlc3Rpb25JZCIsImRpc2NhcmQiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0Iiwib2JqIiwicHV0IiwibG9naW4iLCJwYXNzd29yZCIsImVycm9yTXNnIiwiJGVtaXQiLCJhbnN3ZXJzQ291bnQiLCJ2b3RlcyIsInVwdm90ZVF1ZXN0aW9uIiwiaW5kZXgiLCJ1cCIsInR5cGUiLCJfaWQiLCJxdWVzdCIsImRvd252b3RlUXVlc3Rpb24iLCJkb3duIiwiYXNrUXVlc3Rpb25WaWV3IiwiZ2V0UXVlc3Rpb25CeUlkIiwicG9zdCIsInJlZ2lzdGVyIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJTaW5nbGVRdWVzdFN2YyIsInF1ZXN0SWQiLCJhZGRBbnN3ZXIiLCJwb3N0QW5zd2VyIiwiYW5zd2VycyIsInB1c2giLCJ1cHZvdGVBbnN3ZXIiLCJhbnMiLCJkb3dudm90ZUFuc3dlciIsImZldGNoQW5zd2VycyIsInN2YyIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNFLFlDREZELFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxtQkFBK0IsU0FBQSxZQUFBLFVBQUEsVUFBQSxTQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQVk3QixHQVhBSCxFQUFBSSxJQUFBLFFBQUEsU0FBQUMsRUFBQUMsR0FDRU4sRUFBQU8sWUFBQUQsRUFDQUwsRUFBQU8sS0FBQSxPQUdGUixFQUFBUyxPQUFBLGlCQUNDVCxHQUFBLFlBQ0NDLEVBQUFPLEtBQUEsS0FDQUUsT0FBQUMsZUFBQUMsV0FBQSxVQUdGVCxFQUFBVSxhQUNFLENBQUFWLEVBQUFXLFVBQUFDLEtBQUEsU0FBQUMsR0FDRWhCLEVBQUFPLFlBQUFTLFFDZk5uQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsV0FBdUIsU0FBQSxXQUFBLFNBQUFDLEVBQUFpQixHQUNyQmpCLEVBQUFrQixZQUFBLFdBQ0VsQixFQUFBbUIsVUFDRUYsRUFBQUcsUUFDRUMsU0FBQXJCLEVBQUFPLFlBQUFjLFNBQ0FDLEtBQUF0QixFQUFBbUIsV0FFRkksUUFBQSxTQUFBQyxHQUNFeEIsRUFBQXlCLFVBQUFDLFFBQUFGLEdBQ0F4QixFQUFBbUIsU0FBQSxRQUtORixFQUFBVSxRQUNBSixRQUFBLFNBQUFFLEdBQ0V6QixFQUFBeUIsVUFBQUEsT0NqQko1QixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsWUFBd0Is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LFNBQUE5QyxFQUFBOEIsR0FDRSxNQUFBTixHQUFBcUIsS0FBQSxjQUNFN0MsU0FBQUEsRUFBQThCLFNBQUFBLElBQ0ZwQyxLQUFBLFdBQ0UsTUFBQW1FLEdBQUFoQyxNQUFBN0IsRUFBQThCLE1BR0orQixFQUFBckUsV0FBQSxXQUNFLEdBQUEwRSxJQUFBLENBS0EsT0FKQTdFLFFBQUFDLGVBQUF3RSxRQUNFdEMsRUFBQXVDLFNBQUFDLFFBQUFDLE9BQUEsVUFBQTVFLE9BQUFDLGVBQUF3RSxNQUNBSSxHQUFBLEdBRUZBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICduZ1JvdXRlJ1xuXSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgJHdpbmRvdywgVXNlclN2Yykge1xuICAkc2NvcGUuJG9uKCdsb2dpbicsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlclxuICAgICRsb2NhdGlvbi5wYXRoKCcvJylcbiAgfSlcblxuICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24oKXtcbiAgXHRkZWxldGUoJHNjb3BlLmN1cnJlbnRVc2VyKSBcbiAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgfVxuXG4gIGlmKFVzZXJTdmMuaXNMb2dnZWRJbigpKXtcblx0ICBcdHZhciB1c2VyID0gVXNlclN2Yy5nZXRVc2VyKCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0ICAgICRzY29wZS5jdXJyZW50VXNlciA9IHJlc3BvbnNlO1xuXHQgIFx0fSlcbiBcdH1cblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0Fza0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBRdWVzdFN2Yykge1xuICAkc2NvcGUuYWRkUXVlc3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xuICAgICAgUXVlc3RTdmMuY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWU6ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZSxcbiAgICAgICAgYm9keTogICAgICRzY29wZS5wb3N0Qm9keVxuICAgICAgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgICAkc2NvcGUucXVlc3Rpb25zLnVuc2hpZnQocXVlc3Rpb24pXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgUXVlc3RTdmMuZmV0Y2goKVxuICAuc3VjY2VzcyhmdW5jdGlvbiAocXVlc3Rpb25zKSB7XG4gICAgJHNjb3BlLnF1ZXN0aW9ucyA9IHF1ZXN0aW9uc1xuICB9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdFZGl0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEVkaXRTdmMsICRsb2NhdGlvbiwgJHJvdXRlUGFyYW1zKSB7XG5cblx0RWRpdFN2Yy5mZXRjaEJ5SWQoJHJvdXRlUGFyYW1zLmFuc0lkKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuXHQgICRzY29wZS5hbnN3ZXIgPSByZXNwb25zZS5kYXRhO1xuICAgICAgJHNjb3BlLmFuc3dlclRpdGxlID0gcmVzcG9uc2UuZGF0YS50aXRsZVxuICAgICAgJHNjb3BlLmFuc3dlckJvZHkgPSByZXNwb25zZS5kYXRhLmJvZHlcbiAgICB9KVxuXG4gICAgJHNjb3BlLnNhdmVFZGl0ID0gZnVuY3Rpb24oKXtcbiAgICBcdEVkaXRTdmMudXBkYXRlQnlJZCh7aWQ6ICRyb3V0ZVBhcmFtcy5hbnNJZCwgYm9keTogJHNjb3BlLmFuc3dlckJvZHl9KVxuICAgIFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgIFx0XHQkbG9jYXRpb24ucGF0aCgnL3F1ZXN0aW9ucy8nICsgJHNjb3BlLmFuc3dlci5xdWVzdGlvbklkKVxuICAgIFx0fSlcbiAgICB9XG5cbiAgICAkc2NvcGUuZGlzY2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgXHQkbG9jYXRpb24ucGF0aCgnL3F1ZXN0aW9ucy8nICsgJHNjb3BlLmFuc3dlci5xdWVzdGlvbklkKVxuICAgIH1cblxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdFZGl0U3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cbiAgdGhpcy5mZXRjaEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3F1ZXN0aW9ucy9lZGl0LycgKyBpZClcbiAgfVxuXG4gIHRoaXMudXBkYXRlQnlJZCA9IGZ1bmN0aW9uKG9iaikge1xuICBcdHJldHVybiAkaHR0cC5wdXQoJy9hcGkvcXVlc3Rpb25zL2VkaXQvc3VibWl0Jywgb2JqKVxuICB9XG5cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgVXNlclN2Yykge1xuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIFx0JHNjb3BlLmVycm9yTXNnID0gJyc7XG4gICAgVXNlclN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCB1c2VyKVxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICBcdCRzY29wZS5lcnJvck1zZyA9IFwiSW5jb3JyZWN0IHVzZXJuYW1lL3Bhc3N3b3JkLlwiO1xuICAgIH0pXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdRdWVzdEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBRdWVzdFN2YywgJGxvY2F0aW9uKSB7XG4gICRzY29wZS5hZGRRdWVzdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICBRdWVzdFN2Yy5jcmVhdGUoe1xuICAgICAgICB1c2VybmFtZTogJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lLFxuICAgICAgICB0aXRsZTogICAgJHNjb3BlLnRpdGxlLFxuICAgICAgICBib2R5OiAgICAgJHNjb3BlLnBvc3RCb2R5LFxuICAgICAgICBhbnN3ZXJzQ291bnQ6IDAsXG4gICAgICAgIHZvdGVzOiAgIDBcbiAgICAgIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICAgICAgJHNjb3BlLnF1ZXN0aW9ucy51bnNoaWZ0KHF1ZXN0aW9uKVxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsXG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJylcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgJHNjb3BlLnVwdm90ZVF1ZXN0aW9uID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgIFF1ZXN0U3ZjLnVwKHsgdHlwZTogXCJRdWVzdGlvblwiLCBpZDogJHNjb3BlLnF1ZXN0aW9uc1tpbmRleF0uX2lkfSkudGhlbihmdW5jdGlvbihxdWVzdCl7XG4gICAgICAkc2NvcGUucXVlc3Rpb25zW2luZGV4XSA9IHF1ZXN0LmRhdGE7XG4gICAgfSlcbiAgfVxuXG4gICRzY29wZS5kb3dudm90ZVF1ZXN0aW9uID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgIFF1ZXN0U3ZjLmRvd24oeyB0eXBlOiBcIlF1ZXN0aW9uXCIsIGlkOiAkc2NvcGUucXVlc3Rpb25zW2luZGV4XS5faWR9KS50aGVuKGZ1bmN0aW9uKHF1ZXN0KXtcbiAgICAgICRzY29wZS5xdWVzdGlvbnNbaW5kZXhdID0gcXVlc3QuZGF0YTtcbiAgICB9KVxuICB9XG5cbiAgJHNjb3BlLmFza1F1ZXN0aW9uVmlldyA9IGZ1bmN0aW9uKCl7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9hc2snKTtcbiAgfVxuXG4gIFF1ZXN0U3ZjLmZldGNoKClcbiAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHF1ZXN0aW9ucykge1xuICAgICRzY29wZS5xdWVzdGlvbnMgPSBxdWVzdGlvbnNcbiAgfSlcblxuICAkc2NvcGUuZ2V0UXVlc3Rpb25CeUlkID0gZnVuY3Rpb24gKGlkKXtcbiAgICBRdWVzdFN2Yy5mZXRjaEJ5SWQoaWQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgJHNjb3BlLnF1ZXN0ID0gcmVzcG9uc2U7XG4gICAgfSlcbiAgfVxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnUXVlc3RTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcbiAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3F1ZXN0aW9ucycpXG4gIH1cbiAgXG4gIHRoaXMuZmV0Y2hCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9xdWVzdGlvbnMvJyArIGlkKVxuICB9XG5cbiAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAocXVlc3QpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9xdWVzdGlvbnMnLCBxdWVzdClcbiAgfVxuXG4gIHRoaXMudXAgPSBmdW5jdGlvbihvYmopIHtcbiAgXHRyZXR1cm4gJGh0dHAucHV0KCcvYXBpL3F1ZXN0aW9ucy91cC8nLCBvYmopXG4gIH1cblxuICB0aGlzLmRvd24gPSBmdW5jdGlvbihvYmopIHtcbiAgXHRyZXR1cm4gJGh0dHAucHV0KCcvYXBpL3F1ZXN0aW9ucy9kb3duLycsIG9iailcbiAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcbiAgICB9KVxuICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAud2hlbignLycsICAgICAgICAgeyBjb250cm9sbGVyOiAnUXVlc3RDdHJsJywgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL3F1ZXN0aW9ucy5odG1sJyB9KVxuICAud2hlbignL3JlZ2lzdGVyJywgeyBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL3JlZ2lzdGVyLmh0bWwnIH0pXG4gIC53aGVuKCcvbG9naW4nLCAgICB7IGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvbG9naW4uaHRtbCcgfSlcbiAgLndoZW4oJy9hc2snLCAgICAgIHsgY29udHJvbGxlcjogJ1F1ZXN0Q3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9hc2suaHRtbCcgfSlcbiAgLndoZW4oJy9xdWVzdGlvbnMvOnF1ZXN0SWQnLCAgICB7IGNvbnRyb2xsZXI6ICdTaW5nbGVRdWVzdEN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcXVlc3QuaHRtbCcgfSlcbiAgLndoZW4oJy9hbnN3ZXIvZWRpdC86YW5zSWQnLCAgICB7IGNvbnRyb2xsZXI6ICdFZGl0Q3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9lZGl0Lmh0bWwnIH0pXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignU2luZ2xlUXVlc3RDdHJsJywgWyckc2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJ1NpbmdsZVF1ZXN0U3ZjJywgJyRsb2NhdGlvbicsXG4gIGZ1bmN0aW9uKCRzY29wZSwgJHJvdXRlUGFyYW1zLCBTaW5nbGVRdWVzdFN2YywgJGxvY2F0aW9uKSB7XG5cbiAgICBTaW5nbGVRdWVzdFN2Yy5mZXRjaEJ5SWQoJHJvdXRlUGFyYW1zLnF1ZXN0SWQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgJHNjb3BlLnF1ZXN0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9KVxuICAgIFxuICAgICRzY29wZS5hbnN3ZXJCb2R5ID0gXCJcIjtcblxuICAgICRzY29wZS5hZGRBbnN3ZXIgPSBmdW5jdGlvbigpe1xuICAgICAgaWYoJHNjb3BlLmFuc3dlckJvZHkpe1xuXHQgICAgICBTaW5nbGVRdWVzdFN2Yy5wb3N0QW5zd2VyKFxuXHQgICAgICBcdCAge1xuXHRcdCAgICAgICAgdXNlcm5hbWU6ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZSxcblx0XHQgICAgICAgIHF1ZXN0aW9uSWQ6ICRyb3V0ZVBhcmFtcy5xdWVzdElkLFxuXHRcdCAgICAgICAgYm9keTogICAgICRzY29wZS5hbnN3ZXJCb2R5XG5cdFx0ICAgICAgfVxuXHQgICAgICBcdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdCAgICAgIFx0XHQvL3JlbG9hZFxuXHQgICAgICBcdFx0JHNjb3BlLmFuc3dlcnMucHVzaChyZXNwb25zZS5kYXRhKVxuXHQgICAgICB9KVxuXG5cdCAgICAgIFx0JHNjb3BlLmFuc3dlckJvZHkgPSBcIlwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgJHNjb3BlLnVwdm90ZUFuc3dlciA9IGZ1bmN0aW9uKGluZGV4KXtcblx0ICAgIFNpbmdsZVF1ZXN0U3ZjLnVwKHsgdHlwZTogXCJBbnN3ZXJcIiwgaWQ6ICRzY29wZS5hbnN3ZXJzW2luZGV4XS5faWR9KS50aGVuKGZ1bmN0aW9uKGFucyl7XG5cdCAgICAgICRzY29wZS5hbnN3ZXJzW2luZGV4XSA9IGFucy5kYXRhO1xuXHQgICAgfSlcblx0ICB9XG5cblx0JHNjb3BlLmRvd252b3RlQW5zd2VyID0gZnVuY3Rpb24oaW5kZXgpe1xuXHQgICAgU2luZ2xlUXVlc3RTdmMuZG93bih7dHlwZTogXCJBbnN3ZXJcIiwgaWQ6ICRzY29wZS5hbnN3ZXJzW2luZGV4XS5faWR9KS50aGVuKGZ1bmN0aW9uKGFucyl7XG5cdCAgICAgICRzY29wZS5hbnN3ZXJzW2luZGV4XSA9IGFucy5kYXRhO1xuXHQgICAgfSlcblx0ICB9XG5cbiAgICBTaW5nbGVRdWVzdFN2Yy5mZXRjaEFuc3dlcnMoJHJvdXRlUGFyYW1zLnF1ZXN0SWQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgIFx0JHNjb3BlLmFuc3dlcnMgPSByZXNwb25zZS5kYXRhO1xuICAgIH0pXG59XSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdTaW5nbGVRdWVzdFN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG4gIHRoaXMuZmV0Y2hCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9xdWVzdGlvbnMvJyArIGlkKVxuICB9XG5cbiAgdGhpcy5wb3N0QW5zd2VyID0gZnVuY3Rpb24oYW5zd2VyKXtcbiAgXHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9xdWVzdGlvbnMvYW5zd2VyJywgYW5zd2VyKVxuICB9XG5cbiAgdGhpcy5mZXRjaEFuc3dlcnMgPSBmdW5jdGlvbihpZCl7XG4gIFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9xdWVzdGlvbnMvYW5zd2VyLycgKyBpZClcbiAgfVxuXG4gIHRoaXMudXAgPSBmdW5jdGlvbihvYmopIHtcbiAgXHRyZXR1cm4gJGh0dHAucHV0KCcvYXBpL3F1ZXN0aW9ucy91cC8nLCBvYmopXG4gIH1cblxuICB0aGlzLmRvd24gPSBmdW5jdGlvbihvYmopIHtcbiAgXHRyZXR1cm4gJGh0dHAucHV0KCcvYXBpL3F1ZXN0aW9ucy9kb3duLycsIG9iailcbiAgfVxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnVXNlclN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICB2YXIgc3ZjID0gdGhpc1xuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgfSlcbiAgfVxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvc2Vzc2lvbnMnLCB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhXG4gICAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoJ10gPSByZXNwb25zZS5kYXRhXG4gICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKVxuICAgIH0pXG4gIH1cbiAgc3ZjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIH0pXG4gIH1cbiAgc3ZjLmlzTG9nZ2VkSW4gPSBmdW5jdGlvbiAoKXtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgaWYod2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuKXtcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWF1dGgnXSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlblxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==