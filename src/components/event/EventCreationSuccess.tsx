import { useAppContext } from '@app/hooks/useAppContext'
import React, { FC } from 'react'

interface Props {}

const Component: FC<Props> = () => {
  const { l10n } = useAppContext()

  return (
    <div className="panel panel-success">
      <div className="panel__head">
        {l10n.getText('label.success')}
      </div>

      <div className="panel__body">
        {l10n.getText('text.event_has_been_created')}
      </div>
    </div>
  )
}

export const EventCreationSuccess = React.memo(Component)
