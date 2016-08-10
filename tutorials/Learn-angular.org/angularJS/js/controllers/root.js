var app = angular.module("app", ["services"]);
app.controller("index", ["$scope", /*"message1",*/ "square", /*"multiplier",*/ function($scope, /*message1,*/ square /*multiplier*/) {   //before injecting "services" module, this line was like this: "app.controller("index", function($scope) {" ==> remove the ] at the end of the file also
  $scope.message  = "Hello, AngularJS!";	
  /*$scope.message1 = message1; */ //message1 is defined in services.js module
  $scope.product  = square;    //factory receipt commented out
  //$scope.product = multiplier.multiply(2);  
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
		
		$scope.records = [
        "Alfreds Futterkiste",
        "Berglunds snabbköp",
        "Centro comercial Moctezuma",
        "Ernst Handel",
    ];
		
		//Repearters starts here
		$scope.products = [
			{id: 1, name: "Hockey puck"},
			{id: 2, name: "Golf club"},
			{id: 3, name: "Baseball bat"},
			{id: 4, name: "Lacrosse stick"}
		];
		
		//Visibility
		$scope.isFirstElementVisible = true;
		$scope.isSecondElementVisible = true;
		
		//The value Recipe
		
		
}]);