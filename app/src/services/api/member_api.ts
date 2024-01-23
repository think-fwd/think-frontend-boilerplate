import { UserEntity } from '@entities/UserEntity'
import { ApiAction } from '../../hooks/api/action'
import { PaginationType } from '@type/pagination_type'
import { MemberEntity } from '@entities/MemberEntity'
import { buildquery } from '@utils/buildquery'

export class MembersApi extends ApiAction {
  async find(
    organizationId: string,
    page: number,
    limit: number,
    filters?: Record<string, string>
  ): Promise<PaginationType<MemberEntity>> {
    const response = await this.http.get<PaginationType<MemberEntity>>(
      `/organizations/${organizationId}/members?page=${page}&limit=${limit}&${buildquery(
        filters
      )}`
    )
    return response.data
  }

  async create(
    organizationId: string,
    props: Partial<Pick<MemberEntity, 'email' | 'role'>>
  ): Promise<MemberEntity> {
    const response = await this.http.post<MemberEntity>(
      `/organizations/${organizationId}/members`,
      props
    )
    return response.data
  }

  async update(
    organizationId: string,
    memberId: string,
    props: Partial<Pick<MemberEntity, 'role'>>
  ): Promise<MemberEntity> {
    const response = await this.http.put<MemberEntity>(
      `/organizations/${organizationId}/members/${memberId}`,
      props
    )
    return response.data
  }

  async delete(
    organizationId: string,
    memberId: string
  ): Promise<MemberEntity> {
    const response = await this.http.delete<MemberEntity>(
      `/organizations/${organizationId}/members/${memberId}`
    )
    return response.data
  }

  async reinvite(
    organizationId: string,
    memberId: string
  ): Promise<MemberEntity> {
    const response = await this.http.post<MemberEntity>(
      `/organizations/${organizationId}/members/${memberId}/reinvite`
    )
    return response.data
  }

  async handleInvite(
    memberId: string,
    action: 'accept' | 'decline'
  ): Promise<UserEntity> {
    const response = await this.http.post<UserEntity>(
      `/members/${memberId}/${action}`
    )
    return response.data
  }

  async handleAcceptInvite(
    email: string,
    inviteCode: string
  ): Promise<MemberEntity> {
    return await this.http.post(`/accept-invite`, {
      email: email,
      code: inviteCode,
    })
  }
}
