import { CircularProgress, Stack, Typography } from '@mui/material'

type Props = { size: 'regular' | 'small'; visible: boolean }

export function FilterSelectDropdownLoading({
  size,
  visible,
}: Props): JSX.Element | null {
  if (visible === false) return null
  return (
    <Stack
      px={1}
      py={size === 'regular' ? 2 : 1}
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={12} />
      <Typography variant="body1" color="$color-text-secundary">
        Carregando...
      </Typography>
    </Stack>
  )
}
