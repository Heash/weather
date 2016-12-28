'use strict';

angular.module('weatherApp')
	.controller('WeatherCtrl', ['$scope', '$rootScope', 'openweathermapFactory', function ($scope, $rootScope, openweathermapFactory) {

		var _appid = '398be6279a61c93b2c4fa294fc4f86e8'; // openweathermap api key

		$scope.weather = {
			local: false,
			cities: []
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				openweathermapFactory.getWeatherFromLocationByCoordinates({
					'units': 'metric',
					lat: position.coords.latitude,
					lon: position.coords.longitude,
					appid:_appid
				}).then(function(_data) {
					var weatherData = _data.data;
					$scope.weather.local = {
						city: weatherData.name,
						temp: weatherData.main.temp,
						description: weatherData.weather[0].main,
						icon: weatherData.weather[0].icon
					}
				});
			});
		}



	}]);