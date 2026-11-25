import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AdminFooter from './AdminFooter.jsx'
import AdminHeader from './AdminHeader.jsx'
import Container from './Container.jsx'
import PageLoader from './PageLoader.jsx'

// Layout route for every signed-in page. The header and footer stay put; only the page fades in.
function AdminLayout() {
  const { pathname } = useLocation()

  return (
    <div className='min-h-screen flex flex-col'>
      <AdminHeader />
      <Container as='main' className='flex-1 flex flex-col py-10 lg:py-14'>
        <div key={pathname} className='page-enter flex-1 flex flex-col'>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </Container>
      <AdminFooter />
    </div>
  )
}

export default AdminLayout
