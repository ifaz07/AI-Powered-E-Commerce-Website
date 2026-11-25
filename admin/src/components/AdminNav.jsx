import { NavLink } from 'react-router-dom'
import { ADMIN_NAV } from '../config/adminContent.js'

const itemClass = 'relative px-3 py-2 text-[15px] font-medium rounded-md whitespace-nowrap flex items-center gap-2'

// The main tabs. Only pages that exist are links; the others show greyed out until they are built.
function AdminNav({ badges = {}, className = '' }) {
  return (
    <nav aria-label='Main' className={`items-center gap-1 ${className}`}>
      {ADMIN_NAV.map(({ id, label, to, badge }) => {
        const count = badge ? badges[badge] : 0
        const badgeEl = count > 0 && (
          <span className='px-1.5 text-[11px] font-bold rounded-md bg-terracotta text-white font-mono leading-tight'>{count}</span>
        )

        if (!to) {
          return (
            <span key={id} aria-disabled='true' title='Not available yet' className={`${itemClass} text-outline/60 cursor-not-allowed`}>
              {label}
              {badgeEl}
            </span>
          )
        }

        return (
          <NavLink
            key={id}
            to={to}
            end
            className={({ isActive }) =>
              `${itemClass} transition-colors ${isActive ? 'text-accent font-semibold' : 'text-muted hover:text-ink hover:bg-hover'}`
            }
          >
            {({ isActive }) => (
              <>
                {label}
                {badgeEl}
                {isActive && <span className='absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-md' />}
              </>
            )}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default AdminNav
