import { lightFormat, parseISO, parse } from 'date-fns'

export function formatInitials(value: string): string {
  function isFirstLetterUppercase(str: string) {
    const codigo = str.charCodeAt(0)
    return codigo >= 65 && codigo < 97
  }
  return [
    value?.split(' ')?.[0]?.[0],
    value?.split(' ').find((v, i) => i > 0 && isFirstLetterUppercase(v))?.[0],
  ].join('')
}

export function parseAndFormatDate(
  dateString: string,
  options?: {
    fromPattern?: string
    toPattern?: string
    default?: string
  }
) {
  try {
    return lightFormat(
      parse(dateString, options?.fromPattern || 'yyyy-MM-dd', new Date()),
      options?.toPattern || 'dd/MM/yyyy'
    )
  } catch (error) {
    return options?.default !== undefined ? options.default : '--'
  }
}

export function formatDate(
  dateString: string,
  options?: {
    default?: string
    pattern?: string
  }
) {
  try {
    return lightFormat(parseISO(dateString), options?.pattern || 'dd/MM/yyyy')
  } catch (error) {
    return options?.default !== undefined ? options.default : '--'
  }
}

export function formatDateTime(dateString?: string) {
  if (!dateString) return '--'
  try {
    return lightFormat(parseISO(dateString), "dd/MM/yyyy 'às' HH:mm")
  } catch (error) {
    return '--'
  }
}

export function formatCurrency(value: number): string {
  try {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  } catch (error) {
    return '--'
  }
}

export function formatPercent(value: number): string {
  try {
    return [
      value >= 0 ? '+' : '-',
      new Intl.NumberFormat('pt-BR', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value / 100),
    ].join(' ')
  } catch (error) {
    return '--'
  }
}

export function formatCNPJ(cnpj: string): string {
  cnpj = cnpj.replace(/\D/g, '')
  cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
  return cnpj
}

export function formatVariation(value: number | null | undefined): string {
  return value !== null ? `${formatPercent(value || 0)}` : 'sem base histórica'
}
