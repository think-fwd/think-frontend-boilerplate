import { Plus } from '@phosphor-icons/react'
import { Button, Typography } from '@mui/material'
import EmptyIcon from '../../assets/images/nodata.svg'
import { Wrapper } from './styles'

type Props = {
  title: string
  description: string
  action: {
    label: string
    onClick: () => void
  }
}

export const Empty = (props: Props): JSX.Element => {
  return (
    <Wrapper>
      <img src={EmptyIcon} alt="empty" />
      <Typography variant="h3" color="primary.main">
        {props.title}
      </Typography>
      <Typography variant="caption" color="muted.main">
        {props.description}
      </Typography>
      <Button
        variant="contained"
        size="small"
        endIcon={<Plus size={14} />}
        onClick={props.action.onClick}
      >
        {props.action.label}
      </Button>
    </Wrapper>
  )
}
