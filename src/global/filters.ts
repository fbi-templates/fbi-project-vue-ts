export const percentage = (value, unit = 2) => {
  if (!isNaN(value)) {
    return value.toFixed(unit)
  } else {
    return value
  }
}
