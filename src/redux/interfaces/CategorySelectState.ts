import CategoryDto from '@app/interfaces/dto/CategoryDto'

export default interface CategorySelectState {
  isInitialized: boolean
  isLoading: boolean
  categories: CategoryDto[]
}
