import TYPES from './actionTypes';

const initState = {
	fetching: false,
	error:    null,
	result:   null,
};

/**
 * Weather reducer
 *
 * @param {initState} state
 * @param {string} type
 * @param {Object} payload
 *
 * @return {initState}
 */
export default (state = initState, { type, payload }) => {
	switch (type) {
		case TYPES.VIEW:
			return { ...state, fetching: true };

		case TYPES.VIEW_SUCCESS:
			return { ...initState, result: payload.data };

		case TYPES.VIEW_ERROR:
			return { ...initState, error: payload.message };

		default:
			return { ...state };
	}
}
