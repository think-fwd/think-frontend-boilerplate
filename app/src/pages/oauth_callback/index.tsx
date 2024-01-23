import { Navigate, useParams, useSearchParams } from 'react-router-dom'

export const OAuthCallbackPage = (): JSX.Element => {
  const { resource, provider } = useParams<{
    resource: string
    provider: string
  }>()
  const [params] = useSearchParams()
  return (
    <Navigate
      to={`/organizations/${params.get(
        'organization_id'
      )}?step=${resource}&provider=${provider}&code=${params.get('code')}`}
      replace
    />
  )
}
