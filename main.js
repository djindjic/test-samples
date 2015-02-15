import angular from 'angular';

let myModule = angular.module('myModule', []);

myModule.controller('myController', [function() {
  this.name = 'test controller';
}]);
