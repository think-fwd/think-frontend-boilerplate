import { FlatListRefType } from '@components/flatlist/types'
import { MemberEntity } from '@entities/MemberEntity'
import { PaginationType } from '@type/pagination_type'

export type OrganizationMembersPageProps = {}

export type OrganizationMemberPageControllerProps =
  OrganizationMembersPageProps & { children: JSX.Element }

export type OrganizationMembersPageContextProps = {
  flatListRef: React.RefObject<FlatListRefType>
  handleLoadInvites: (
    page: number,
    limit: number
  ) => Promise<PaginationType<MemberEntity>>
  handleDeleteInvite: (member: MemberEntity) => void
  handleResendInvite: (inviteId: string) => Promise<void>
  handleEditMember: (member?: MemberEntity | undefined) => void
}
