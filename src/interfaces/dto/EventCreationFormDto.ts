export default interface EventCreationFormDto {
  title: string
  description: string
  category_id: number | null
  paid_event: boolean
  event_fee: number | null
  reward: number | null
  date: string // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number | null // in seconds
  coordinator: {
    id: string
    email: string
  }
}
