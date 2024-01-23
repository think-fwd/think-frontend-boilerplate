import { UserEntity } from '@entities/UserEntity'

export type SessionType = {
  jwt: string
  user: UserEntity
}
