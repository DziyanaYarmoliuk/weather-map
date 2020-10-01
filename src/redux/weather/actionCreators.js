import TYPES from './actionTypes';

/**
 * Get weather for cities
 *
 * @param {Array.<number>} citiesIds
 * @param {number} interval
 *
 * @return {{payload: {citiesIds: Array.<number>}, type: string}}
 */
const getWeather = (citiesIds, interval) => ({
	type:    TYPES.VIEW,
	payload: { citiesIds, interval },
});

/**
 * Weather successful data result
 *
 * @param {Object} data
 *
 * @return {{payload: {data: Object}, type: string}}
 */
const getWeatherSuccess = (data = {}) => ({
	type: TYPES.VIEW_SUCCESS,
	payload: { data }
})

/**
 * Weather error result
 *
 * @param {string} message
 *
 * @return {{payload: {message: string}, type: string}}
 */
const getWeatherError = message => ({
	type: TYPES.VIEW_ERROR,
	payload: { message }
})

export {
	getWeather,
	getWeatherSuccess,
	getWeatherError,
}
