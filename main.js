import angular from 'angular';

let myApp = angular.module('myApp', []);

myApp.controller('myController', [function() {
  this.name = 'test controller';
}]);
