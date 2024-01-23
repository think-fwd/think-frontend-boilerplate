import { CardContainer } from '@components/card-container'
import {
  CircularProgress,
  Stack,
  Typography,
  circularProgressClasses,
} from '@mui/material'

export type PageLoadingProps = {
  label: string
  description?: string
}

export const PageLoading = (props: PageLoadingProps): JSX.Element => {
  return (
    <CardContainer>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress
          size={14}
          thickness={7}
          disableShrink
          variant="indeterminate"
          sx={{
            color: (theme) => theme.palette.muted.main,
            animationDuration: '550ms',
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
        />
        <Typography variant="caption" color="muted.main" fontSize={12}>
          {props.label}
        </Typography>
      </Stack>
    </CardContainer>
  )
}
