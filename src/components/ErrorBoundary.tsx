import { AppContext } from '@app/context/AppContext'
import React, { PureComponent } from 'react'

const isProduction = process.env.NODE_ENV === 'production'

interface Props {}

interface State {
  error: Error | null
}

export default class ErrorBoundary extends PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      error: null
    }
  }

  static contextType = AppContext

  static getDerivedStateFromError (error: Error) {
    return { error }
  }

  render () {
    const error = this.state.error

    if (error) {
      const { l10n } = this.context
      return (
        <div className="panel panel-danger">
          <div className="panel__head">
            {l10n.getText('label.error')}
          </div>

          <div className="panel__body">
            {l10n.getText('text.something_went_wrong')}

            {!isProduction &&
            <pre>{error.stack}</pre>
            }
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
