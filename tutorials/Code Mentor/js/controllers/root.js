var app = angular.module("app", []);
app.controller("index", function($scope) {
$scope.name = "HAYTHAM ALZEINI";	
});

app.directive("helloWorld", function(){
	return {
		restrict: "E",
		template: "<button ng-click='greet();'>Greet</button<br/><div>{{greeting}}</div>",
		scope:{
			name:"@"
		},
		link: function(scope){
			scope.greeting = "";
			scope.greet = function(){
				scope.greeting = "Hello, Haytham Alzeini!";
			}
		}
	};
});