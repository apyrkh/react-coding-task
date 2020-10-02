import PersonDto from '@app/interfaces/dto/PersonDto'
import ExtraArguments from '@app/redux/interfaces/ExtraArguments'
import RootState from '@app/redux/interfaces/RootState'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export enum PersonSelectActionTypes {
  LOADING = 'PersonSelectAction.LOADING',
  INIT = 'PersonSelectAction.INIT'
}

export interface PersonSelectActionLoading extends Action {
  type: PersonSelectActionTypes.LOADING
  isLoading: boolean
}

export interface PersonSelectActionInit extends Action {
  type: PersonSelectActionTypes.INIT
  persons: PersonDto[]
}

export type PersonSelectAction = PersonSelectActionLoading | PersonSelectActionInit

function setLoading (isLoading: boolean): ThunkAction<void, RootState, any, PersonSelectAction> {
  return (dispatch, getState) => {
    if (getState().personSelect.isLoading !== isLoading) {
      dispatch({
        type: PersonSelectActionTypes.LOADING,
        isLoading: isLoading
      })
    }
  }
}

export function initPersons (): ThunkAction<void, RootState, ExtraArguments, PersonSelectAction> {
  return async (dispatch, getState, { api }) => {
    dispatch(setLoading(true))

    try {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000)
      // })

      const persons = await api
        .get<PersonDto[]>('http://www.mocky.io/v2/5bcdd7992f00006300c855d5')
        .then(({ data }) => data)

      dispatch({
        type: PersonSelectActionTypes.INIT,
        persons: persons
      })
    } catch (e) {
      // @TODO add some cool error handler
      console.error(e)

      dispatch(setLoading(false))
    }
  }
}
