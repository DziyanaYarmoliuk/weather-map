import { all } from 'redux-saga/effects'
import WeatherSagas from './weather/sagas'

function* SagaManager()
{
	yield all([
		...WeatherSagas,
	])
}

export default SagaManager
