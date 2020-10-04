import ErrorBoundary from '@app/components/ErrorBoundary'
import { EventCreationForm } from '@app/components/event/EventCreationForm'
import { EventCreationSuccess } from '@app/components/event/EventCreationSuccess'
import { Header } from '@app/components/Header'
import FormValidationError from '@app/errors/FormValidationError'
import { useAppContext } from '@app/hooks/useAppContext'
import { INITIAL_EVENT_CREATION_STATE, toEventCreationFormDto } from '@app/interfaces/EventCreationFormModel'
import React, { FC, useState } from 'react'

type Stage = 'CREATION' | 'SUCCESS'

const Component: FC = () => {
  const { l10n } = useAppContext()

  const [stage, setStage] = useState<Stage>('CREATION')
  const [formData, setFormData] = useState(INITIAL_EVENT_CREATION_STATE)
  const handleSubmit = async (): Promise<void> => {
    try {
      const dto = toEventCreationFormDto(formData)
      console.log(dto)
      setStage('SUCCESS')
    } catch (e) {
      if (e instanceof FormValidationError) {
        setFormData((prev) => ({ ...prev, errors: e.errors }))
      }
      console.error(e)
    }
  }

  return (
    <div className="page event-creation-page">
      <Header title={l10n.getText('header.new_event')} />

      <main className="main">
        <div className="container">
          {stage === 'CREATION' &&
          <ErrorBoundary>
            <EventCreationForm formData={formData} onChange={setFormData} onSubmit={handleSubmit} />
          </ErrorBoundary>}

          {stage === 'SUCCESS' &&
          <EventCreationSuccess />}
        </div>
      </main>
    </div>
  )
}

export const EventCreationPage = Component
