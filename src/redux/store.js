import {
	applyMiddleware,
	combineReducers,
	compose,
	createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import SagaManager from './SagaManager';

const reduxDevTools = (window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()) || ((a) => a);

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [
		sagaMiddleware,
	];

	const store = createStore(
		combineReducers({ ...allReducers }),
		compose(applyMiddleware(...middlewares), reduxDevTools),
	);

	let sagaTask = sagaMiddleware.run(SagaManager);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers');
			store.replaceReducer(nextRootReducer);
		});

		// Enable Webpack hot module replacement for sagas
		module.hot.accept(['./SagaManager'], () => {
			const NewSagaManager = require('./SagaManager').default;
			sagaTask.cancel();
			sagaTask.toPromise().then(() => {
				sagaTask = sagaMiddleware.run(NewSagaManager);
			});
		});
	}

	return store;
};

export default configureStore;
