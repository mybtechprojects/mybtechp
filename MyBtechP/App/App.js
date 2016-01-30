var mybtechp = angular.module("MyBtechP", ["ngRoute", "LocalStorageModule", "cgBusy", "angular-loading-bar"]);
debugger;
mybtechp.config(function ($routeProvider) {
    debugger;
    $routeProvider.when('/syn', {
        controller: "userNoteController",
        templateUrl: "../App/Views/syn.html"
    });
    $routeProvider.when('/login', {
        controller: "loginController",
        templateUrl: "../App/Views/login.html"
    });
    $routeProvider.when('/projects', {
        controller: "projectController",
        templateUrl: "../App/Views/projects.html"
    });

    $routeProvider.when('/projectdetail', {
        controller: "projectdetailController",
        templateUrl: "../App/Views/projectdetail.html"
    });
    $routeProvider.otherwise({ redirectTo: '/projects' });
});