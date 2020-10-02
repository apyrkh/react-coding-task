import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import { EventCreationFormAction, EventCreationFormActionTypes } from '@app/redux/actions/eventCreationFormAction'

const initialState: EventCreationFormModel = {
  title: '',
  description: '',
  category_id: null,
  paid_event: false,
  event_fee: null,
  reward: null,
  coordinator: null,
  starts_on_date: '',
  starts_on_time: '',
  duration: null
}

type ReducerType = (state: EventCreationFormModel | undefined, action: EventCreationFormAction) => EventCreationFormModel

export const eventCreationFormReducer: ReducerType = (state = initialState, action) => {
  switch (action.type) {
    case EventCreationFormActionTypes.CHANGE: {
      return { ...state, ...action.formData }
    }
    default:
      return state
  }
}
