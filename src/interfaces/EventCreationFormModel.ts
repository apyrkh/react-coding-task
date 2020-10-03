import CoordinatorModel from '@app/interfaces/CoordinatorModel'

export default interface EventCreationFormModel {
  title: string
  description: string
  category_id: number | null
  paid_event: boolean
  event_fee: number | null
  reward: number | null
  coordinator: CoordinatorModel | null
  starts_on_date: string
  starts_on_time: string
  duration: number | null // in seconds
}

export const DESCRIPTION_MAX_LENGTH = 140

export const INITIAL_EVENT_CREATION_STATE: EventCreationFormModel = {
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
