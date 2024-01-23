import React from 'react'
import { useApi } from '@hooks/api'
import { useForm } from 'react-hook-form'
import { OrganizationMemberContext } from './context'
import { MembersApi } from '@services/api/member_api'

import {
  OrganizationMemberControllerProps,
  OrganizationMemberFormProps,
} from './types'
import { HttpMessageType } from '@type/http_message_type'

export const OrganizationMemberController = (
  props: OrganizationMemberControllerProps
): JSX.Element => {
  const api = useApi()
  const [submiting, setSubmiting] = React.useState<boolean>(false)
  const [error, setError] = React.useState<HttpMessageType | undefined>(
    undefined
  )

  const { handleSubmit, control } = useForm<OrganizationMemberFormProps>({
    defaultValues: { email: props.member?.email, role: props.member?.role },
  })

  const handleSubmitForm = handleSubmit((data: OrganizationMemberFormProps) => {
    setSubmiting(true)
    setError(undefined)

    const actions = {
      create: () =>
        api
          .instanceOf<MembersApi>(MembersApi)
          .create(props.organizationId, data),
      update: () =>
        api
          .instanceOf<MembersApi>(MembersApi)
          .update(props.organizationId, String(props?.member?.id), data),
    }

    actions[props.member ? 'update' : 'create']()
      .then((response) => {
        props.onSave(response)
      })
      .catch((error) => setError(error.response.data))
      .finally(() => setSubmiting(false))
  })

  const state = {
    error,
    submiting,
    control,
    handleSubmitForm,
    member: props.member,
  }
  return (
    <OrganizationMemberContext.Provider value={state}>
      {props.children}
    </OrganizationMemberContext.Provider>
  )
}
