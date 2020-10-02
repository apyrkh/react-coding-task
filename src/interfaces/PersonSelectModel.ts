import PersonDto from '@app/interfaces/PersonDto'

export default interface PersonSelectModel {
  isInitialized: boolean
  isLoading: boolean
  persons: PersonDto[]
}
