import { InputRadio, InputRadioProps } from '@app/components/base/InputRadio'
import classNames from 'classnames'
import React, { FC } from 'react'

const Component: FC<InputRadioProps> = ({ children, className, ...props }) => {
  return (
    <label className={classNames('custom-radio', className)}>
      {children}

      <InputRadio {...props} className="custom-radio__input" />
      <b className="custom-radio__checkmark" />
    </label>
  )
}

export const Radio = React.memo(Component)
