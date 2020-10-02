import { Select, SelectOption, SelectProps } from '@app/components/base/Select'
import PersonDto from '@app/interfaces/PersonDto'
import { initPersons } from '@app/redux/actions/personSelectAction'
import { RootState } from '@app/redux/StoreInterfaces'
import classNames from 'classnames'
import React, { FC, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

interface StateProps {
  isLoading: boolean
  persons: PersonDto[]
}

interface DispatchProps {
  onInit: () => void
}

interface OwnProps extends Omit<SelectProps, 'options' | 'value' | 'onChange'> {
  placeholder?: string
  personId: number | null
  onChange: (value: PersonDto | null) => void
}

type Props = StateProps & DispatchProps & OwnProps

const Component: FC<Props> = ({
  isLoading, persons, onInit,
  placeholder, personId, onChange, className, ...props
}) => {
  const options = useMemo<SelectOption[]>(() => {
    return persons.map<SelectOption>((it) => ({ value: `${it.id}`, label: `${it.name} ${it.lastname}` }))
  }, [persons])

  const noValue = placeholder ?? ''
  const handleChange = (id: string) => {
    const person = id === '' ? null : persons.find((it) => it.id === +id)
    onChange(person ?? null)
  }

  useEffect(() => {
    onInit()
  }, [])

  return (
    <div className={classNames({ 'with-loading': isLoading })}>
      <Select className={classNames(className, { 'with-placeholder': personId === null })}
        disabled={isLoading}
        options={options}
        noValue={noValue}
        value={personId !== null ? `${personId}` : noValue}
        onChange={handleChange} {...props}
      />
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.personSelect.isLoading,
  persons: state.personSelect.persons
})

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, any>) => ({
  onInit: () => dispatch(initPersons())
})

export const PersonSelect: FC<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(Component)
