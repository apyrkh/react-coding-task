import FormError from '@app/errors/FormError'
import FormValidationError from '@app/errors/FormValidationError'
import CoordinatorModel from '@app/interfaces/CoordinatorModel'
import EventCreationFormDto from '@app/interfaces/dto/EventCreationFormDto'

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

  errors: FormError<EventCreationFormModel>
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
  duration: null,

  errors: {}
}

export const toEventCreationFormDto = (model: EventCreationFormModel): EventCreationFormDto => {
  const formErrors: FormError<EventCreationFormModel> = {}

  if (!model.title) {
    formErrors.title = { code: 'required' }
  }
  if (!model.description) {
    formErrors.description = { code: 'required' }
  }
  if (model.paid_event && !model.event_fee) {
    formErrors.event_fee = { code: 'required' }
  }
  if (!model.coordinator) {
    formErrors.coordinator = { code: 'required' }
  }
  if (!model.starts_on_date) {
    formErrors.starts_on_date = { code: 'required' }
  }
  if (!model.starts_on_time) {
    formErrors.starts_on_time = { code: 'required' }
  }

  if (Object.keys(formErrors).length > 0) {
    throw new FormValidationError<EventCreationFormModel>(formErrors)
  }

  return {
    title: model.title,
    description: model.description,
    category_id: model.category_id,
    paid_event: model.paid_event,
    event_fee: model.event_fee,
    reward: model.reward,
    date: `${model.starts_on_date}T${model.starts_on_time}`,
    duration: model.duration ? model.duration * 60 * 60 : null,
    coordinator: {
      id: `${model.coordinator!.id}`,
      email: model.coordinator!.email
    }
  }
}
