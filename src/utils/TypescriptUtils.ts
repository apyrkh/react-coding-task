export const isFunction = (value: any): value is Function => {
  return !!(value?.call && value.apply)
}
