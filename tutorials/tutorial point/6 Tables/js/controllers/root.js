var app = angular.module("app", []);
app.controller("index", function($scope) {
  $scope.student = {
         firstName: "Haytham",
         lastName: "Alzeini",
		 fees: 500,
		 
		 subjects:[
		 {name:'Physics', marks: 70},
			 {name: 'Chemsitry', marks: 80},
				 {name: 'Math', marks: 65}
				 ],
         
         fullName: function() {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
         }
      };
});