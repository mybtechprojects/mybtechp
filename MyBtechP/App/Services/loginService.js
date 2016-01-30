"use strict";
mybtechp.factory("loginService", ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {
    debugger;
    var baseService = "";
    var loginServiceFactory = {};
    var errData = "Please Fill the form";


    var _authentication = {
        isAuth: false,
        email: ""
    };

    var _login = function (loginData) {
        var deffer = $q.defer();
        $http.post(baseService + "username:" + loginData.email+ "" + "password:" + loginData.password + "").success(function (data, status) {
            localStorageService.set('authorizationData', { email: loginData.email});
            _authentication.isAuth = true;
            deffer.resolve(data);
            
        }).error(function (err, status) {
            _logOut();
            deffer.reject(err);
        });
        return deffer.promise;
    };

    var _logOut = function () {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.email= "";
        //_authentication.uid = 0;
        //_authentication.roles = [];
        //_authentication.ldate = "";

    };
    var _fillAuthData = function () {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.email= authData.email;
            _authentication.isAuth = true;
        }
    }


    //loginServiceFactory.updateData = _updateData;
    loginServiceFactory.login = _login;
    loginServiceFactory.fillAuthData = _fillAuthData;
    loginServiceFactory.logout = _logOut;
    loginServiceFactory.authentication = _authentication;

    return loginServiceFactory;

}]);