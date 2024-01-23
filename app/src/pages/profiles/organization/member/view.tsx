import { theme } from '@theme/index'
import { LoadingButton } from '@mui/lab'
import { X } from '@phosphor-icons/react'
import { OrganizationMemberContext } from './context'
import { useContextSelector } from 'use-context-selector'
import { FormInputText } from '@components/form-input-text'
import { FormInputCheckbox } from '@components/form-input-checkbox'
import {
  Alert,
  Container,
  DialogActions,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useModal } from '@hooks/modal'
import colors from '@theme/colors'

export const OrganizationMemberView = () => {
  const { closeModal } = useModal()
  const error = useContextSelector(OrganizationMemberContext, (s) => s.error)
  const member = useContextSelector(OrganizationMemberContext, (s) => s.member)
  const control = useContextSelector(
    OrganizationMemberContext,
    (s) => s.control
  )

  const handleSubmitForm = useContextSelector(
    OrganizationMemberContext,
    (s) => s.handleSubmitForm
  )

  const submiting = useContextSelector(
    OrganizationMemberContext,
    (s) => s.submiting
  )

  return (
    <form onSubmit={handleSubmitForm}>
      <Container maxWidth="sm" sx={{ px: { xs: 0 } }}>
        <DialogTitle sx={{ px: 3, pb: 3, pt: 3 }}>
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
                {!!member ? 'Editar Membro' : 'Novo Membro'}
              </Typography>
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
        <Stack direction="column" spacing={3} px={3}>
          {error?.message && <Alert color="error">{error?.message}</Alert>}
          <Stack direction="column" spacing={1}>
            <Stack direction="column">
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                color="secondary"
              >
                Email de membro
              </Typography>
              <Typography variant="caption" color="muted.main" lineHeight={1.2}>
                Um email será enviado para o membro notificando o convite para
                participar da organização. Após o envio do email, o usuário pode
                escolher aceitar ou rejeitar o convite.
              </Typography>
            </Stack>
            <FormInputText
              name="email"
              label="E-mail"
              control={control}
              disabled={submiting || !!member}
              error={error?.errors?.email}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Stack direction="column">
              <Stack direction="row" spacing={1} alignItems="baseline">
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color={error?.errors?.role ? 'error' : 'secondary'}
                >
                  Permissão de acesso
                </Typography>
                {error?.errors?.role && (
                  <Typography
                    variant="caption"
                    lineHeight={1.1}
                    color="error"
                    fontSize={10}
                  >
                    {error?.errors?.role}
                  </Typography>
                )}
              </Stack>
              <Typography variant="caption" color="muted.main" lineHeight={1.2}>
                Você pode conceder níveis de acesso diferentes aos membros da
                organização, garantindo que os usuários executem apenas os
                papéis pelos quais foram designados dentro do sistema.
              </Typography>
            </Stack>
            <FormInputCheckbox
              name="role"
              mode="single"
              control={control}
              options={[
                {
                  enabled: !submiting,
                  value: 'VIEWER',
                  title: 'Visualização',
                  description: (
                    <Typography
                      variant="caption"
                      color="muted.main"
                      lineHeight={1.2}
                    >
                      Permite apenas visualizar os dados da organização como (
                      <b>Visualizar Relatórios</b>, <b>Projetos</b>,
                      <b>Membros</b> e <b>Estatísticas</b>)
                    </Typography>
                  ),
                },
                {
                  enabled: !submiting,
                  value: 'EDITOR',
                  title: 'Edição',
                  subtitle: '(Herda as permissões do perfil de Visualização)',
                  description: (
                    <Typography
                      variant="caption"
                      color="muted.main"
                      lineHeight={1.2}
                    >
                      Inclui permissões para usuários com papéis de atuação no
                      sistema como (<b>Criar Projetos</b> e{' '}
                      <b>Gerenciar Tasks</b>)
                    </Typography>
                  ),
                },
                {
                  enabled: !submiting,
                  value: 'ADMIN',
                  title: 'Gestão',
                  subtitle: '(Herda permissões do perfil de Edição)',
                  description: (
                    <Typography
                      variant="caption"
                      color="muted.main"
                      lineHeight={1.2}
                    >
                      Concede acesso total da organização ao usuário para
                      tarefas restritas como (<b>Convidar membros</b>, e{' '}
                      <b>Editar organização</b>)
                    </Typography>
                  ),
                },
              ]}
            />
          </Stack>
        </Stack>
        <DialogActions
          sx={{
            py: 3,
            px: 3,
            mt: 3,
            borderTop: `1px solid ${theme.palette.gray.main}`,
            backgroundColor: colors['$color-background-tertiary'],
          }}
        >
          <LoadingButton
            loading={submiting}
            type="submit"
            variant="contained"
            size="medium"
          >
            {member ? 'Atualizar Membro' : 'Enviar Convite'}
          </LoadingButton>
        </DialogActions>
      </Container>
    </form>
  )
}
