import { Api } from '@app/api/Api'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import PersonSelectModel from '@app/interfaces/PersonSelectModel'

export interface ExtraArguments {
  api: Api
}

export interface RootState {
  personSelect: PersonSelectModel,
  eventCreationForm: EventCreationFormModel
}
