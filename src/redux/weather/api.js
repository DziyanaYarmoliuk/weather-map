import { API_APP_ID } from '../../constants';

const FETCH_URL = 'https://openweathermap.org/data/2.5/weather';

/**
 * Get weather by city identity
 *
 * @param {number} cityId
 *
 * @return {Promise<Object>}
 */
const getCityWeather = cityId => fetch(`${FETCH_URL}?id=${cityId}&units=metric&appid=${API_APP_ID}`)
	.then(r => r.json());

export {
	getCityWeather,
};
