import { FlatList } from '@components/flatlist'
import { PlusCircle } from '@phosphor-icons/react'
import { MemberEntity } from '@entities/MemberEntity'
import { Button, Stack, Typography } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { CardContainer } from '@components/card-container'
import { OrganizationMembersPageContext } from './context'
import { OrganizationMembersItem } from './containers/item'
import { OrganizationMembersFilters } from './containers/filters'
import { OrganizationMembersTableHeader } from './containers/header'

export const OrganizationMembersPageView = (): JSX.Element => {
  const flatListRef = useContextSelector(
    OrganizationMembersPageContext,
    (s) => s.flatListRef
  )
  const handleEditMember = useContextSelector(
    OrganizationMembersPageContext,
    (s) => s.handleEditMember
  )
  const handleLoadInvites = useContextSelector(
    OrganizationMembersPageContext,
    (s) => s.handleLoadInvites
  )
  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        alignItems="center"
      >
        <Typography variant="h5" color="secondary.main">
          Membros
        </Typography>
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            startIcon={<PlusCircle size={16} />}
            onClick={() => handleEditMember(undefined)}
          >
            Novo Membro
          </Button>
        </Stack>
      </Stack>
      <OrganizationMembersFilters />
      <CardContainer>
        <FlatList
          ref={flatListRef}
          handlePagination={handleLoadInvites}
          emptyMessage="Nenhum membro criado..."
          itemKey={(item: MemberEntity) => item.id}
          renderHeader={() => <OrganizationMembersTableHeader />}
          renderItem={(item: MemberEntity) => (
            <OrganizationMembersItem
              key={`invite-member-${item.id}`}
              item={item}
            />
          )}
        />
      </CardContainer>
    </Stack>
  )
}
