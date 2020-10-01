import { Form } from '@app/components/base/Form'
import { InputText } from '@app/components/base/InputText'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import React, { FC } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
}

const Component: FC<Props> = ({ formData, onChange }) => {
  return (
    <Form>
      <InputText value={formData.title} onChange={(title) => onChange({ title })} />
    </Form>
  )
}

export const EventCreationForm = React.memo(Component)
