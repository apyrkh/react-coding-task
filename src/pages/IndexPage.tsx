import { Header } from '@app/components/Header'
import { useAppContext } from '@app/hooks/useAppContext'
import React from 'react'
import { Link } from 'react-router-dom'

const Component = () => {
  const { l10n } = useAppContext()

  return (
    <div className="page event-creation-page">
      <Header />

      <main className="main">
        <div className="container">
          <Link to="/event/create">
            {l10n.getText('btn.create_event')}
          </Link>
        </div>
      </main>
    </div>
  )
}

export const IndexPage = React.memo(Component)
