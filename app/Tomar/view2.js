'use strict';

angular.module('myApp.Tutoria', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Tomar', {
    templateUrl: 'Tomar/Tomar.html',
    controller: 'controladorTutoria'
  });
      $routeProvider.when('/Publicar', {
        templateUrl: 'Publicar/Publicar.html',
        controller: 'controladorTutoria'
      });
}])

.controller('controladorTutoria', ['$scope',

      function() {

        this.tomarTutoria = function()
        {
          var IDTutoria = $scope.idtutoria;

        }

        this.adicionarTutoria
      }
    ]);