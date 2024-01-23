import { MemberEntity } from './MemberEntity'

export type UserEntity = {
  sub: string
  name: string
  email: string
  phone: string
  admin: boolean
  active: boolean
  members: MemberEntity[]
  created_at: string
  updated_at: string
}
