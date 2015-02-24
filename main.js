import angular from 'angular';
import 'famous-angular';

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('[data-main-app]'), [
		mainModule.name
	], {
		strictDi: true
	});
});

export let mainModule = angular.module('famous-sample', [
	'famous.angular'
]);

mainModule.controller('MainCtrl', ['$scope', '$famous', '$timeout', function($scope, $famous, $timeout){
	var Transitionable = $famous['famous/transitions/Transitionable'];
	var Easing = $famous['famous/transitions/Easing'];
	var t = new Transitionable(0);


	$scope.myTransitionable = new Transitionable([0, 0, 0]);
	//$scope.myTransitionable.set([100, 0, 0], {duration: 1000, curve: 'easeInOut'})

	function reset(){
		t.set(0);
		t.set(Math.PI * 2.0, {duration: 3000, curve: 'linear'}, function(){
			//$timeout(reset);
		});
		$scope.myTransitionable.set([300, 0, 0], {duration: 3000, curve: Easing.outBounce}, function(){
			//$timeout(reset);
		});
	}

	reset();

	$scope.getRotateY = function(){
		return t.get();
	}
	$scope.greetMe = 'world';
}]);
