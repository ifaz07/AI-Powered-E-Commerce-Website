import BrandLogo from './BrandLogo.jsx'
import Container from './Container.jsx'

// Shared frame for Login and Registration: logo on top, title, then the form card centered on the screen.
function AuthLayout({ title, subtitle, children }) {
  return (
    <div className='w-full min-h-screen bg-page text-ink flex flex-col'>
      <Container as='header' className='h-20 flex items-center'>
        <BrandLogo />
      </Container>

      <main className='flex-1 w-full flex flex-col items-center justify-center gap-7 px-5 pb-16'>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='font-display text-display-xl-mobile md:text-headline-lg'>{title}</h1>
          <p className='text-body-lg text-muted'>{subtitle}</p>
        </div>

        <div className='w-full max-w-[520px] bg-surface border border-line rounded-lg shadow-xl shadow-black/5 p-7 sm:p-10'>
          {children}
        </div>
      </main>
    </div>
  )
}

export default AuthLayout
