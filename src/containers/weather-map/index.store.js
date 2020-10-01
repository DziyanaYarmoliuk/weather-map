import { connect } from 'react-redux';
import WeatherMap from './index';
import {
	mapDispatchToProps,
	mapStateToProps,
} from './index.props';

const WeatherMapStore = connect(
	mapStateToProps,
	mapDispatchToProps,
)(WeatherMap);

export default WeatherMapStore;
