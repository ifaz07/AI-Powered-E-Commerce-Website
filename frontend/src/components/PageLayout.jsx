import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import PageTransition from './PageTransition.jsx'

// The frame for every normal page: menu bar on top, the page, footer at the bottom.
// It is a layout route (see App.jsx), so the menu and footer stay put while only the page changes.
function PageLayout() {
  return (
    <>
      <Nav />
      <main className='w-full pt-20 bg-page min-h-screen'>
        <PageTransition />
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
