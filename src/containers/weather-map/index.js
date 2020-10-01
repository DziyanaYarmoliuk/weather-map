import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Map from '../../components/Map';

/**
 * Render weather map
 *
 * @param {Array.<number>} citiesIds
 * @param {Object} weather
 * @param {function} getWeather
 *
 * @return {*}
 * @constructor
 */
const WeatherMap = ({ citiesIds, weather, getWeather }) => {
	useEffect(() => {
		getWeather(citiesIds, 5000);
	}, []);

	return (
		<Map
			markersData={weather && weather.result}
			googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `400px` }} />}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	);
};

WeatherMap.propTypes = {
	citiesIds:  PropTypes.arrayOf(PropTypes.number),
	weather:    PropTypes.object,
	getWeather: PropTypes.func,
};

WeatherMap.defaultProps = {
	citiesIds:  [],
	weather:    {},
	getWeather: () => null,
};

export default WeatherMap;
