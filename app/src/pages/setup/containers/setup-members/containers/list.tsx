import { SetupPageMemberItem } from './item'
import { MemberEntity } from '@entities/MemberEntity'
import { FlatList } from '@components/flatlist'
import { useContextSelector } from 'use-context-selector'
import { SetupPageMembersContext } from '../context'

export const SetupPageMembersList = (): JSX.Element | null => {
  const listingRef = useContextSelector(
    SetupPageMembersContext,
    (s) => s.listingRef
  )

  const handleLoadInvites = useContextSelector(
    SetupPageMembersContext,
    (s) => s.handleLoadInvites
  )

  return (
    <FlatList
      ref={listingRef}
      rowSpacing={5}
      handlePagination={handleLoadInvites}
      emptyMessage="Nenhum membro convidado ainda..."
      itemKey={(item: MemberEntity) => item.id}
      renderItem={(item) => (
        <SetupPageMemberItem key={`invite-member-${item.id}`} item={item} />
      )}
    />
  )
}
