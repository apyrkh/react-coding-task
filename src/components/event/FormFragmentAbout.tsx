import { Radio } from '@app/components/base/custom/Radio'
import { InputNumber } from '@app/components/base/InputNumber'
import { InputText } from '@app/components/base/InputText'
import { Textarea } from '@app/components/base/Textarea'
import { CategorySelect } from '@app/components/event/CategorySelect'
import { FormField } from '@app/components/form/FormField'
import { useAppContext } from '@app/hooks/useAppContext'
import { useOnChangeHandler } from '@app/hooks/useOnChangeHandler'
import EventCreationFormModel, { DESCRIPTION_MAX_LENGTH } from '@app/interfaces/EventCreationFormModel'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: Dispatch<SetStateAction<EventCreationFormModel>>
}

const Component: FC<Props> = ({ formData, onChange }) => {
  const { l10n } = useAppContext()
  const getOnChangeHandler = useOnChangeHandler<EventCreationFormModel>(onChange)
  const handleFreeEvent = () => onChange((prev) => ({ ...prev, paid_event: false }))
  const handlePaidEvent = () => onChange((prev) => ({ ...prev, paid_event: true, event_fee: null }))

  return (
    <>
      <FormField title={l10n.getText('field.title')} required
        error={formData.errors.title}
      >
        <InputText className="form-input"
          placeholder={l10n.getText('field.title.placeholder')}
          value={formData.title}
          onChange={getOnChangeHandler('title')}
        />
      </FormField>

      <FormField title={l10n.getText('field.description')} required
        error={formData.errors.description}
      >
        <Textarea className="form-input"
          placeholder={l10n.getText('field.description.placeholder')}
          rows={5}
          maxLength={DESCRIPTION_MAX_LENGTH}
          value={formData.description}
          onChange={getOnChangeHandler('description')}
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
          onChange={(category) => onChange((prev) => ({ ...prev, category_id: category ? category.id : null }))}
        />
      </FormField>

      <FormField>
        <div className="form-radio-holder">
          <Radio checked={!formData.paid_event} onChange={handleFreeEvent}>
            {l10n.getText('field.paid_event.FREE_EVENT')}
          </Radio>

          <Radio checked={formData.paid_event} onChange={handlePaidEvent}>
            {l10n.getText('field.paid_event.PAID_EVENT')}
          </Radio>
        </div>
      </FormField>

      {formData.paid_event &&
      <FormField title={l10n.getText('field.event_fee')} required
        error={formData.errors.event_fee}
      >
        <InputNumber className="form-input w-50"
          placeholder={l10n.getText('field.event_fee.placeholder')}
          value={formData.event_fee}
          onChange={getOnChangeHandler('event_fee')}
        />
      </FormField>
      }

      <FormField title={l10n.getText('field.reward')}>
        <div className="form-field_reward">
          <InputNumber className="form-input"
            placeholder={l10n.getText('field.reward.placeholder')}
            min={0} step={1}
            value={formData.reward}
            onChange={getOnChangeHandler('reward')}
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
