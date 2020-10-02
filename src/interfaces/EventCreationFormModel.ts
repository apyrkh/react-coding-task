import Coordinator from '@app/interfaces/Coordinator'

export const DESCRIPTION_MAX_LENGTH = 140

export default interface EventCreationFormModel {
  title: string
  description: string
  category_id: number | null
  paid_event: boolean
  event_fee: number | null
  reward: number | null
  date: string | null // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number | null // in seconds
  coordinator: Coordinator | null
}
