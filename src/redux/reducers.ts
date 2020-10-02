import RootState from '@app/redux/interfaces/RootState'
import { categorySelectReducer } from '@app/redux/reducers/categorySelectReducer'
import { eventCreationFormReducer } from '@app/redux/reducers/eventCreationFormReducer'
import { personSelectReducer } from '@app/redux/reducers/personSelectReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers<RootState, any>({
  eventCreationForm: eventCreationFormReducer,
  categorySelect: categorySelectReducer,
  personSelect: personSelectReducer
})

export default reducers
