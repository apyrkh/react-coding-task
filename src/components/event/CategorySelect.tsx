import { Select, SelectOption, SelectProps } from '@app/components/base/Select'
import { useAppContext } from '@app/hooks/useAppContext'
import classNames from 'classnames'
import React, { FC } from 'react'

interface OwnProps extends Omit<SelectProps, 'options' | 'value' | 'onChange'> {
  placeholder?: string
  categoryId: number | null
  onChange: (value: number | null) => void
}

const Component: FC<OwnProps> = ({
  placeholder, categoryId, onChange, className, ...props
}) => {
  const { l10n } = useAppContext()
  // @TODO where to get categories???
  const categories = [{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }]
  const options: SelectOption[] = categories.map((it) => ({ value: `${it.id}`, label: it.name }))

  const noValue = l10n.getText('field.category.placeholder')
  const handleChange = (value: string) => onChange(value ? +value : null)

  return (
    <Select className={classNames(className, { 'with-placeholder': categoryId === null })}
      options={options}
      noValue={noValue}
      value={categoryId ? `${categoryId}` : noValue}
      onChange={handleChange} {...props}
    />
  )
}

export const CategorySelect = React.memo(Component)
