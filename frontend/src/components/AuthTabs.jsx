import { NavLink } from 'react-router-dom'

const TABS = [
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/registration' },
]

// Switch between the Login and Registration pages. These are real routes, so the back button works.
function AuthTabs() {
  return (
    <nav aria-label='Account' className='grid grid-cols-2 p-1 rounded bg-surface-mid border border-line'>
      {TABS.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          replace
          className={({ isActive }) =>
            `py-2.5 text-center text-label-lg uppercase rounded transition-colors ${
              isActive ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default AuthTabs
