import { isFunction } from '@app/utils/TypescriptUtils'
import { Dispatch, SetStateAction, useCallback } from 'react'

export const useOnChangeHandler = <T extends object> (onChange: Dispatch<SetStateAction<T>>) => {
  return useCallback(<K extends keyof T> (key: K) => {
    return (action: SetStateAction<T[K]>) => {
      onChange((prevData) => ({
        ...prevData,
        [key]: isFunction(action) ? action(prevData[key]) : action,

        // @ts-expect-error
        ...(prevData.errors?.[key] ? { errors: { ...prevData.errors, [key]: undefined } } : {})
      }))
    }
  }, [onChange])
}
