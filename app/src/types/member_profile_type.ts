import { MemberEntity } from '../entities/MemberEntity'

export type MemberProfileType = {
  kind: 'organization' | 'admin'
  key: string
  label: string
  value: MemberEntity
}
