import React, { ChangeEvent, TextareaHTMLAttributes } from 'react'

type OmittedAttributes = 'type' | 'value' | 'onChange';

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, OmittedAttributes> {
  value?: string;
  onChange?: (value: string) => void;
}

const Component = React.forwardRef<HTMLTextAreaElement, Props>(({ onChange, ...props }, ref) => {
  const handleChange = onChange ? (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value) : undefined

  return (
    <textarea ref={ref} {...props} onChange={handleChange} />
  )
})
export const Textarea = React.memo(Component)
