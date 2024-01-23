import { Typography } from '@mui/material'

export const OrganizationMembersTableHeader = (): JSX.Element => {
  return (
    <tr>
      <th style={{ width: 60 }}>&nbsp;</th>
      <th align="left">
        <Typography variant="caption" color="muted.main" fontWeight="bold">
          E-mail
        </Typography>
      </th>
      <th align="left">
        <Typography variant="caption" color="muted.main" fontWeight="bold">
          Perfil
        </Typography>
      </th>
      <th align="center">
        <Typography variant="caption" color="muted.main" fontWeight="bold">
          Situação
        </Typography>
      </th>
      <th align="center">
        <Typography variant="caption" color="muted.main" fontWeight="bold">
          Criado em
        </Typography>
      </th>
      <th style={{ width: 60 }}>&nbsp;</th>
    </tr>
  )
}
