'use strict';

angular.module('weatherApp')
	.controller('WeatherCtrl', ['$scope', '$rootScope', 'weather', function ($scope, $rootScope, weather) {

		// gets and shows weather by coordinates
		$scope.getWeather = function(coordinates) {
			weather
				.get(coordinates)
				.then(function(weatherData) {
					$scope.weather = weatherData;
				});
		}

		// getting default weatherblock
		var getLocalWeather = function() {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					$scope.getWeather(position.coords)
				});
			}
		}

		getLocalWeather();

	}]);