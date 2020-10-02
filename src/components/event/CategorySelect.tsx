import { Select, SelectOption, SelectProps } from '@app/components/base/Select'
import CategoryDto from '@app/interfaces/dto/CategoryDto'
import { initCategories } from '@app/redux/actions/categorySelectAction'
import RootState from '@app/redux/interfaces/RootState'
import classNames from 'classnames'
import React, { FC, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

interface StateProps {
  isLoading: boolean
  categories: CategoryDto[]
}

interface DispatchProps {
  onInit: () => void
}

interface OwnProps extends Omit<SelectProps, 'options' | 'value' | 'onChange'> {
  placeholder?: string
  categoryId: number | null
  onChange: (value: CategoryDto | null) => void
}

type Props = StateProps & DispatchProps & OwnProps

const Component: FC<Props> = ({
  isLoading, categories, onInit,
  placeholder, categoryId, onChange, className, ...props
}) => {
  const options = useMemo<SelectOption[]>(() => {
    return categories.map((it) => ({ value: `${it.id}`, label: it.name }))
  }, [categories])

  const noValue = placeholder ?? ''
  const handleChange = (id: string) => {
    const category = id === '' ? null : categories.find((it) => it.id === +id)
    onChange(category ?? null)
  }

  useEffect(() => {
    onInit()
  }, [])

  return (
    <div className={classNames({ 'with-loading': isLoading })}>
      <Select className={classNames(className, { 'with-placeholder': categoryId === null })}
        disabled={isLoading}
        options={options}
        noValue={noValue}
        value={categoryId !== null ? `${categoryId}` : noValue}
        onChange={handleChange} {...props}
      />
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.categorySelect.isLoading,
  categories: state.categorySelect.categories
})

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, any>) => ({
  onInit: () => dispatch(initCategories())
})

export const CategorySelect: FC<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(Component)
