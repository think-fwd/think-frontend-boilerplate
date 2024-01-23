import { Login } from './pages/login'
import { useAuth } from '@hooks/auth'
import { Signup } from '@pages/signup'
import { Panel } from './containers/panel'
import { SessionPage } from './pages/session'
import { FormsExamples } from '@pages/forms'
import { WebsocketProvider } from './hooks/websocket'
import { ActiveAccount } from '@pages/active-account'
import { ResetPassword } from '@pages/reset-password'
import { ForgotPassword } from '@pages/forgot-password'
import { AdminResume } from '@pages/profiles/admin/resume'
import { AdminBilling } from '@pages/profiles/admin/billing'
import { SetupPage } from './pages/setup'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { AdminSubscriptions } from '@pages/profiles/admin/subscriptions'
import { AdminOrganizations } from '@pages/profiles/admin/organizations'
import { OrganizationMembersPage } from '@pages/profiles/organization/members'
import { OrganizationSettings } from '@pages/profiles/organization/settings'
import { OrganizationOverview } from '@pages/profiles/organization/overview'
import { OrganizationSubscription } from '@pages/profiles/organization/subscription'
import { LoadingPage } from '@pages/loading'
import { OrganizationPanel } from '@pages/profiles/organization'
import { OAuthCallbackPage } from '@pages/oauth_callback'
import { AcceptInvitePage } from '@pages/accept-invite'

function PrivateRoutes({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) return <Navigate to="/" />
  return (
    <WebsocketProvider>
      <Outlet />
    </WebsocketProvider>
  )
}

function PublicRoutes({ isAuth }: { isAuth: boolean }) {
  if (isAuth) return <Navigate to="/loading" />
  return <Outlet />
}

function Router() {
  const { user } = useAuth()
  const isAuth = !!user
  return (
    <Routes>
      <Route path="invite" element={<AcceptInvitePage />} />
      <Route element={<PublicRoutes isAuth={isAuth} />}>
        <Route path="" element={<Login />} />
        <Route path="forms" element={<FormsExamples />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="active-account" element={<ActiveAccount />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route element={<PrivateRoutes isAuth={isAuth} />}>
        <Route element={<SessionPage />}>
          <Route
            path="oauth_callback/:resource/:provider"
            element={<OAuthCallbackPage />}
          />
          <Route path="loading" element={<LoadingPage />} />
          <Route path="setup">
            <Route path="" element={<SetupPage />} />
            <Route path="*" element={<Navigate to="/setup" replace />} />
          </Route>
          <Route path="admin/dashboard" element={<Panel />}>
            <Route path="" element={<AdminResume />} />
            <Route path="billing" element={<AdminBilling />} />
            <Route path="organizations" element={<AdminOrganizations />} />
            <Route path="subscriptions" element={<AdminSubscriptions />} />
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Route>
          <Route path="organizations/:id" element={<OrganizationPanel />}>
            <Route path="" element={<OrganizationOverview />} />
            <Route path="settings" element={<OrganizationSettings />} />
            <Route path="subscription" element={<OrganizationSubscription />} />
            <Route path="members" element={<OrganizationMembersPage />} />
            <Route
              path="*"
              element={<Navigate to="/organizations" replace />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/loading" replace />} />
        </Route>
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default Router
