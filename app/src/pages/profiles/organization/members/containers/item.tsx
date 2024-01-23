/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import { useMemo, useState } from 'react'
import { useAuth } from '@hooks/auth'
import { RoleEnum } from '@enums/role_enum'
import { Dropdown, DropdownOptionType } from '@components/dropdown'
import { MemberEntity } from '@entities/MemberEntity'
import { useContextSelector } from 'use-context-selector'
import { OrganizationMembersPageContext } from '../context'
import { InviteColorEnum, InviteEnum } from '@enums/invite_enum'
import { FlatListRowStandard } from '@components/flatlist/styles'
import {
  DotsThree,
  PaperPlane,
  Pencil,
  TrashSimple,
} from '@phosphor-icons/react'

import {
  Chip,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { formatDate } from '@utils/formatter'
import { FormInputCheck } from '@components/form-input-check/form-input-check'

export const OrganizationMembersItem = ({
  item,
}: {
  item: MemberEntity
}): JSX.Element => {
  const auth = useAuth()

  const [loading, setLoading] = useState<boolean>(false)

  const handleDeleteInvite = useContextSelector(
    OrganizationMembersPageContext,
    (s) => s.handleDeleteInvite
  )
  const handleResendInvite = useContextSelector(
    OrganizationMembersPageContext,
    (s) => s.handleResendInvite
  )

  const handleEditMember = useContextSelector(
    OrganizationMembersPageContext,
    (s) => s.handleEditMember
  )

  const handleReinvite = () => {
    setLoading(true)
    handleResendInvite(item.id).finally(() => setLoading(false))
  }

  const loadOptions = useMemo(() => {
    const options: DropdownOptionType[] = [
      {
        label: 'Editar',
        icon: Pencil,
        action: () => handleEditMember(item),
      },
      {
        label: 'Excluir',
        icon: TrashSimple,
        action: () => handleDeleteInvite(item),
      },
    ]

    if (item.status === 'PENDING') {
      options.unshift({
        label: 'Reenviar',
        icon: PaperPlane,
        action: () => handleReinvite(),
      })
    }

    return options
  }, [])

  return (
    <FlatListRowStandard hovercolor="#ffffff">
      <td align="center" style={{ padding: 12 }}>
        <FormInputCheck name="select-item" />
      </td>
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
          </Stack>
          <Typography variant="body2" color="muted.main" lineHeight={1}>
            {item.email}
          </Typography>
        </Stack>
      </td>
      <td>
        <Typography
          variant="caption"
          color="muted.main"
          fontWeight="bold"
          lineHeight={1}
        >
          {_.get(RoleEnum, item.role)}
        </Typography>
      </td>
      <td align="center">
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
      <td align="center">
        <Typography
          variant="caption"
          color="muted.main"
          fontWeight="bold"
          lineHeight={1}
        >
          {formatDate(item.created_at, {
            pattern: 'dd/MM/yyyy',
          })}
          &nbsp;às&nbsp;
          {formatDate(item.created_at, {
            pattern: 'HH:mm',
          })}
        </Typography>
      </td>
      <td>
        {item.user_id !== auth?.user?.sub && (
          <Dropdown options={loadOptions}>
            <IconButton size="small">
              {loading ? <CircularProgress size={18} /> : <DotsThree />}
            </IconButton>
          </Dropdown>
        )}
      </td>
    </FlatListRowStandard>
  )
}
