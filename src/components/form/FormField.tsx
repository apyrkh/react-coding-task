import FieldError from '@app/errors/FieldError'
import { useAppContext } from '@app/hooks/useAppContext'
import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

interface Props {
  required?: boolean
  title?: string
  error?: FieldError
  children: ReactNode
}

const Component: FC<Props> = ({ required, title, error, children }) => {
  const { l10n } = useAppContext()

  return (
    <div className="form-field">
      <div className="form-field__label">
        <span className={classNames('form-label', { 'form-label__required': required })}>
          {title}
        </span>
      </div>

      <div className="form-field__input">
        {children}
      </div>

      {error &&
      <div className="form-field__error">
        <span className="form-error">
          {l10n.getText(`error.code.${error.code}`, error.args)}
        </span>
      </div>}
    </div>
  )
}

export const FormField = React.memo(Component)
