import { useAppContext } from '@app/hooks/useAppContext'
import React, { FC } from 'react'

const Component: FC = () => {
  const { l10n } = useAppContext()

  return (
    <div className="header">
      <div className="header__top-line" />

      <div className="container">
        <div className="header__main-line">
          {l10n.getText('header.new_event')}
        </div>
      </div>
    </div>
  )
}

export const EventCreationHeader = Component
