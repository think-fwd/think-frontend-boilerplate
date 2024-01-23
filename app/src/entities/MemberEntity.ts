import { RoleEnumKeys } from '@enums/role_enum'
import { StatusEnumKeys } from '@enums/invite_enum'
import { OrganizationEntity } from './OrganizationEntity'
import { UserEntity } from './UserEntity'

export type MemberEntity = {
  id: string
  role: RoleEnumKeys
  status: StatusEnumKeys
  email: string
  user_name: string
  user_id: string
  organization_id: string
  organization: OrganizationEntity
  user?: UserEntity
  created_at: string
}
