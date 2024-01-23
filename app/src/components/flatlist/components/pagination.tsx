import { useContextSelector } from 'use-context-selector'
import { FlatListContext } from '../context'
import { Pagination, Stack } from '@mui/material'

export const FlatListPagination = (): JSX.Element | null => {
  const page = useContextSelector(FlatListContext, (s) => s.page)
  const pages = useContextSelector(FlatListContext, (s) => s.pages)
  const setPage = useContextSelector(FlatListContext, (s) => s.setPage)

  if (page > 1) {
    return (
      <Stack direction="row" justifyContent="flex-end" px={3}>
        <Pagination
          count={pages}
          size="small"
          page={page}
          onChange={(_, page) => setPage(page)}
        />
      </Stack>
    )
  }

  return null
}
