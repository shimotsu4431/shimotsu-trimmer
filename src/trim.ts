export const trim = (value: string) => {
  if (typeof value !== 'string') {
    throw new Error('value is not string.')
  }

  return value.trim()
}
