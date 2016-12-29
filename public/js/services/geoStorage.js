'use strict';

angular.module('weatherApp')
	.factory('geoStorage', ['$window', function($window) {
		var service = {
			// saves locations
			list: JSON.parse(localStorage.geoPlaces || '[]'),
			// returns list of locations
			get: function() {
				return this.list;
			},
			// saves new locations
			add: function(place) {
				this.list.push(place);
				$window.localStorage.setItem('geoPlaces', JSON.stringify(this.list))
			},
			// removes location
			remove: function(position) {
				this.list.splice(position, 1);
				$window.localStorage.setItem('geoPlaces', JSON.stringify(this.list))
			}
		}

		return service;
	}]);