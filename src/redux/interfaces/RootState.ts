import CategorySelectState from '@app/redux/interfaces/CategorySelectState'
import PersonSelectState from '@app/redux/interfaces/PersonSelectState'

export default interface RootState {
  categorySelect: CategorySelectState,
  personSelect: PersonSelectState,
}
