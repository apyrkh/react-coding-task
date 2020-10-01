import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'

export enum EventCreationFormActionTypes {
  CHANGE = 'EventCreationFormAction.CHANGE'
}

export interface EventCreationFormActionChange {
  type: EventCreationFormActionTypes.CHANGE,
  formData: Partial<EventCreationFormModel>
}

export type EventCreationFormAction = EventCreationFormActionChange

export const changeEventCreationForm = (formData: Partial<EventCreationFormModel>) => {
  return {
    type: EventCreationFormActionTypes.CHANGE,
    formData: formData
  }
}
