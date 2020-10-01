import React, { ChangeEvent, InputHTMLAttributes } from 'react'

type OmittedAttributes = 'type' | 'checked' | 'value' | 'onChange';

export interface InputRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedAttributes> {
  checked: boolean
  value?: string
  onChange: (value?: string) => void
}

const Component = React.forwardRef<HTMLInputElement, InputRadioProps>(({ onChange, ...props }, ref) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value)

  return (
    <input ref={ref} {...props} onChange={handleChange} type="radio" />
  )
})

export const InputRadio = React.memo(Component)
