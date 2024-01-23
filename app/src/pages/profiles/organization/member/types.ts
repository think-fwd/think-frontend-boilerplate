import { MemberEntity } from '@entities/MemberEntity'
import { HttpMessageType } from '@type/http_message_type'
import { Control } from 'react-hook-form'

export type OrganizationMemberFormProps = Partial<
  Pick<MemberEntity, 'email' | 'role'>
>

export type OrganizationMemberProps = {
  organizationId: string
  member?: MemberEntity
  onSave: (member: MemberEntity) => void
}

export type OrganizationMemberControllerProps = OrganizationMemberProps & {
  children: JSX.Element
}

export type OrganizationMemberContextProps = {
  member: MemberEntity | undefined
  error: HttpMessageType | undefined
  submiting: boolean
  control: Control<OrganizationMemberFormProps, any>
  handleSubmitForm: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
}
