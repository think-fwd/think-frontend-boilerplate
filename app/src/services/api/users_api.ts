import { UserEntity } from '@entities/UserEntity'
import { ApiAction } from '../../hooks/api/action'
import { PaginationType } from '@type/pagination_type'

export class UsersApi extends ApiAction {
  async find(page: number, limit: number): Promise<PaginationType<UserEntity>> {
    const response = await this.http.get<PaginationType<UserEntity>>(
      `/users?page=${page || 1}&limit=${limit || 10}`
    )
    return response.data
  }
}
