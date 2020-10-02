import { Radio } from '@app/components/base/custom/Radio'
import { InputNumber } from '@app/components/base/InputNumber'
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
}

const Component: FC<Props> = ({ formData, onChange }) => {
  const { l10n } = useAppContext()

  return (
    <>
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
          placeholder={l10n.getText('field.category.placeholder')}
          categoryId={formData.category_id}
          onChange={(category) => onChange({ category_id: category ? category.id : null })}
        />
      </FormField>

      <FormField>
        <div className="form-radio-holder">
          <Radio checked={!formData.paid_event} onChange={() => onChange({ paid_event: false })}>
            {l10n.getText('field.paid_event.FREE_EVENT')}
          </Radio>

          <Radio checked={formData.paid_event} onChange={() => onChange({ paid_event: true, event_fee: null })}>
            {l10n.getText('field.paid_event.PAID_EVENT')}
          </Radio>
        </div>
      </FormField>

      {formData.paid_event &&
      <FormField title={l10n.getText('field.event_fee')} required>
        <InputNumber className="form-input w-50"
          placeholder={l10n.getText('field.event_fee.placeholder')}
          value={formData.event_fee}
          onChange={(event_fee) => onChange({ event_fee })}
        />
      </FormField>
      }

      <FormField title={l10n.getText('field.reward')}>
        <div className="form-field-reward">
          <InputNumber className="form-input"
            placeholder={l10n.getText('field.reward.placeholder')}
            value={formData.reward}
            onChange={(reward) => onChange({ reward })}
          />

          <div className="reward-comment">
            {l10n.getText('field.reward.helper')}
          </div>
        </div>
      </FormField>
    </>
  )
}

export const FormFragmentAbout = React.memo(Component)
