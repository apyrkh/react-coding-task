import { Form } from '@app/components/base/Form'
import { InputText } from '@app/components/base/InputText'
import { Textarea } from '@app/components/base/Textarea'
import { FormField } from '@app/components/form/FormField'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import React, { FC } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
  onSubmit?: () => void
}

const Component: FC<Props> = ({ formData, onChange, onSubmit }) => {
  return (
    <Form className="event-creation-form" onSubmit={onSubmit}>
      <div className="panel">
        <div className="panel__head">
          About
        </div>

        <div className="panel__body">
          <FormField title={'Title'} required>
            <InputText className="form-input"
              placeholder="Make it short and clear"
              value={formData.title}
              onChange={(title) => onChange({ title })}
            />
          </FormField>

          <FormField title={'Description'}>
            <Textarea className="form-input"
              placeholder="Write about your event, be creative"
              rows={5}
              maxLength={140}
              value={formData.description}
              onChange={(description) => onChange({ description })}
            />
            <div className="form-textarea-helper">
              <span>
                Max length is 140 characters
              </span>

              <span>
                {formData.description.length}/140
              </span>
            </div>
          </FormField>
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          Coordinator
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          When
        </div>
      </div>

      <div className="event-creation-form__controls">
        <button type="submit" className="btn btn-orange">
          Publish event
        </button>
      </div>
    </Form>
  )
}

export const EventCreationForm = React.memo(Component)
