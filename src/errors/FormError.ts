import FieldError from '@app/errors/FieldError'

type FormError<T> = Partial<Record<keyof T, FieldError>>

export default FormError
