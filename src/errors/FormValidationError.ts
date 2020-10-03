import FormError from '@app/errors/FormError'

export default class FormValidationError<T> extends Error {
  public get name () {
    return 'FormValidationError'
  }

  public errors: FormError<T> = {}

  constructor (errors: FormError<T>) {
    super()
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    this.errors = errors
  }
}
