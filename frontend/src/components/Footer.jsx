import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo.jsx'
import Container from './Container.jsx'

// Only links to pages that exist. Add a link here when its page is built.
const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Collections', to: '/collections' },
      { label: 'Cart', to: '/cart' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Merchants', to: '/merchants' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Login', to: '/login' },
      { label: 'Create account', to: '/registration' },
    ],
  },
]

function Footer() {
  return (
    <footer className='w-full bg-surface text-muted'>
      <Container className='py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 pb-12'>
          <div className='md:col-span-3 lg:col-span-6 flex flex-col gap-4'>
            <BrandLogo />
            <p className='text-body-md max-w-sm'>
              Clothing and accessories for men, women and kids.
            </p>
          </div>

          {COLUMNS.map(({ title, links }) => (
            <nav key={title} aria-label={title} className='lg:col-span-2 flex flex-col gap-3'>
              <span className='text-label-lg uppercase text-ink font-semibold mb-2'>{title}</span>
              {links.map(({ label, to }) => (
                <Link key={to} to={to} className='text-body-sm hover:text-accent transition-colors'>
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <p className='pt-4 border-t border-line text-body-sm text-outline'>
          &copy; {new Date().getFullYear()} OneCart. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
