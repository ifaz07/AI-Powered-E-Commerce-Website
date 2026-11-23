import { MdCheckCircleOutline } from 'react-icons/md'
import { MERCHANTS_ASIDE } from '../../config/merchantsContent.js'

function MerchantStandards() {
  const { title, items } = MERCHANTS_ASIDE

  return (
    <div className='p-6 lg:p-8 bg-surface border border-line rounded-lg shadow-lg shadow-black/5 flex flex-col gap-5'>
      <h2 className='font-display text-headline-md text-ink'>{title}</h2>
      <ul className='flex flex-col gap-4'>
        {items.map((item) => (
          <li key={item} className='flex items-start gap-3 text-body-md text-muted'>
            <MdCheckCircleOutline className='text-[20px] shrink-0 mt-0.5 text-accent' aria-hidden='true' />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MerchantStandards
