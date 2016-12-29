angular.module('weatherApp')
	.factory('weather', ['$q', 'openweathermapFactory', function($q, openweathermapFactory) {
		var service = {
			// stores current location
			current: undefined,
			// gets location
			get: function(coordinates) {
				var deferred = $q.defer();

				var _appid = '398be6279a61c93b2c4fa294fc4f86e8'; // openweathermap api key
				var self = this;

				openweathermapFactory
					.getWeatherFromLocationByCoordinates({
						units: 'metric',
						lat: coordinates.latitude,
						lon: coordinates.longitude,
						appid:_appid
					})
					.then(function(_data) {
						var weatherData = _data.data;
						self.current = {
							city: weatherData.name,
							temp: Math.round(weatherData.main.temp),
							description: weatherData.weather[0].main,
							icon: weatherData.weather[0].icon
						}
						deferred.resolve(self.current);
					});

				return deferred.promise;
			}
		}

		return service;
	}]);