import { PersonSelectAction, PersonSelectActionTypes } from '@app/redux/actions/personSelectAction'
import PersonSelectState from '@app/redux/interfaces/PersonSelectState'

const initialState: PersonSelectState = {
  isInitialized: false,
  isLoading: false,
  persons: []
}

type ReducerType = (state: PersonSelectState | undefined, action: PersonSelectAction) => PersonSelectState

export const personSelectReducer: ReducerType = (state = initialState, action) => {
  switch (action.type) {
    case PersonSelectActionTypes.LOADING: {
      return { ...state, isLoading: action.isLoading }
    }
    case PersonSelectActionTypes.INIT: {
      return { isInitialized: true, isLoading: false, persons: action.persons }
    }
    default:
      return state
  }
}
