import { PageLoading } from '@components/page-loading'
import { Box, Stack, Typography } from '@mui/material'
import EmptyIcon from '../../../assets/images/nodata.svg'
import { useContextSelector } from 'use-context-selector'
import { FlatListContext } from '../context'
type Props = {
  loading?: boolean
  emptyMessage?: string
  displayRecords?: unknown[]
  rowSpacing?: number
  tableStyle?: React.CSSProperties | undefined
  renderItem: (item: any, prevItem: any) => JSX.Element | JSX.Element[]
  renderHeader?: () => JSX.Element
}
export const FlatListItems = ({
  emptyMessage = 'Vazio',
  rowSpacing = 10,
  tableStyle = {},
  renderItem,
  ...props
}: Props): JSX.Element | null => {
  const isLoading = useContextSelector(FlatListContext, (s) => s.isLoading)

  const displayRecords = useContextSelector(
    FlatListContext,
    (s) => s.displayRecords
  )

  if (!!isLoading) return <PageLoading label="carregando..." />

  if (displayRecords.length === 0) {
    return (
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{ py: 10 }}
      >
        <Box sx={{ maxWidth: 180, maxHeight: 180 }}>
          <img src={EmptyIcon} alt="empty" />
        </Box>
        <Typography variant="body1" color="muted.main">
          {emptyMessage}
        </Typography>
      </Stack>
    )
  }

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      style={{
        ...{ borderCollapse: 'separate', borderSpacing: `0 ${rowSpacing}px` },
        ...tableStyle,
      }}
    >
      {props.renderHeader && (
        <thead>
          <props.renderHeader />
        </thead>
      )}
      <tbody>
        {displayRecords.map((record, index) =>
          renderItem(record, displayRecords[index - 1])
        )}
      </tbody>
    </table>
  )
}
