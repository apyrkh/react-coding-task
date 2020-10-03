import { EventCreationForm } from '@app/components/event/EventCreationForm'
import { Header } from '@app/components/Header'
import { useAppContext } from '@app/hooks/useAppContext'
import { INITIAL_EVENT_CREATION_STATE } from '@app/interfaces/EventCreationFormModel'
import React, { FC, useState } from 'react'

const Component: FC = () => {
  const { l10n } = useAppContext()

  const [formData, setFormData] = useState(INITIAL_EVENT_CREATION_STATE)
  const handleSubmit = async (): Promise<void> => {
    console.log(formData)
  }

  return (
    <div className="page event-creation-page">
      <Header title={l10n.getText('header.new_event')} />

      <main className="main">
        <div className="container">
          <EventCreationForm formData={formData} onChange={setFormData} onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  )
}

export const EventCreationPage = Component
