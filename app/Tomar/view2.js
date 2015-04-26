'use strict';

angular.module('myApp.Tomar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Tomar', {
    templateUrl: 'Tomar/Tomar.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);