import RootState from '@app/redux/interfaces/RootState'
import { categorySelectReducer } from '@app/redux/reducers/categorySelectReducer'
import { personSelectReducer } from '@app/redux/reducers/personSelectReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers<RootState, any>({
  categorySelect: categorySelectReducer,
  personSelect: personSelectReducer
})

export default reducers
