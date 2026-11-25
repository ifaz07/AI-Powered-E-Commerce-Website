import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const arrowClass = 'p-1.5 rounded-md border border-line hover:bg-hover disabled:opacity-35 disabled:hover:bg-transparent transition-colors cursor-pointer disabled:cursor-not-allowed'

// "Showing 1-6 of 68 merchants" with page buttons. page counts from 0; the parent owns it.
function Pagination({ page, total, pageSize, noun, onPage }) {
  const pages = Math.max(1, Math.ceil(total / pageSize))
  const from = total === 0 ? 0 : page * pageSize + 1
  const to = Math.min(total, (page + 1) * pageSize)

  return (
    <div className='flex items-center justify-between pt-3 border-t border-line text-sm text-muted'>
      <span>
        Showing <strong className='text-ink'>{total === 0 ? 0 : `${from}–${to}`}</strong> of {total} {noun}
      </span>
      <div className='flex items-center gap-1'>
        <button type='button' aria-label='Previous page' disabled={page === 0} onClick={() => onPage(page - 1)} className={arrowClass}>
          <MdChevronLeft className='text-[16px]' aria-hidden='true' />
        </button>
        {Array.from({ length: pages }, (_, index) => (
          <button
            key={index}
            type='button'
            aria-current={index === page ? 'page' : undefined}
            onClick={() => onPage(index)}
            className={`px-2.5 py-1 rounded-md cursor-pointer transition-colors ${index === page ? 'bg-accent text-white font-medium' : 'text-ink hover:bg-hover'}`}
          >
            {index + 1}
          </button>
        ))}
        <button type='button' aria-label='Next page' disabled={page >= pages - 1} onClick={() => onPage(page + 1)} className={arrowClass}>
          <MdChevronRight className='text-[16px]' aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}

export default Pagination
