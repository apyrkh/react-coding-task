import CategoryDto from '@app/interfaces/CategoryDto'

export default interface CategorySelectState {
  isInitialized: boolean
  isLoading: boolean
  categories: CategoryDto[]
}
