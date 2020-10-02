import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import CategorySelectState from '@app/redux/interfaces/CategorySelectState'
import PersonSelectState from '@app/redux/interfaces/PersonSelectState'

export default interface RootState {
  eventCreationForm: EventCreationFormModel
  categorySelect: CategorySelectState,
  personSelect: PersonSelectState,
}
