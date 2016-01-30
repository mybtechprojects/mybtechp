"use strict";
mybtechp.controller("projectController", ["$scope", "$location", function ($scope, $location) {
    debugger;
    $scope.sampleProjects = " Sample Projects";
    $scope.fullProjects = " Full Projects";
    $scope.message = "Current Projects";
    $scope.getSampleAllProject = function (pid) {
        debugger;
        if (pid == 1)
            $scope.lname = "Java";
        else if (pid == 2)
            $scope.lname = "C#";
        else
            $scope.lname = "Angularjs";
        $scope.message = $scope.lname + $scope.sampleProjects;
    };
    $scope.getFullProject = function (pid) {
        debugger;
        if (pid == 1)
            $scope.lname = "Java";
        else if (pid == 2)
            $scope.lname = "C#";
        else
            $scope.lname = "Angularjs";
        $scope.message = $scope.lname + $scope.fullProjects;
    };
    $scope.getProjectDetail = function () {
        debugger;
        $location.path("/projectdetail");
    };
}]);