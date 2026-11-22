import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PageLoader from './PageLoader.jsx'

// Shows the current page inside a layout (PageLayout or AuthLayout). The menu, footer and side panel stay
// on screen; only this part fades in ("page-enter" in index.css). The key restarts the fade on each route change.
// Suspense sits here, inside the layout, so a page that is still downloading never blanks the whole screen.
function PageTransition() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Suspense fallback={<PageLoader />}>
      <div key={pathname} className='page-enter'>
        <Outlet />
      </div>
    </Suspense>
  )
}

export default PageTransition
