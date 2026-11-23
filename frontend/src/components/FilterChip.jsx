import { Link } from 'react-router-dom'

// A rounded filter link. The active one is dark.
function FilterChip({ to, active = false, children }) {
  return (
    <Link
      to={to}
      aria-current={active ? 'page' : undefined}
      className={`px-4 py-2 rounded-full text-label-lg uppercase whitespace-nowrap border transition-all duration-300 ease-out ${
        active
          ? 'bg-ink border-ink text-white'
          : 'bg-surface/80 border-line text-muted hover:border-accent hover:text-accent'
      }`}
    >
      {children}
    </Link>
  )
}

export default FilterChip
