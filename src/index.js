import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ConfigureStore from './redux/store'

const store = ConfigureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'),
);
