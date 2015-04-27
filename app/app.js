'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.Tutoria',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider)
    {
            $routeProvider.when('/Tomar', {
                templateUrl: 'Tomar/Tomar.html',
                controller: 'controladorTutoria'
            });
            $routeProvider.when('/Publicar', {
                templateUrl: 'Publicar/Publicar.html',
                controller: 'controladorTutoria'
            });
            $routeProvider.when('/Ofrecer',{
                templateUrl: 'Ofrecer/viewOfrecer.html',
                controller: 'controladorOfrecer'
            });
        }])
    .factory('tutorias', [function(){
        var o = {
            tutorias: []
        };
        return o;
    }])