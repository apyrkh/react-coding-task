import { Select, SelectOption, SelectProps } from '@app/components/base/Select'
import { useAppContext } from '@app/hooks/useAppContext'
import classNames from 'classnames'
import React, { FC } from 'react'

interface Props extends Omit<SelectProps, 'options' | 'value' | 'onChange'> {
  value: number | null
  onChange: (value: number | null) => void
}

const Component: FC<Props> = ({ value, onChange, className, ...props }) => {
  const { l10n } = useAppContext()
  // @TODO where to get categories???
  const categories = [{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }]
  const options: SelectOption[] = categories.map((it) => ({ label: it.name, value: `${it.id}` }))

  const noValue = l10n.getText('field.category.placeholder')
  const handleChange = (value: string) => onChange(value ? +value : null)

  return (
    <Select className={classNames(className, { 'with-placeholder': value === null })}
      options={options}
      noValue={noValue}
      value={value ? `${value}` : noValue} onChange={handleChange} {...props}
    />
  )
}

export const CategorySelect = React.memo(Component)
