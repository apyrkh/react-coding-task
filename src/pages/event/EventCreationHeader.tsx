import React, { FC } from 'react'

const Component: FC = () => {
  return (
    <div className="header">
      <div className="header__top-line" />

      <div className="container">
        <div className="header__main-line">
          New event
        </div>
      </div>
    </div>
  )
}

export const EventCreationHeader = Component
