import { OrganizationStatusEnum } from '@enums/organization_status_enum'
import { ScrumAccountEntity } from './ScrumAccountEntity'
import { RepositoryAccountEntity } from './RepositoryAccountEntity'

export type OrganizationEntity = {
  id: string
  name: string
  email: string
  document: string
  status: OrganizationStatusEnum
  created_at: Date
  updated_at: Date
  address?: Object
  scrum?: ScrumAccountEntity
  repository?: RepositoryAccountEntity
}
