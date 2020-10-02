import CategoryDto from '@app/interfaces/CategoryDto'
import ExtraArguments from '@app/redux/interfaces/ExtraArguments'
import RootState from '@app/redux/interfaces/RootState'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export enum CategorySelectActionTypes {
  LOADING = 'CategorySelectAction.LOADING',
  INIT = 'CategorySelectAction.INIT'
}

export interface CategorySelectActionLoading extends Action {
  type: CategorySelectActionTypes.LOADING
  isLoading: boolean
}

export interface CategorySelectActionInit extends Action {
  type: CategorySelectActionTypes.INIT
  categories: CategoryDto[]
}

export type CategorySelectAction = CategorySelectActionLoading | CategorySelectActionInit

function setLoading (isLoading: boolean): ThunkAction<void, RootState, any, CategorySelectAction> {
  return (dispatch, getState) => {
    if (getState().categorySelect.isLoading !== isLoading) {
      dispatch({
        type: CategorySelectActionTypes.LOADING,
        isLoading: isLoading
      })
    }
  }
}

export function initCategories (): ThunkAction<void, RootState, ExtraArguments, CategorySelectAction> {
  return async (dispatch, getState, { api }) => {
    dispatch(setLoading(true))

    try {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000)
      // })

      const categories = await api
        .get<CategoryDto[]>('http://www.mocky.io/v2/5bcdd3942f00002c00c855ba')
        .then(({ data }) => data)

      dispatch({
        type: CategorySelectActionTypes.INIT,
        categories: categories
      })
    } catch (e) {
      // @TODO add some cool error handler
      console.error(e)

      dispatch(setLoading(false))
    }
  }
}
