import GlobalState from '@app/interfaces/GlobalState'
import { eventCreationFormReducer } from '@app/redux/reducers/eventCreationFormReducer'
import { combineReducers, Reducer } from 'redux'

const reducers: Reducer<GlobalState, any> = combineReducers({
  eventCreationForm: eventCreationFormReducer
})

export default reducers
