import { Link } from 'react-router-dom'

const SHAPES = {
  pill: {
    base: 'px-4 py-2 rounded-full',
    idle: 'bg-surface/80 border-line text-muted hover:border-accent hover:text-accent',
  },
  tab: {
    base: 'px-4 py-2.5 rounded inline-flex items-center gap-2',
    idle: 'bg-surface-mid border-surface-mid text-muted hover:bg-surface-high hover:text-ink',
  },
}

// A filter link. shape="pill" is the rounded chip, shape="tab" is the square tab with an optional icon. The active one is dark.
function FilterChip({ to, active = false, shape = 'pill', icon: Icon, children }) {
  const { base, idle } = SHAPES[shape]

  return (
    <Link
      to={to}
      aria-current={active ? 'page' : undefined}
      className={`${base} text-label-lg uppercase whitespace-nowrap border transition-all duration-300 ease-out ${
        active ? 'bg-ink border-ink text-white' : idle
      }`}
    >
      {Icon && <Icon className='text-[18px]' aria-hidden='true' />}
      {children}
    </Link>
  )
}

export default FilterChip
