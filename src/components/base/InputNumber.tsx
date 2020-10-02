import React, { ChangeEvent, InputHTMLAttributes } from 'react'

type OmittedAttributes = 'type' | 'checked' | 'value' | 'onChange'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedAttributes> {
  value?: number | null
  onChange?: (value: number | null) => void
}

const Component = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, ...props }, ref) => {
  const handleChange = onChange ? (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value ? +e.target.value : null) : undefined

  return (
    <input ref={ref} {...props} value={value ?? ''} onChange={handleChange} type="number" />
  )
})

export const InputNumber = React.memo(Component)
