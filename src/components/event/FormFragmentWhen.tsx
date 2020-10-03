import { InputDate } from '@app/components/base/InputDate'
import { InputNumber } from '@app/components/base/InputNumber'
import { InputTime } from '@app/components/base/InputTime'
import { FormField } from '@app/components/form/FormField'
import { useAppContext } from '@app/hooks/useAppContext'
import { useOnChangeHandler } from '@app/hooks/useOnChangeHandler'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: Dispatch<SetStateAction<EventCreationFormModel>>
}

const Component: FC<Props> = ({ formData, onChange }) => {
  const { l10n } = useAppContext()
  const getOnChangeHandler = useOnChangeHandler<EventCreationFormModel>(onChange)

  return (
    <>
      <FormField title={l10n.getText('field.starts_on')} required>
        <div className="form-field_starts-on">
          <InputDate className="form-input starts-on_date"
            value={formData.starts_on_date}
            onChange={getOnChangeHandler('starts_on_date')}
          />

          <div className="starts-on_at">
            {l10n.getText('field.starts_on.at')}
          </div>

          <InputTime className="form-input starts-on_time"
            value={formData.starts_on_time}
            onChange={getOnChangeHandler('starts_on_time')}
          />
        </div>
      </FormField>

      <FormField title={l10n.getText('field.duration')}>
        <div className="form-field_duration">
          <InputNumber className="form-input"
            placeholder={l10n.getText('field.duration.placeholder')}
            min={0} step={0.5}
            value={formData.duration}
            onChange={getOnChangeHandler('duration')}
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
