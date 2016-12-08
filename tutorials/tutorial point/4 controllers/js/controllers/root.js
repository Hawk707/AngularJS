var app = angular.module("app", []);
app.controller("index", function($scope) {
  $scope.student = {
         firstName: "Haytham",
         lastName: "Alzeini",
         
         fullName: function() {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
         }
      };
});