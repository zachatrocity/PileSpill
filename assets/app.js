angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","$location",function(t,e){t.$on("login",function(n,o){t.currentUser=o,e.path("/")})}]),angular.module("app").controller("AskCtrl",["$scope","QuestSvc",function(t,e){t.addQuestion=function(){t.postBody&&e.create({username:"dickeyxxx",body:t.postBody}).success(function(e){t.questions.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.questions=e})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(n,o){t.errorMsg="",e.login(n,o).then(function(e){t.$emit("login",e)},function(){t.errorMsg="Incorrect username/password."})}}]),angular.module("app").controller("QuestCtrl",["$scope","QuestSvc","$location",function(t,e,n){t.addQuestion=function(){t.postBody&&e.create({username:"dickeyxxx",title:t.title,body:t.postBody}).success(function(e){t.questions.unshift(e),t.postBody=null,n.path("/")})},e.fetch().success(function(e){t.questions=e})}]),angular.module("app").service("QuestSvc",["$http",function(t){this.fetch=function(){return t.get("/api/quests")},this.create=function(e){return t.post("/api/quests",e)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(t,e){t.register=function(n,o){e.register(n,o).then(function(e){t.$emit("login",e)})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"QuestCtrl",templateUrl:"/templates/questions.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"}).when("/ask",{controller:"QuestCtrl",templateUrl:"/templates/ask.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users").then(function(t){return t.data})},e.login=function(n,o){return t.post("/api/sessions",{username:n,password:o}).then(function(n){return e.token=n.data.token,t.defaults.headers.common["X-Auth"]=n.data,e.getUser()})},e.register=function(n,o){return t.post("/api/users",{username:n,password:o}).then(function(){return e.login(n,o)})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJhc2suY3RybC5qcyIsImxvZ2luLmN0cmwuanMiLCJxdWVzdC5jdHJsLmpzIiwicXVlc3Quc3ZjLmpzIiwicmVnaXN0ZXIuY3RybC5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsInBhdGgiLCJRdWVzdFN2YyIsImFkZFF1ZXN0aW9uIiwicG9zdEJvZHkiLCJjcmVhdGUiLCJ1c2VybmFtZSIsImJvZHkiLCJzdWNjZXNzIiwicXVlc3Rpb24iLCJxdWVzdGlvbnMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJVc2VyU3ZjIiwibG9naW4iLCJwYXNzd29yZCIsImVycm9yTXNnIiwidGhlbiIsIiRlbWl0IiwidGl0bGUiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwicXVlc3QiLCJwb3N0IiwicmVnaXN0ZXIiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInN2YyIsImdldFVzZXIiLCJyZXNwb25zZSIsImRhdGEiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsT0FDRSxZQ0RGRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsbUJBQStCLFNBQUEsWUFBQSxTQUFBQyxFQUFBQyxHQUM3QkQsRUFBQUUsSUFBQSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0VKLEVBQUFLLFlBQUFELEVBQ0FILEVBQUFLLEtBQUEsVUNKSlQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLFdBQXVCLFNBQUEsV0FBQSxTQUFBQyxFQUFBTyxHQUNyQlAsRUFBQVEsWUFBQSxXQUNFUixFQUFBUyxVQUNFRixFQUFBRyxRQUNFQyxTQUFBLFlBQ0FDLEtBQUFaLEVBQUFTLFdBRUZJLFFBQUEsU0FBQUMsR0FDRWQsRUFBQWUsVUFBQUMsUUFBQUYsR0FDQWQsRUFBQVMsU0FBQSxRQUtORixFQUFBVSxRQUNBSixRQUFBLFNBQUFFLEdBQ0VmLEVBQUFlLFVBQUFBLE9DakJKbEIsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQXlCLFNBQUEsVUFBQSxTQUFBQyxFQUFBa0IsR0FDdkJsQixFQUFBbUIsTUFBQSxTQUFBUixFQUFBUyxHQUNDcEIsRUFBQXFCLFNBQUEsR0FDQ0gsRUFBQUMsTUFBQVIsRUFBQVMsR0FDQUUsS0FBQSxTQUFBbEIsR0FDRUosRUFBQXVCLE1BQUEsUUFBQW5CLElBQ0YsV0FDQ0osRUFBQXFCLFNBQUEscUNDUkx4QixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBeUIsU0FBQSxXQUFBLFlBQUEsU0FBQUMsRUFBQU8sRUFBQU4sR0FDdkJELEVBQUFRLFlBQUEsV0FDRVIsRUFBQVMsVUFDRUYsRUFBQUcsUUFDRUMsU0FBQSxZQUNBYSxNQUFBeEIsRUFBQXdCLE1BQ0FaLEtBQUFaLEVBQUFTLFdBRUZJLFFBQUEsU0FBQUMsR0FDRWQsRUFBQWUsVUFBQUMsUUFBQUYsR0FDQWQsRUFBQVMsU0FBQSxLQUNBUixFQUFBSyxLQUFBLFFBS05DLEVBQUFVLFFBQ0FKLFFBQUEsU0FBQUUsR0FDRWYsRUFBQWUsVUFBQUEsT0NuQkpsQixRQUFBQyxPQUFBLE9BQ0EyQixRQUFBLFlBQXFCLFFBQUEsU0FBQUMsR0FDbkJDLEtBQUFWLE1BQUEsV0FDRSxNQUFBUyxHQUFBRSxJQUFBLGdCQUVGRCxLQUFBakIsT0FBQSxTQUFBbUIsR0FDRSxNQUFBSCxHQUFBSSxLQUFBLGNBQUFELE9DTkpoQyxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsZ0JBQTRCLFNBQUEsVUFBQSxTQUFBQyxFQUFBa0IsR0FDMUJsQixFQUFBK0IsU0FBQSxTQUFBcEIsRUFBQVMsR0FDRUYsRUFBQWEsU0FBQXBCLEVBQUFTLEdBQ0FFLEtBQUEsU0FBQWxCLEdBQ0VKLEVBQUF1QixNQUFBLFFBQUFuQixTQ0xOUCxRQUFBQyxPQUFBLE9BQ0FrQyxRQUFRLGlCQUFBLFNBQUFDLEdBQ05BLEVBQ0FDLEtBQUEsS0FBQW5DLFdBQUEsWUFBMkNvQyxZQUFBLDhCQUMzQ0QsS0FBQSxhQUFBbkMsV0FBQSxlQUE4Q29DLFlBQUEsNkJBQzlDRCxLQUFBLFVBQUFuQyxXQUFBLFlBQTJDb0MsWUFBQSwwQkFDM0NELEtBQUEsUUFBQW5DLFdBQUEsWUFBeUNvQyxZQUFBLDJCQ04zQ3RDLFFBQUFDLE9BQUEsT0FDQTJCLFFBQUEsV0FBb0IsUUFBQSxTQUFBQyxHQUNsQixHQUFBVSxHQUFBVCxJQUNBUyxHQUFBQyxRQUFBLFdBQ0UsTUFBQVgsR0FBQUUsSUFBQSxjQUNBTixLQUFBLFNBQUFnQixHQUNFLE1BQUFBLEdBQUFDLFFBR0pILEVBQUFqQixNQUFBLFNBQUFSLEVBQUFTLEdBQ0UsTUFBQU0sR0FBQUksS0FBQSxpQkFDRW5CLFNBQUFBLEVBQUFTLFNBQUFBLElBQ0ZFLEtBQUEsU0FBQWdCLEdBR0UsTUFGQUYsR0FBQUksTUFBQUYsRUFBQUMsS0FBQUMsTUFDQWQsRUFBQWUsU0FBQUMsUUFBQUMsT0FBQSxVQUFBTCxFQUFBQyxLQUNBSCxFQUFBQyxhQUdKRCxFQUFBTCxTQUFBLFNBQUFwQixFQUFBUyxHQUNFLE1BQUFNLEdBQUFJLEtBQUEsY0FDRW5CLFNBQUFBLEVBQUFTLFNBQUFBLElBQ0ZFLEtBQUEsV0FDRSxNQUFBYyxHQUFBakIsTUFBQVIsRUFBQVMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgJ25nUm91dGUnXG5dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICRzY29wZS4kb24oJ2xvZ2luJywgZnVuY3Rpb24gKF8sIHVzZXIpIHtcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKVxuICB9KVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0Fza0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBRdWVzdFN2Yykge1xuICAkc2NvcGUuYWRkUXVlc3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xuICAgICAgUXVlc3RTdmMuY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWU6ICdkaWNrZXl4eHgnLFxuICAgICAgICBib2R5OiAgICAgJHNjb3BlLnBvc3RCb2R5XG4gICAgICB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgICAgICRzY29wZS5xdWVzdGlvbnMudW5zaGlmdChxdWVzdGlvbilcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBRdWVzdFN2Yy5mZXRjaCgpXG4gIC5zdWNjZXNzKGZ1bmN0aW9uIChxdWVzdGlvbnMpIHtcbiAgICAkc2NvcGUucXVlc3Rpb25zID0gcXVlc3Rpb25zXG4gIH0pXG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICBcdCRzY29wZS5lcnJvck1zZyA9ICcnO1xuICAgIFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcbiAgICB9LCBmdW5jdGlvbihlcnJvcil7XG4gICAgXHQkc2NvcGUuZXJyb3JNc2cgPSBcIkluY29ycmVjdCB1c2VybmFtZS9wYXNzd29yZC5cIjtcbiAgICB9KVxuICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUXVlc3RDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgUXVlc3RTdmMsICRsb2NhdGlvbikge1xuICAkc2NvcGUuYWRkUXVlc3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xuICAgICAgUXVlc3RTdmMuY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWU6ICdkaWNrZXl4eHgnLFxuICAgICAgICB0aXRsZTogICAgJHNjb3BlLnRpdGxlLFxuICAgICAgICBib2R5OiAgICAgJHNjb3BlLnBvc3RCb2R5XG4gICAgICB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgICAgICRzY29wZS5xdWVzdGlvbnMudW5zaGlmdChxdWVzdGlvbilcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIFF1ZXN0U3ZjLmZldGNoKClcbiAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHF1ZXN0aW9ucykge1xuICAgICRzY29wZS5xdWVzdGlvbnMgPSBxdWVzdGlvbnNcbiAgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdRdWVzdFN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICB0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcXVlc3RzJylcbiAgfVxuICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChxdWVzdCkge1xuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3F1ZXN0cycsIHF1ZXN0KVxuICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgVXNlclN2Yykge1xuICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgVXNlclN2Yy5yZWdpc3Rlcih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCB1c2VyKVxuICAgIH0pXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICRyb3V0ZVByb3ZpZGVyXG4gIC53aGVuKCcvJywgICAgICAgICB7IGNvbnRyb2xsZXI6ICdRdWVzdEN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcXVlc3Rpb25zLmh0bWwnIH0pXG4gIC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcmVnaXN0ZXIuaHRtbCcgfSlcbiAgLndoZW4oJy9sb2dpbicsICAgIHsgY29udHJvbGxlcjogJ0xvZ2luQ3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9sb2dpbi5odG1sJyB9KVxuICAud2hlbignL2FzaycsICAgIHsgY29udHJvbGxlcjogJ1F1ZXN0Q3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9hc2suaHRtbCcgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gIHZhciBzdmMgPSB0aGlzXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHN2Yy50b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW5cbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpXG4gICAgfSlcbiAgfVxuICBzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMnLCB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgfSlcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==