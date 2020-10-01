import { getWeather } from '../../redux/weather/actionCreators';

const mapStateToProps = state => ({
	weather: state.weather,
});

const mapDispatchToProps = {
	getWeather,
};

export {
	mapStateToProps,
	mapDispatchToProps,
};
