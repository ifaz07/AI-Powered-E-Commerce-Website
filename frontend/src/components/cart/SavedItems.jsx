import { formatPrice } from '../../config/currency.js'
import { useCart } from '../../hooks/useCart.js'
import Container from '../Container.jsx'
import SectionHeading from '../SectionHeading.jsx'
import ItemImage from './ItemImage.jsx'

const actionClass = 'text-label-md uppercase transition-colors cursor-pointer'

function SavedItems() {
  const { saved, moveToBag, removeSaved } = useCart()
  if (saved.length === 0) return null

  return (
    <section className='bg-surface-low border-t border-line py-14 lg:py-20'>
      <Container className='flex flex-col gap-10'>
        <SectionHeading eyebrow='Saved for later' title={`Saved for later (${saved.length})`} />
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10'>
          {saved.map(({ id, name, description, image, price }) => (
            <li key={id} className='flex items-center gap-5 p-5 lg:p-6 bg-surface border border-line rounded-lg'>
              <ItemImage src={image} name={name} className='w-24 h-28 shrink-0' />
              <div className='flex flex-col gap-1 min-w-0 flex-1'>
                <h3 className='font-display text-headline-sm text-ink truncate'>{name}</h3>
                {description && <p className='text-body-sm text-muted line-clamp-2'>{description}</p>}
                <span className='text-body-md text-ink'>{formatPrice(price)}</span>
                <div className='flex flex-wrap items-center gap-x-6 gap-y-2 pt-3'>
                  <button type='button' onClick={() => moveToBag(id)} className={`${actionClass} px-4 py-2 rounded bg-surface-mid text-ink hover:bg-ink hover:text-white`}>
                    Move to bag
                  </button>
                  <button type='button' onClick={() => removeSaved(id)} className={`${actionClass} text-outline hover:text-terracotta`}>
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default SavedItems
