import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-accent text-white hover:bg-accent-strong shadow-md hover:shadow-lg',
  outline: 'border border-ink/25 text-ink hover:border-accent hover:text-accent',
  secondary: 'bg-surface-high text-ink hover:bg-surface-mid hover:text-accent shadow-sm hover:shadow-md',
}

const SIZES = {
  md: 'px-8 py-4',
  sm: 'px-5 py-2.5',
}

// The one link-that-looks-like-a-button style. Use it for every call to action.
function ButtonLink({ to, variant = 'primary', size = 'md', icon: Icon, className = '', children }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-3 rounded text-label-lg uppercase font-semibold hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300 ease-out ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      <span>{children}</span>
      {Icon && <Icon className='text-[18px] group-hover:translate-x-1 transition-transform duration-300 ease-out' aria-hidden='true' />}
    </Link>
  )
}

export default ButtonLink
