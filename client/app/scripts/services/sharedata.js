'use strict';

/**
 * @ngdoc service
 * @name clientApp.share
 * @description
 * # share
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('ShareDataService', function () {
    var data;
    this.addData = function (dataSend) {
      data = dataSend;
    };
    this.getData = function () {
      return data;
    };
  });