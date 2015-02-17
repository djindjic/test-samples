import angular from 'angular';

export let myControllerModule = angular.module('myControllerModule', []);

myControllerModule.controller('myController', [function() {
  this.name = 'test controller';
}]);
