import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import PageLoader from './PageLoader.jsx'

// Layout route for private pages (see App.jsx). Logged-out visitors are sent to the login page.
function RequireAuth() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to='/login' replace />
  return <Outlet />
}

export default RequireAuth
