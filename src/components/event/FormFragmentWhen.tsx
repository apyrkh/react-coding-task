import { InputDate } from '@app/components/base/InputDate'
import { InputNumber } from '@app/components/base/InputNumber'
import { InputTime } from '@app/components/base/InputTime'
import { FormField } from '@app/components/form/FormField'
import { useAppContext } from '@app/hooks/useAppContext'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import React, { FC } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
}

const Component: FC<Props> = ({ formData, onChange }) => {
  const { l10n } = useAppContext()

  return (
    <>
      <FormField title={l10n.getText('field.starts_on')} required>
        <div className="form-field_starts-on">
          <InputDate className="form-input starts-on_date"
            value={formData.starts_on_date}
            onChange={(starts_on_date) => onChange({ ...formData, starts_on_date })}
          />

          <div className="starts-on_at">
            {l10n.getText('field.starts_on.at')}
          </div>

          <InputTime className="form-input starts-on_time"
            value={formData.starts_on_time}
            onChange={(starts_on_time) => onChange({ ...formData, starts_on_time })}
          />
        </div>
      </FormField>

      <FormField title={l10n.getText('field.duration')}>
        <div className="form-field_duration">
          <InputNumber className="form-input"
            placeholder={l10n.getText('field.duration.placeholder')}
            min={0} step={0.5}
            value={formData.duration}
            onChange={(duration) => onChange({ duration })}
          />

          <div className="reward-comment">
            {l10n.getText('field.duration.helper')}
          </div>
        </div>
      </FormField>
    </>
  )
}

export const FormFragmentWhen = React.memo(Component)
