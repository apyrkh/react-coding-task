import { InputEmail } from '@app/components/base/InputEmail'
import { PersonSelect } from '@app/components/event/PersonSelect'
import { FormField } from '@app/components/form/FormField'
import { useAppContext } from '@app/hooks/useAppContext'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import PersonDto from '@app/interfaces/PersonDto'
import React, { FC } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
}

const Component: FC<Props> = ({ formData, onChange }) => {
  const { l10n } = useAppContext()
  const handleChangePerson = (person: PersonDto | null) => {
    onChange({
      ...formData,
      coordinator: person ? { id: `${person.id}`, email: person.email } : null
    })
  }

  return (
    <>
      <FormField title={l10n.getText('field.responsible')} required>
        <PersonSelect className="form-input"
          placeholder={l10n.getText('field.responsible.placeholder')}
          personId={formData.coordinator ? +formData.coordinator.id : null}
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
