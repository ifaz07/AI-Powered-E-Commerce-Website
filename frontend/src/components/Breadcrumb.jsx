import { Link } from 'react-router-dom'

// Trail of links like Home / Collections / Men. The last item has no `to` and shows as the current page.
function Breadcrumb({ items }) {
  return (
    <nav aria-label='Breadcrumb' className='flex flex-wrap items-center gap-2 text-label-md uppercase text-outline'>
      {items.map(({ label, to }, index) => (
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
  )
}

export default Breadcrumb
