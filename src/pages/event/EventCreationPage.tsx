import { EventCreationFormContainer } from '@app/components/event/EventCreationFormContainer'
import { useAppContext } from '@app/hooks/useAppContext'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import { Header } from '@app/components/Header'
import React, { FC } from 'react'

interface Props {
  formData: EventCreationFormModel
  onChange: (formData: Partial<EventCreationFormModel>) => void
}

const Component: FC = () => {
  const { l10n } = useAppContext()

  return (
    <div className="page event-creation-page">
      <Header title={l10n.getText('header.new_event')} />

      <main className="main">
        <div className="container">
          <EventCreationFormContainer />
        </div>
      </main>
    </div>
  )
}

export const EventCreationPage = Component
