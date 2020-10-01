export const DESCRIPTION_MAX_LENGTH = 140

interface Coordinator {
  id: string
  email: string
}

export default interface EventCreationFormModel {
  title: string
  description: string
  category_id: number | null
  paid_event: boolean
  event_fee: number
  reward: number | null
  date: string | null // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number | null // in seconds
  coordinator: Coordinator | null
}
