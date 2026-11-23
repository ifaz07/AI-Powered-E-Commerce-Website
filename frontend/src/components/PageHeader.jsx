import { Link } from 'react-router-dom'
import Container from './Container.jsx'

// The heading band at the top of Collections and Merchants: breadcrumb, title, one line of text,
// optional buttons (children) and an optional side panel (aside). The last breadcrumb item has no link.
function PageHeader({ breadcrumb, title, subtitle, aside, children }) {
  return (
    <section className='w-full bg-surface-low border-b border-line py-8 lg:py-12'>
      <Container className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
        <div className={`flex flex-col gap-5 ${aside ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
          <nav aria-label='Breadcrumb' className='flex flex-wrap items-center gap-2 text-label-md uppercase text-outline'>
            {breadcrumb.map(({ label, to }, index) => (
              <span key={label} className='flex items-center gap-2'>
                {index > 0 && <span aria-hidden='true'>/</span>}
                {to ? (
                  <Link to={to} className='hover:text-accent transition-colors'>
                    {label}
                  </Link>
                ) : (
                  <span className='text-ink'>{label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className='font-display text-display-xl-mobile md:text-display-xl lg:text-display-2xl text-ink'>{title}</h1>
          <p className='text-body-lg text-muted font-normal max-w-3xl'>{subtitle}</p>
          {children && <div className='flex flex-wrap items-center gap-4 pt-2'>{children}</div>}
        </div>
        {aside && <aside className='lg:col-span-4'>{aside}</aside>}
      </Container>
    </section>
  )
}

export default PageHeader
