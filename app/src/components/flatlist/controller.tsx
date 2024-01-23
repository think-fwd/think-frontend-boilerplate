import _ from 'lodash'
import produce from 'immer'
import { FlatListContext } from './context'
import { PaginationType } from '@type/pagination_type'
import { FlatListControllerProps, FlatListRefType } from './types'
import { useEffect, useImperativeHandle, useMemo, useState } from 'react'

export const FlatListController = ({
  listingRef,
  itemKey,
  limit = 6,
  handlePagination,
  ...props
}: Omit<
  FlatListControllerProps,
  'rowSpacing' | 'renderItem' | 'emptyMessage'
> & {
  listingRef: React.ForwardedRef<FlatListRefType>
}): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [filters, setFilters] = useState<Record<string, string> | undefined>(
    undefined
  )

  const [pagination, setPagination] = useState<
    PaginationType<unknown> | undefined
  >(undefined)

  // expose refresh function
  // to outer function
  useImperativeHandle(listingRef, () => ({
    refresh: (filters?: Record<string, string>) => handleRefresh(filters),
    updateRecord: (key: string, record: unknown) =>
      handleUpdateRecord(key, record),
  }))

  // determine pages based on fetch pagination
  const pages = useMemo(() => {
    return pagination?.pagination?.pages || 0
  }, [pagination])

  // determine display records fetch pagination
  const displayRecords = useMemo(() => {
    return pagination?.results || []
  }, [pagination])

  // determine a function to override
  // an specific record by key
  const handleUpdateRecord = (key: string, record: unknown) => {
    setPagination(
      produce(pagination, (draft) => {
        if (draft) {
          draft.results = (draft?.results || []).map((result) => {
            if (_.get(result, itemKey(record)) === key) return record
            else return result
          })
        }
      })
    )
  }

  // determine a function to
  // refresh search results
  const handleRefresh = (filters?: Record<string, string>) => {
    setIsLoading(true)
    setFilters(filters)
    handlePagination(1, limit, filters)
      .then(setPagination)
      .finally(() => setIsLoading(false))
  }

  // initialize first fetch if enabled
  useEffect(() => {
    setIsLoading(true)
    handlePagination(page, limit, filters)
      .then(setPagination)
      .finally(() => setIsLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filters])

  const state = useMemo(
    () => ({
      page,
      pages,
      setPage,
      isLoading,
      displayRecords,
    }),
    [page, pages, setPage, isLoading, displayRecords]
  )

  return (
    <FlatListContext.Provider value={state}>
      {props.children}
    </FlatListContext.Provider>
  )
}
