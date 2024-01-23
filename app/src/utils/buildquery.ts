export const buildquery = (params?: Record<string, string>) => {
  const filter = []
  if (params && Object.keys(params).length > 0) {
    for (const filterKey in params) {
      if (params[filterKey] !== undefined && params[filterKey].length > 0) {
        filter.push(`${filterKey}=${params[filterKey]}`)
      }
    }
  }
  return filter.join('&')
}
