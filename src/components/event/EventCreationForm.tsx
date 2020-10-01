import { Form } from '@app/components/base/Form'
import { InputText } from '@app/components/base/InputText'
import { Textarea } from '@app/components/base/Textarea'
import { CategorySelect } from '@app/components/event/CategorySelect'
import { FormField } from '@app/components/form/FormField'
import { useAppContext } from '@app/hooks/useAppContext'
import EventCreationFormModel, { DESCRIPTION_MAX_LENGTH } from '@app/interfaces/EventCreationFormModel'
import React, { FC } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
  onSubmit?: () => void
}

const Component: FC<Props> = ({ formData, onChange, onSubmit }) => {
  const { l10n } = useAppContext()

  return (
    <Form className="event-creation-form" onSubmit={onSubmit}>
      <div className="panel">
        <div className="panel__head">
          {l10n.getText('label.about')}
        </div>

        <div className="panel__body">
          <FormField title={l10n.getText('field.title')} required>
            <InputText className="form-input"
              placeholder={l10n.getText('field.title.placeholder')}
              value={formData.title}
              onChange={(title) => onChange({ title })}
            />
          </FormField>

          <FormField title={l10n.getText('field.description')} required>
            <Textarea className="form-input"
              placeholder={l10n.getText('field.description.placeholder')}
              rows={5}
              maxLength={DESCRIPTION_MAX_LENGTH}
              value={formData.description}
              onChange={(description) => onChange({ description })}
            />
            <div className="form-textarea-helper">
              <span>
                {l10n.getText('field.description.max_length', [DESCRIPTION_MAX_LENGTH])}
              </span>

              <span>
                {formData.description.length}/{DESCRIPTION_MAX_LENGTH}
              </span>
            </div>
          </FormField>

          <FormField title={l10n.getText('field.category')}>
            <CategorySelect className="form-input"
              value={formData.category_id}
              onChange={(category_id) => onChange({ category_id })}
            />
          </FormField>
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          {l10n.getText('label.coordinator')}
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          {l10n.getText('label.when')}
        </div>
      </div>

      <div className="event-creation-form__controls">
        <button type="submit" className="btn btn-orange">
          {l10n.getText('btn.publish_event')}
        </button>
      </div>
    </Form>
  )
}

export const EventCreationForm = React.memo(Component)
