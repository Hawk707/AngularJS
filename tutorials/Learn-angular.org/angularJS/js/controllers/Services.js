angular.module("services", [])
	.value("factor", 6)
	.factory("square", ["factor", function (factor) {
			return factor * factor;
	}]);
	//.service("multiplier", ["factor", Multiplier]);