var app = angular.module("app", []);
app.controller("index", function($scope) {
  $scope.message = "Hello, AngularJS!";	
        
		//Two-way binding start
		$scope.favoriteWord;
        $scope.favoriteColor;
        $scope.favoriteShape;
		//Two-way binding end
		
		//Binding CSS class starts here
		$scope.value = 1;
		$scope.isBold = function () { return $scope.value % 2 === 0; };
        $scope.isItalic = function () { return $scope.value % 3 === 0; };
        $scope.isUnderlined = function () { return $scope.value % 5 === 0; };
		//Binding CSS class ends here
});