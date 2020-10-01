import {
	all,
	call,
	delay,
	put,
	takeLatest,
} from 'redux-saga/effects';
import {
	getWeatherError,
	getWeatherSuccess,
} from './actionCreators';
import TYPES from './actionTypes';
import { getCityWeather } from './api';

/**
 * Get weather by cities
 *
 * @param {Object} payload
 *
 * @return {Generator}
 */
function* view({ payload }) {
	const { citiesIds, interval } = payload || {};

	// Return empty result
	if (!citiesIds || !citiesIds.length) {
		return yield put(getWeatherSuccess());
	}

	try {
		const requests = citiesIds.map(cityId => call(getCityWeather, cityId));
		const result   = yield all(requests);

		yield put(getWeatherSuccess(result));

		// Auto update
		if (interval > 0) {
			yield delay(interval);
			yield call(view, { payload });
		}
	} catch (e) {
		yield put(getWeatherError(e.message));
	}
}

export default [
	takeLatest(TYPES.VIEW, view),
];
