import angular from 'angular';
import {myControllerModule} from 'myController.module';

let myApp = angular.module('myApp', [
  myControllerModule.name
]);
