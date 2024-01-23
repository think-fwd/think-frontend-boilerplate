import _ from 'lodash'
import { RoleEnum } from '@enums/role_enum'
import { Dropdown } from '@components/dropdown'
import { FlatListRowStandard } from '@components/flatlist/styles'
import { InviteColorEnum, InviteEnum } from '@enums/invite_enum'
import {
  Chip,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { DotsThree, PaperPlane, TrashSimple } from '@phosphor-icons/react'
import { MemberEntity } from '@entities/MemberEntity'
import { SetupPageMembersContext } from '../context'
import { useContextSelector } from 'use-context-selector'
import { useState } from 'react'
import { useAuth } from '@hooks/auth'

export const SetupPageMemberItem = ({
  item,
}: {
  item: MemberEntity
}): JSX.Element => {
  const auth = useAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const handleDeleteInvite = useContextSelector(
    SetupPageMembersContext,
    (s) => s.handleDeleteInvite
  )
  const handleResendInvite = useContextSelector(
    SetupPageMembersContext,
    (s) => s.handleResendInvite
  )

  const handleDelete = () => {
    setLoading(true)
    handleDeleteInvite(item.id).finally(() => setLoading(false))
  }

  const handleReinvite = () => {
    setLoading(true)
    handleResendInvite(item.id).finally(() => setLoading(false))
  }

  return (
    <FlatListRowStandard>
      <td>
        <Stack direction="column" py={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              variant="caption"
              color="muted.main"
              fontWeight="bold"
              lineHeight={1}
            >
              {item?.user_name ? `<${item.user_name}>` : `<desconhecido>`}
            </Typography>
            <Typography
              variant="caption"
              color="muted.main"
              fontWeight="bold"
              lineHeight={1}
            >
              {_.get(RoleEnum, item.role)}
            </Typography>
          </Stack>
          <Typography variant="body2" color="muted.main" lineHeight={1}>
            {item.email}
          </Typography>
        </Stack>
      </td>
      <td align="right">
        <Chip
          size="small"
          sx={{ fontSize: 12, height: 21 }}
          label={_.get(InviteEnum, item.status)}
          style={{
            color: 'white',
            backgroundColor: _.get(InviteColorEnum, item.status),
          }}
        />
      </td>
      {item.user_id !== auth?.user?.sub && (
        <td>
          <Dropdown
            options={[
              {
                label: 'Reenviar',
                icon: PaperPlane,
                action: () => handleReinvite(),
              },
              {
                label: 'Excluir',
                icon: TrashSimple,
                action: () => handleDelete(),
              },
            ]}
          >
            <IconButton size="small">
              {loading ? <CircularProgress size={18} /> : <DotsThree />}
            </IconButton>
          </Dropdown>
        </td>
      )}
    </FlatListRowStandard>
  )
}
