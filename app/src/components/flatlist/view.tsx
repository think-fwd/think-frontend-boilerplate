import { Stack } from '@mui/material'
import { FlatListItems } from './components/items'
import { FlatListPagination } from './components/pagination'
import { FlatListProps } from './types'

export const FlatListView = ({
  renderItem,
  renderHeader,
  rowSpacing = 10,
  tableStyle = {},
  emptyMessage = 'Vazio...',
}: Pick<
  FlatListProps,
  'rowSpacing' | 'renderItem' | 'renderHeader' | 'emptyMessage' | 'tableStyle'
>): JSX.Element => {
  return (
    <Stack direction="column" sx={{ py: 0, pl: 0, pr: 0 }} spacing={3}>
      <Stack direction="column" spacing={2}>
        <FlatListItems
          tableStyle={tableStyle}
          rowSpacing={rowSpacing}
          renderItem={renderItem}
          renderHeader={renderHeader}
          emptyMessage={emptyMessage}
        />
      </Stack>
      <FlatListPagination />
    </Stack>
  )
}
