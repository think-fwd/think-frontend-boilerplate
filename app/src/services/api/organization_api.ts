import { ApiAction } from '../../hooks/api/action'
import { PaginationType } from '@type/pagination_type'
import { OrganizationEntity } from '../../entities/OrganizationEntity'
import { ScrumAccountSetupFormType } from '@type/scrum_account_setup_form_type'
import { RepositoryAccountSetupFormType } from '@type/repository_account_setup_form_type'

export class OrganizationApi extends ApiAction {
  async details(organizationId: string): Promise<OrganizationEntity> {
    const response = await this.http.get<OrganizationEntity>(
      `/organizations/${organizationId}`
    )
    return response.data
  }

  async find(
    page: number,
    limit: number
  ): Promise<PaginationType<OrganizationEntity>> {
    const response = await this.http.get<PaginationType<OrganizationEntity>>(
      `/organizations?page=${page || 1}&limit=${limit || 10}`
    )
    return response.data
  }

  async create(data: Partial<OrganizationEntity>): Promise<OrganizationEntity> {
    const response = await this.http.post<OrganizationEntity>(
      `/organizations`,
      data
    )
    return response.data
  }

  async update(
    organizationId: string,
    data: Partial<OrganizationEntity>
  ): Promise<OrganizationEntity> {
    const response = await this.http.put<OrganizationEntity>(
      `/organizations/${organizationId}`,
      data
    )
    return response.data
  }

  async delete(organizationId: string): Promise<OrganizationEntity> {
    const response = await this.http.delete<OrganizationEntity>(
      `/organizations/${organizationId}`
    )
    return response.data
  }

  async removeScrumAccount(
    organizationId: string
  ): Promise<OrganizationEntity> {
    const response = await this.http.delete<OrganizationEntity>(
      `/organizations/${organizationId}/scrum`
    )
    return response.data
  }

  async setupScrumAccount(
    organizationId: string,
    account: Partial<ScrumAccountSetupFormType>
  ): Promise<OrganizationEntity> {
    const response = await this.http.post<OrganizationEntity>(
      `/organizations/${organizationId}/setup/scrum`,
      account
    )
    return response.data
  }

  async removeRepositoryAccount(
    organizationId: string
  ): Promise<OrganizationEntity> {
    const response = await this.http.delete<OrganizationEntity>(
      `/organizations/${organizationId}/repository`
    )
    return response.data
  }

  async setupRepositoryAccount(
    organizationId: string,
    account: Partial<RepositoryAccountSetupFormType>
  ): Promise<OrganizationEntity> {
    const response = await this.http.post<OrganizationEntity>(
      `/organizations/${organizationId}/setup/repository`,
      account
    )
    return response.data
  }

  async setupFinish(organizationId: string): Promise<OrganizationEntity> {
    const response = await this.http.get<OrganizationEntity>(
      `/organizations/${organizationId}/setup/done`
    )
    return response.data
  }
}
