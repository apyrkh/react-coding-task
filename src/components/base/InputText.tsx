import React, { ChangeEvent, InputHTMLAttributes } from 'react'

type OmittedAttributes = 'type' | 'checked' | 'value' | 'onChange'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedAttributes> {
  value: string
  onChange: (value: string) => void
}

const Component = React.forwardRef<HTMLInputElement, Props>(({ onChange, ...props }, ref) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value)

  return (
    <input ref={ref} {...props} onChange={handleChange} type="text" />
  )
})

export const InputText = React.memo(Component)
