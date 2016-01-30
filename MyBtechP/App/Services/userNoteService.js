"use strict";
mybtechp.factory("userNoteService", ['$http', '$q', function ($http, $q) {
    debugger;

    var baseService = "";
    var userNoteFactory = {};
    var _updateData = function (saleNoteData) {
        debugger;
        var deffer = $q.defer();
        $http.post(baseService + "" + saleNoteData).success(function (data, status) {
            deffer.resolve(data);
        }).error(function (err, status) {
            deffer.reject(err);
        });
        return deffer.promise;
    };
    userNoteFactory.updateData = _updateData;
    return userNoteFactory;
}]);