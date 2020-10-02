import { CategorySelectAction, CategorySelectActionTypes } from '@app/redux/actions/categorySelectAction'
import CategorySelectState from '@app/redux/interfaces/CategorySelectState'

const initialState: CategorySelectState = {
  isInitialized: false,
  isLoading: false,
  categories: []
}

type ReducerType = (state: CategorySelectState | undefined, action: CategorySelectAction) => CategorySelectState

export const categorySelectReducer: ReducerType = (state = initialState, action) => {
  switch (action.type) {
    case CategorySelectActionTypes.LOADING: {
      return { ...state, isLoading: action.isLoading }
    }
    case CategorySelectActionTypes.INIT: {
      return { isInitialized: true, isLoading: false, categories: action.categories }
    }
    default:
      return state
  }
}
