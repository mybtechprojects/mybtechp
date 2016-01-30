"use strict";
mybtechp.controller("userNoteController", ["$scope", "loginService", "userNoteService", "$location", function ($scope, loginService, userNoteService,$location) {
    debugger;
    
    $scope.message= "Sale Your Note";
    $scope.saleNote = {};
    $scope.saleNote.fname = "";
    $scope.saleNote.fpath = "";
    $scope.setFile = function (element) {
        $scope.$apply(function ($scope) {
            $scope.theFile = element.files[0];
            $scope.fpath = element.value;
            $scope.saleNote.fpath = $scope.fpath;
            $scope.saleNote.fname = $scope.theFile.name;
        });
    };

    $scope.$watch('saleNote.stype', function () {
        debugger;
        if ($scope.saleNote.stype.length < 0)
        {
            alert("Please Select one Subject Type");
        }
        else if ($scope.saleNote.stype.length > 3)
        {
            alert("You can not select more than 3 subject type");
            $scope.saleNote.stype.pop();
        }
    });
    $scope.submit = function () {
        debugger;
        loginService.fillAuthData();
        if (!loginService.authentication.isAuth) {
            event.preventDefault();
            $location.path('/login');
        } else
            userNoteService.updateData($scope.saleNote)
        console.log($scope.saleNote);
    };
}]);