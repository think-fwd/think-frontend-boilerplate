import React from 'react'
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Container,
  Stack,
  Button,
  IconButton,
} from '@mui/material'
import { useModal } from '../../hooks/modal'
import { X } from '@phosphor-icons/react'
import { LoadingButton } from '@mui/lab'
import { theme } from '../../theme'

type ModalFormProps = {
  dialogTitle: string
  dialogSubtitle?: string
  children: JSX.Element | JSX.Element[] | React.Component | any
  canDelete?: boolean
  isSubmiting?: boolean
  submitButtonLabel?: string
  handleConfirmDelete?: () => void
  actions?: Array<{
    label: string
    handle: () => void
    variant?: 'text' | 'outlined' | 'contained'
    size?: 'small' | 'large' | 'medium'
    color?:
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'info'
      | 'warning'
  }>
}

export const ModalFormComponent = (props: ModalFormProps): JSX.Element => {
  const { closeModal } = useModal()

  return (
    <Container maxWidth="sm" sx={{ px: { xs: 0 } }}>
      <DialogTitle sx={{ px: 3, pb: 0, pt: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          spacing={3}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 0, sm: 1 }}
            alignItems="baseline"
          >
            <Typography variant="h6" color="secondary.main">
              {props.dialogTitle}
            </Typography>
            {props.dialogSubtitle && (
              <Typography variant="h4" color="muted.main">
                / {props.dialogSubtitle}
              </Typography>
            )}
          </Stack>
          <IconButton
            size="small"
            sx={{ borderRadius: 1 }}
            onClick={closeModal}
          >
            <X />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ mt: 2, p: 0, pt: 3 }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{ maxWidth: '100%', width: '1000px', pt: 1 }}
        >
          {props.children}
        </Stack>
      </DialogContent>
      {(!!props.handleConfirmDelete ||
        !!props.submitButtonLabel ||
        !!props.actions) && (
        <DialogActions sx={{ padding: 0, pb: 3, px: 3 }}>
          <Stack
            spacing={1}
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'stretch', md: 'flex-end' }}
            justifyContent="flex-end"
            sx={{ width: '100%' }}
          >
            {props.canDelete && !!props.handleConfirmDelete && (
              <Button
                type="button"
                size="large"
                variant="outlined"
                color="secondary"
                onClick={props.handleConfirmDelete}
              >
                Excluir
              </Button>
            )}
            {(props.actions || []).map((action) => (
              <LoadingButton
                key={`action-${action.label}`}
                type="button"
                size={action.size || 'large'}
                variant={action.variant || 'contained'}
                color={action.color || 'primary'}
                onClick={action.handle}
              >
                {action.label}
              </LoadingButton>
            ))}
            {props.submitButtonLabel && (
              <LoadingButton
                type="submit"
                size="large"
                variant="contained"
                color="secondary"
                sx={{ backgroundColor: theme.palette.primary.dark }}
                loading={props.isSubmiting}
              >
                {props.submitButtonLabel}
              </LoadingButton>
            )}
          </Stack>
        </DialogActions>
      )}
    </Container>
  )
}
