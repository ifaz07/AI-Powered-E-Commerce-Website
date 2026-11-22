import Footer from './Footer.jsx'
import Nav from './Nav.jsx'

// The frame for every normal page: menu bar on top, content, footer at the bottom.
function PageLayout({ children }) {
  return (
    <>
      <Nav />
      <main className='w-full pt-20 bg-page min-h-screen'>{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
