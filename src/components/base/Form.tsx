import React, { FC, FormEvent, FormHTMLAttributes } from 'react'

type OmittedAttributes = 'onReset' | 'onSubmit';

interface Props extends Omit<FormHTMLAttributes<HTMLFormElement>, OmittedAttributes> {
  onReset?: () => void
  onSubmit?: () => void
}

const Component: FC<Props> = ({ onSubmit, onReset, children, ...props }) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit()
    }
  }

  const handleReset = (e: FormEvent): void => {
    e.preventDefault()
    if (onReset) {
      onReset()
    }
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} noValidate {...props}>
      {children}
    </form>
  )
}

export const Form = React.memo(Component)
