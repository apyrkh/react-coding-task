import { EventCreationFormContainer } from '@app/components/event/EventCreationFormContainer'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
}

const Component: FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />

      <EventCreationFormContainer />
    </div>
  )
}

export const EventCreationPage = Component
