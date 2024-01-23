import { SignupType } from '@type/signup_type'
import { UserEntity } from '@entities/UserEntity'
import { ApiAction } from '../../hooks/api/action'
import { HttpMessageType } from '@type/http_message_type'
import { CredentialsType } from '../../types/creentials_type'
import { ResetPasswordFormType } from '@type/reset_password_form_type'
import { ForgotPasswordFormType } from '@type/forgot_password_form_type'
import { JwtType } from '@type/jwt_type'

export class AuthApi extends ApiAction {
  async signup(payload: SignupType): Promise<HttpMessageType> {
    const response = await this.http.post<HttpMessageType>(`/signup`, payload)
    return response.data
  }

  async login(credentials: CredentialsType): Promise<UserEntity> {
    const response = await this.http.post<UserEntity>(`/login`, credentials)
    return response.data
  }

  async forgotPassword(payload: ForgotPasswordFormType): Promise<boolean> {
    const response = await this.http.post<boolean>(`/forgot-password`, payload)
    return response.data
  }

  async resetPassword(payload: ResetPasswordFormType): Promise<UserEntity> {
    const response = await this.http.post<UserEntity>(
      `/reset-password`,
      payload
    )
    return response.data
  }
  async activeAccount(
    code: string | undefined,
    email: string | undefined
  ): Promise<void> {
    await this.http.post<void>(`/activate`, {
      email,
      code,
    })
  }
  async session(): Promise<UserEntity> {
    const response = await this.http.get<UserEntity>(`/session`)
    return response.data
  }
  async wsstoken(): Promise<JwtType> {
    const response = await this.http.get<JwtType>(`/wsstoken`)
    return response.data
  }
}
