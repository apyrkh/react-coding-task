import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

interface Props {
  required?: boolean
  title?: string
  children: ReactNode
}

const Component: FC<Props> = ({ required, title, children }) => {
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
    </div>
  )
}

export const FormField = React.memo(Component)
