import { EventCreationFormContainer } from '@app/components/event/EventCreationFormContainer'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import { EventCreationHeader } from '@app/pages/event/EventCreationHeader'
import React, { FC } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
}

const Component: FC = () => {
  return (
    <div className="event-creation-page">
      <EventCreationHeader />

      <div className="container">
        <EventCreationFormContainer />
      </div>
    </div>
  )
}

export const EventCreationPage = Component
