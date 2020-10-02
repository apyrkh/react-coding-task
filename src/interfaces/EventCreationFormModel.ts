import CoordinatorModel from '@app/interfaces/CoordinatorModel'

export const DESCRIPTION_MAX_LENGTH = 140

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
