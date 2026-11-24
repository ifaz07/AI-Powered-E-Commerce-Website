import { MdOutlineBookmarkBorder, MdOutlineDeleteOutline } from 'react-icons/md'
import { cartRowGrid } from '../../config/ui.js'
import { formatPrice } from '../../config/currency.js'
import { useCart } from '../../hooks/useCart.js'
import ItemImage from './ItemImage.jsx'
import QuantityStepper from './QuantityStepper.jsx'

const actionClass = 'inline-flex items-center gap-1.5 text-label-md uppercase transition-colors cursor-pointer'

function CartItemRow({ item }) {
  const { setQuantity, saveForLater, removeItem } = useCart()
  const { id, name, description, image, size, price, quantity } = item

  return (
    <li className='bg-surface border border-line rounded-lg overflow-hidden hover:border-accent/40 transition-colors duration-300'>
      <div className={`grid grid-cols-1 ${cartRowGrid} gap-4 lg:gap-6 items-center p-4 lg:p-6`}>
        <ItemImage src={image} name={name} className='w-28 h-32' />

        <div className='flex flex-col gap-1 min-w-0'>
          <h2 className='font-display text-headline-sm text-ink truncate'>{name}</h2>
          {size && <span className='text-label-md uppercase text-outline'>Size {size}</span>}
          {description && <p className='text-body-sm text-muted line-clamp-2'>{description}</p>}
        </div>

        <QuantityStepper value={quantity} name={name} onChange={(next) => setQuantity(id, next)} />

        <div className='flex flex-col sm:items-end'>
          <span className='font-display text-headline-sm text-ink'>{formatPrice(price * quantity)}</span>
          {quantity > 1 && <span className='text-body-sm text-muted'>{formatPrice(price)} each</span>}
        </div>
      </div>

      <div className='flex items-center justify-between gap-4 px-4 lg:px-6 py-3 bg-surface-low border-t border-line'>
        <button type='button' onClick={() => saveForLater(id)} className={`${actionClass} text-muted hover:text-accent`}>
          <MdOutlineBookmarkBorder className='text-[16px]' aria-hidden='true' />
          Save for later
        </button>
        <button type='button' onClick={() => removeItem(id)} className={`${actionClass} text-terracotta hover:text-danger`}>
          <MdOutlineDeleteOutline className='text-[16px]' aria-hidden='true' />
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItemRow
