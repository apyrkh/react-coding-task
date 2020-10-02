import { eventCreationFormReducer } from '@app/redux/reducers/eventCreationFormReducer'
import { personSelectReducer } from '@app/redux/reducers/personSelectReducer'
import { RootState } from '@app/redux/StoreInterfaces'
import { combineReducers } from 'redux'

const reducers = combineReducers<RootState, any>({
  eventCreationForm: eventCreationFormReducer,
  personSelect: personSelectReducer
})

export default reducers
