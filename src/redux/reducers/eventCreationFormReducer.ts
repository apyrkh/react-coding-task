import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import { EventCreationFormAction, EventCreationFormActionTypes } from '@app/redux/actions/eventCreationFormAction'

const initialState: EventCreationFormModel = {
  title: '',
  description: ''
}

export const eventCreationFormReducer = (state: EventCreationFormModel = initialState, action: EventCreationFormAction): EventCreationFormModel => {
  switch (action.type) {
    case EventCreationFormActionTypes.CHANGE: {
      return { ...state, ...action.formData }
    }
    default:
      return state
  }
}
