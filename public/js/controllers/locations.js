'use strict';

angular.module('weatherApp')
	.controller('LocationsCtrl', ['$scope', '$rootScope', 'geoStorage', 'weather', function ($scope, $rootScope, geoStorage, weather) {

		// for autocomplete locations module
		$scope.address = {
			name: '',
			place: '',
			components: {
				placeId: '',
				streetNumber: '', 
				street: '',
				city: '',
				state: '',
				countryCode: '',
				country: '',
				postCode: '',
				district: '',
				location: {
					lat: '',
					long: ''
				}
			}
		};

		// saves locations
		$scope.addLocation = function() {
			var coordinates = $scope.address.components.location;
			geoStorage.add({
				name: $scope.address.name,
				coordinates: {
					latitude: coordinates.lat,
					longitude: coordinates.long
				}
			});
		}

		// removes location by item position in list
		$scope.removeLocation = function(index) {
			geoStorage.remove(index);
		}

		// saved locatons to scope
		$scope.locations = geoStorage.get();

	}]);