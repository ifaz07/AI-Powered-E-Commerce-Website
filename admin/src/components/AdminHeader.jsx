import { MdSearch } from 'react-icons/md'
import { SEARCH } from '../config/adminContent.js'
import { usePendingApplicationCount } from '../hooks/usePendingApplicationCount.js'
import AdminNav from './AdminNav.jsx'
import BrandLogo from './BrandLogo.jsx'
import Container from './Container.jsx'
import ProfileMenu from './ProfileMenu.jsx'

// The top bar: brand, tabs, search and the signed-in person. On small screens the tabs move to a scrolling row below.
function AdminHeader() {
  const badges = { pendingApplications: usePendingApplicationCount() }

  return (
    <header className='sticky top-0 z-50 bg-page/95 backdrop-blur-md border-b border-line'>
      <Container className='h-20 flex items-center justify-between gap-4'>
        <div className='flex items-center gap-3 shrink-0'>
          <BrandLogo />
          <span className='hidden sm:block h-4 w-px bg-line' />
          <span className='hidden sm:inline-block text-[11px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm bg-accent-soft text-accent border border-accent-line font-bold'>
            Admin Console
          </span>
        </div>

        <AdminNav badges={badges} className='hidden min-[1800px]:flex' />

        <div className='flex items-center gap-4 shrink-0'>
          <label className='relative w-56 2xl:w-72 hidden sm:block'>
            <span className='sr-only'>{SEARCH.placeholder}</span>
            <MdSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]' aria-hidden='true' />
            <input
              type='search'
              disabled
              title={SEARCH.hint}
              placeholder={SEARCH.placeholder}
              className='w-full pl-9 pr-3 py-2 text-sm bg-surface border border-line text-ink placeholder:text-outline rounded-md disabled:cursor-not-allowed disabled:opacity-70'
            />
          </label>
          <span className='h-5 w-px bg-line' />
          <ProfileMenu />
        </div>
      </Container>

      <div className='min-[1800px]:hidden border-t border-line overflow-x-auto'>
        <Container>
          <AdminNav badges={badges} className='flex w-max' />
        </Container>
      </div>
    </header>
  )
}

export default AdminHeader
