import { CircularProgress, Typography } from '@mui/material'
import { TagContainer, TagWrapper } from './LoadingTag.styles'

export interface LoadingTagProps {
  message: string
}

export default function LoadingTag({ message }: LoadingTagProps) {
  return (
    <TagWrapper>
      <TagContainer
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress size={16} disableShrink thickness={6} />
        <Typography variant="body2" color="muted.main">
          {message}
        </Typography>
      </TagContainer>
    </TagWrapper>
  )
}
