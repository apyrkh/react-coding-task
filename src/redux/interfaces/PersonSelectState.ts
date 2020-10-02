import PersonDto from '@app/interfaces/PersonDto'

export default interface PersonSelectState {
  isInitialized: boolean
  isLoading: boolean
  persons: PersonDto[]
}
