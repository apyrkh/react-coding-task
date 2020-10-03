import { InputEmail } from '@app/components/base/InputEmail'
import { PersonSelect } from '@app/components/event/PersonSelect'
import { FormField } from '@app/components/form/FormField'
import { useAppContext } from '@app/hooks/useAppContext'
import { useOnChangeHandler } from '@app/hooks/useOnChangeHandler'
import PersonDto from '@app/interfaces/dto/PersonDto'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import classNames from 'classnames'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: Dispatch<SetStateAction<EventCreationFormModel>>
}

const Component: FC<Props> = ({ formData, onChange }) => {
  const { l10n } = useAppContext()
  const getOnChangeHandler = useOnChangeHandler<EventCreationFormModel>(onChange)
  const handleChangePerson = (person: PersonDto | null) => {
    getOnChangeHandler('coordinator')(person ? { id: person.id, email: person.email } : null)
  }

  return (
    <>
      <FormField title={l10n.getText('field.responsible')} required
        error={formData.errors.coordinator}
      >
        <PersonSelect className={classNames('form-input', { 'form-input__has-error': !!formData.errors.coordinator })}
          placeholder={l10n.getText('field.responsible.placeholder')}
          personId={formData.coordinator ? formData.coordinator.id : null}
          onChange={handleChangePerson}
        />
      </FormField>

      <FormField title={l10n.getText('field.email')}>
        <InputEmail className="form-input" readOnly
          value={formData.coordinator ? formData.coordinator.email : ''}
        />
      </FormField>
    </>
  )
}

export const FormFragmentCoordinator = React.memo(Component)
