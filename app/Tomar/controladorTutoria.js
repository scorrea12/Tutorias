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

    .controller('controladorTutoria', ['$scope','tutorias',

        function() {

            this.tomarTutoria = function()
            {
                var IDTutoria = $scope.idtutoria;
                var tutorias = $scope.tutorias;
                var encontro = null;
                for(var i = 0 ; i<tutorias.length && encontro ===null;i++)
                {
                    if(tutorias[i].id===IDTutoria)
                    {
                        $scope.tutoriaActual = tutorias[i];
                        encontro = tutorias[i];
                    }
                }
                if(encontro===null)
                {
                    alert("No se pudo tomar esa tutoria");
                }
            }

            this.adicionarTutoria = function (tutoria)
            {
                $scope.tutorias.push(tutoria);
            }
        }
    ]);