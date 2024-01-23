import { PaginationType } from '@type/pagination_type'

export type FlatListProps = {
  limit?: number
  rowSpacing?: number
  tableStyle?: React.CSSProperties | undefined
  emptyMessage: string
  itemKey: (item: any) => string
  renderItem: (item: any, prevItem: any) => JSX.Element | JSX.Element[]
  renderHeader?: () => JSX.Element
  handlePagination: (
    page: number,
    limit: number,
    filters: Record<string, string> | undefined
  ) => Promise<PaginationType<unknown>>
}

export type FlatListContextProps = {
  page: number
  pages: number
  isLoading: boolean
  displayRecords: unknown[]
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export type FlatListControllerProps = FlatListProps & {
  children: JSX.Element
}

export type FlatListRefType = {
  refresh: (filters?: Record<string, string>) => void
  updateRecord: (key: string, record: unknown) => void
}
