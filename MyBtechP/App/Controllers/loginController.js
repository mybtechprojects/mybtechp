"use strict";
mybtechp.controller("loginController", ["$scope", "loginService", function ($scope, loginService) {
    debugger;
    $scope.message = "login Controller";
    $scope.loginData = {
        email: "",
        password:""
    };
    $scope.submit = function () {
        debugger;
        loginService.login($scope.loginData).then(function (resdata) {
            debugger;
        });
    };
}]);