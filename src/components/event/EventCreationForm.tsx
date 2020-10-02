import { Form } from '@app/components/base/Form'
import { EventCreationFormFragmentAbout } from '@app/components/event/EventCreationFormFragmentAbout'
import { useAppContext } from '@app/hooks/useAppContext'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
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
          <EventCreationFormFragmentAbout formData={formData} onChange={onChange} />
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
