'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')

  .controller('HomeController', function ($scope, $http, SessionStorageService, $location, RestaurantService){

    $scope.dishes = [
      {
        "heading": "Best pizza of 2016",
        "location": "New York",
        "numRestaurants": 43
      },
      {
        "heading": "Best cevapi",
        "location": "Sarajevo",
        "numRestaurants": 28
      },
      {
        "heading": "Fresh and Spicy",
        "location": "Philladelphia",
        "numRestaurants": 16
      },
      {
        "heading": "Best baklava",
        "location": "New York",
        "numRestaurants": 43
      },
      {
        "heading": "Best burek",
        "location": "Sarajevo",
        "numRestaurants": 28
      },
      {
        "heading": "Fresh and Spicy 2",
        "location": "Philladelphia",
        "numRestaurants": 16
      }
    ];

    $scope.numberRepeat=Math.ceil($scope.dishes.length/3);

    $scope.range = function (count) {

      var ratings = [];

      for (var i = 0; i < count; i++) {
        ratings.push(i);
      }

      return ratings;
    };

    $scope.save= function(rest){
      SessionStorageService.save("restaurantId", JSON.stringify({id:rest.id}));
      $location.path('/restaurant');
    };

    RestaurantService.getRandomRestaurants().then(function (response) {
      $scope.restaurants = response.data;
    });

  })

  .controller('PopularLocationsController', function ($scope, RestaurantService, SessionStorageService, $location) {
    RestaurantService.getRestaurantLocations().then(function (response) {
      $scope.popularLocations = response.data;
    });

    $scope.filterLocations= function (name) {
      SessionStorageService.save("locationSearch", JSON.stringify(name));
      $location.path('/restaurants');
    };

  })

  .directive('resize', function ($window) {
    return function (scope) {
      var w = angular.element($window);
      scope.getWindowDimensions = function () {
        return {
          'w': w.width()
        };
      };
      scope.$watch(scope.getWindowDimensions, function (newValue) {
        scope.windowWidth = newValue.w;

        scope.style = function () {
          return {
            'width': (newValue.w - 100) + 'px'
          };
        };

      }, true);

      w.bind('resize', function () {
        scope.$apply();
      });
    };
  })
;


