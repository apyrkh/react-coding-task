import PersonSelectModel from '@app/interfaces/PersonSelectModel'
import { PersonSelectAction, PersonSelectActionTypes } from '@app/redux/actions/personSelectAction'

const initialState: PersonSelectModel = {
  isInitialized: false,
  isLoading: false,
  persons: []
}

type ReducerType = (state: PersonSelectModel | undefined, action: PersonSelectAction) => PersonSelectModel

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
