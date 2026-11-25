import { MdVisibility } from 'react-icons/md'
import { MERCHANT_STATUSES } from '../../config/adminContent.js'
import { formatPrice } from '../../config/currency.js'
import Badge from '../Badge.jsx'

// One merchant in the directory. Only merchants with an open application can be opened in the review panel for now.
function MerchantRow({ merchant, reviewing, onReview }) {
  const { name, location, category, products, revenue, live, status, applicationId } = merchant
  const { label, tone } = MERCHANT_STATUSES[status]
  const quiet = revenue === 0 ? 'text-outline' : 'text-ink'

  return (
    <tr className={`transition-colors ${reviewing ? 'bg-accent-soft/60 border-l-2 border-l-accent' : 'hover:bg-inset'}`}>
      <td className='py-3.5 pr-4 pl-2'>
        <div className='font-medium text-ink text-[15px]'>{name}</div>
        <div className='text-xs text-outline'>{location}</div>
      </td>
      <td className='py-3.5 px-3 text-muted'>{category}</td>
      <td className={`py-3.5 px-3 text-center font-mono ${quiet}`}>{products}</td>
      <td className={`py-3.5 px-3 text-right font-mono ${quiet}`}>{formatPrice(revenue)}</td>
      <td className='py-3.5 px-3 text-center'>
        <span
          role='img'
          aria-label={live ? 'Storefront live' : 'Storefront not live'}
          className={`w-8 h-[18px] rounded-md relative inline-flex items-center px-0.5 ${live ? 'bg-accent' : 'bg-switch-off opacity-60'}`}
        >
          <span className={`w-3.5 h-3.5 bg-white rounded-md transition-transform ${live ? 'translate-x-3.5' : ''}`} />
        </span>
      </td>
      <td className='py-3.5 px-3'>
        <Badge tone={tone}>{label}</Badge>
      </td>
      <td className='py-3.5 pl-3 text-right'>
        {reviewing && <span className='px-2 py-0.5 rounded-md bg-accent text-white text-[11px] font-medium tracking-wide'>Reviewing</span>}
        {!reviewing && applicationId && (
          <button
            type='button'
            aria-label={`Review ${name}`}
            title='Review application'
            onClick={() => onReview(applicationId)}
            className='p-1.5 rounded-md hover:bg-hover text-muted hover:text-ink transition-colors cursor-pointer'
          >
            <MdVisibility className='text-[20px]' aria-hidden='true' />
          </button>
        )}
      </td>
    </tr>
  )
}

export default MerchantRow
