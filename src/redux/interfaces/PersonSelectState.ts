import PersonDto from '@app/interfaces/dto/PersonDto'

export default interface PersonSelectState {
  isInitialized: boolean
  isLoading: boolean
  persons: PersonDto[]
}
