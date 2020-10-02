import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import { EventCreationFormAction, EventCreationFormActionTypes } from '@app/redux/actions/eventCreationFormAction'

const initialState: EventCreationFormModel = {
  title: '',
  description: '',
  category_id: null,
  paid_event: false,
  event_fee: null,
  reward: null,
  date: null,
  duration: null,
  coordinator: null
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
