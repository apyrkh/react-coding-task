import EventCreationForm from '@app/interfaces/EventCreationForm'
import GlobalState from '@app/interfaces/GlobalState'
import { combineReducers, Reducer } from 'redux'

const reducers: Reducer<GlobalState> = combineReducers({
  eventCreationForm: () => ({} as EventCreationForm)
})

export default reducers
