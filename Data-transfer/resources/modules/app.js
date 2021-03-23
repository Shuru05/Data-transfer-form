var app = angular.module('myapp', ['ui.router','ngMaterial','smart-table','ngAnimate','ngMaterialDatePicker','ngSanitize']);

/*var hostUrl="http://139.162.13.215:8063/";*/
var hostUrl="http://localhost:9390/";
app.config(function($stateProvider, $urlRouterProvider,$mdDateLocaleProvider) {

    $urlRouterProvider.otherwise('/login');
 
   $stateProvider
    .state('login',{
        url:'/login',
        templateUrl:'resources/modules/login/Login.html',
        params:{
            'user':null
        }
    }),

    $stateProvider
    .state('display',{
        url:'/display',
        templateUrl:'resources/modules/display/display.html',
        params:{
            'user':null
        }
    })

});

