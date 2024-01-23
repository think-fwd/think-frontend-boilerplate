import React from 'react'
import { TrashSimple } from '@phosphor-icons/react'
import { useSnackbar } from 'notistack'
import { LoadingButton } from '@mui/lab'
import { useModal } from '../../hooks/modal'
import {
  Button,
  Container,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'

type ModalConfirmationProps = {
  title: string
  message: string | JSX.Element
  onConfirm: () => Promise<any>
  onSuccess: (data: any) => any
  maxWidth?: number
  cancelLabel?: string
  confirmLabel?: string
  confirmDisabled?: boolean
}

export const ModalConfirmation = (props: ModalConfirmationProps) => {
  const { closeModal } = useModal()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleSuccessProcess = (data: any) => {
    props.onSuccess(data)
    closeModal()
  }

  const handleFailureProcess = (error: any) => {
    enqueueSnackbar('Não foi possível remover o documento', {
      variant: 'error',
    })
  }

  const handleClickConfirm = () => {
    setLoading(true)
    props
      .onConfirm()
      .then(handleSuccessProcess)
      .catch(handleFailureProcess)
      .finally(() => setLoading(false))
  }

  return (
    <Container
      disableGutters
      sx={{ width: props.maxWidth || 400, py: 2, px: 2 }}
    >
      <DialogTitle sx={{ py: 2 }}>
        <Typography
          variant="caption"
          color="primary.dark"
          fontSize="21px"
          lineHeight={1}
        >
          {props.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        {typeof props.message === 'string' ? (
          <Typography variant="body2" color="muted.main">
            {props.message}
          </Typography>
        ) : (
          props.message
        )}
      </DialogContent>
      <DialogActions sx={{ py: 2, px: 2 }}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={closeModal}
        >
          {props.cancelLabel || 'Cancelar'}
        </Button>
        <LoadingButton
          color="secondary"
          loading={loading}
          variant="outlined"
          onClick={handleClickConfirm}
          endIcon={<TrashSimple weight="duotone" />}
          disabled={props.confirmDisabled}
        >
          {props.confirmLabel || 'Confirmar'}
        </LoadingButton>
      </DialogActions>
    </Container>
  )
}
