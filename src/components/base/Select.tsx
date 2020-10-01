import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react'

export type SelectOption = string | { value: string, label?: string }
export const getSelectOptionValue = (opt: SelectOption): string => typeof opt === 'object' ? opt.value : opt
export const getSelectOptionLabel = (opt: SelectOption): string => typeof opt === 'object' ? (opt.label ?? opt.value) : opt

export interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'multiple' | 'value' | 'onChange'> {
  options: SelectOption[]
  noValue?: string
  value: string
  onChange: (value: string) => void
}

const Component: FC<SelectProps> = React.forwardRef<HTMLSelectElement, SelectProps>(({ options, noValue, onChange, ...props }, ref) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => onChange(e.target.value)

  return (
    <select ref={ref} {...props} onChange={handleChange}>
      {noValue !== undefined &&
      <option value="">{noValue}</option>}

      {options.map((option) => {
        const value = getSelectOptionValue(option)
        const label = getSelectOptionLabel(option)

        return (
          <option key={value} value={value}>{label}</option>
        )
      })}
    </select>
  )
})

export const Select = React.memo(Component)
