/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useAuth } from '@hooks/auth'
import { LinearProgress } from '@mui/material'
import { UserEntity } from '@entities/UserEntity'
import { useContextSelector } from 'use-context-selector'
import { useLocation, useNavigate } from 'react-router-dom'
import { SessionPageContext } from '@pages/session/context'

export const LoadingPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const selectedProfile = useContextSelector(
    SessionPageContext,
    (s) => s.selectedProfile
  )

  const handleRedirectUser = (user: UserEntity) => {
    const queryparams = document.location.search
    if (selectedProfile?.kind === 'admin') {
      const path = `/admin${queryparams}`
      if (!pathname.startsWith(path)) navigate(`${path}/`, { replace: true })
    } else if (selectedProfile?.kind === 'organization') {
      const path = `/organizations/${selectedProfile.value.organization.id}${queryparams}`
      if (!pathname.startsWith(path)) navigate(`${path}`, { replace: true })
    } else if ((user.members || []).length === 0) {
      navigate(`/setup${queryparams}`, { replace: true })
    } else {
      const [member] = user.members
      navigate(`/organizations/${member.organization_id}${queryparams}`, {
        replace: true,
      })
    }
  }

  useEffect(() => {
    if (auth?.user) {
      handleRedirectUser(auth.user)
    }
  }, [])

  return <LinearProgress />
}
