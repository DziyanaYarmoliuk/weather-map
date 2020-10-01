import React from 'react';
import { CITIES_IDS } from './constants';
import WeatherMap from './containers/weather-map/index.store';

/**
 * Application
 *
 * @return {*}
 * @constructor
 */
const AppContainer = () => (
	<WeatherMap
		citiesIds={CITIES_IDS}
	/>
);

export default AppContainer;
