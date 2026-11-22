import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { HERO } from '../config/homeContent.js'
import AuthTabs from './AuthTabs.jsx'
import BrandLogo from './BrandLogo.jsx'
import PageTransition from './PageTransition.jsx'

// Shared frame for Login and Registration: a brand panel on the left (large screens only) and the form on the
// right. It is a layout route (see App.jsx), so the panel, logo and tabs stay put while only the form changes.
function AuthLayout() {
  return (
    <div className='w-full min-h-screen bg-page text-ink flex'>
      <section className='relative hidden lg:flex lg:w-7/12 xl:w-3/5 flex-col justify-between p-12 xl:p-16 2xl:p-20 bg-surface-low border-r border-line overflow-hidden'>
        <img
          src={HERO.image}
          alt=''
          className='absolute inset-0 w-full h-full object-cover object-center grayscale opacity-50'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-surface-low via-surface-low/70 to-transparent' />

        <div className='relative'>
          <BrandLogo />
        </div>

        <div className='relative max-w-2xl flex flex-col gap-6'>
          <span className='self-start px-3.5 py-1.5 rounded-full bg-surface/70 backdrop-blur-md border border-line text-label-lg uppercase text-accent'>
            Curated fashion
          </span>
          <h2 className='font-display text-display-xl 2xl:text-display-2xl text-ink'>
            Thoughtful curation for <span className='italic text-accent'>modern</span> living.
          </h2>
          <p className='text-body-lg text-muted font-normal max-w-lg'>
            Log in or create an account to pick up where you left off.
          </p>
        </div>

        <p className='relative pt-6 border-t border-line text-body-sm text-outline'>
          &copy; {new Date().getFullYear()} OneCart. All rights reserved.
        </p>
      </section>

      <main className='flex-1 flex flex-col px-5 sm:px-12 lg:px-14 xl:px-20 py-8 lg:py-12'>
        <Link
          to='/'
          className='group self-start inline-flex items-center gap-2 text-label-lg uppercase text-muted hover:text-ink transition-colors'
        >
          <MdArrowBack className='text-[16px] group-hover:-translate-x-1 transition-transform' aria-hidden='true' />
          Back to shop
        </Link>

        <div className='w-full max-w-md 2xl:max-w-lg m-auto py-8 flex flex-col gap-8'>
          <div className='lg:hidden self-center'>
            <BrandLogo />
          </div>

          <AuthTabs />

          <PageTransition />
        </div>
      </main>
    </div>
  )
}

export default AuthLayout
