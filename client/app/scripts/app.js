'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/login',{
        templateUrl:   'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })

      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })

      .when('/restaurant',{
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl',
        controllerAs: 'restaurant'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('');

  }) .run(function ($rootScope, $http, $location, $localStorage) {
    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function () {
      var publicPages = ['/login', '/', '', '/register', '/restaurant'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !$localStorage.currentUser  ) {
        $location.path('/login');
      }
    });
  }

)

  ;



