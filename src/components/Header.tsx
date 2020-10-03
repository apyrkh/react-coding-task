import React, { FC } from 'react'

interface Props {
  title: string
}

const Component: FC<Props> = ({ title }) => {
  return (
    <header className="header">
      <div className="header__top-line" />

      <div className="container">
        <div className="header__main-line">
          {title}
        </div>
      </div>
    </header>
  )
}

export const Header = Component
