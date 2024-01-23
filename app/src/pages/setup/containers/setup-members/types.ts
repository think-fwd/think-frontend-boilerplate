import { MemberEntity } from '@entities/MemberEntity'
import { PaginationType } from '@type/pagination_type'
import { Control, FieldValues } from 'react-hook-form'
import { FlatListRefType } from '@components/flatlist/types'
import { OrganizationEntity } from '@entities/OrganizationEntity'

export type SetupPageMembersFormProps = Partial<
  Pick<MemberEntity, 'email' | 'role'>
>

export type SetupPageMembers = {}

export type SetupPageMembersContextProps = {
  error: any
  inviting: boolean
  listingRef: React.RefObject<FlatListRefType>
  control: Control<FieldValues, any>
  handleFinishSetup: () => Promise<OrganizationEntity>
  handleResendInvite: (inviteId: string) => Promise<void>
  handleDeleteInvite: (inviteId: string) => Promise<void | undefined>
  handleSubmitInvite: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
  handleLoadInvites: (
    page: number,
    limit: number
  ) => Promise<PaginationType<MemberEntity>>
}

export type SetupPageMembersControllerProps = SetupPageMembers & {
  children: JSX.Element
}
