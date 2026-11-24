import { useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { formatPrice } from '../../config/currency.js'
import FormStatus from '../FormStatus.jsx'
import PrimaryButton from '../PrimaryButton.jsx'

// There is no checkout page yet, so the button says so. Shipping and tax are worked out by the server at checkout.
function CartSummary({ itemCount, subtotal }) {
  const [message, setMessage] = useState('')

  return (
    <section className='flex flex-col gap-6 p-6 lg:p-8 bg-surface border border-line rounded-lg shadow-lg shadow-black/5'>
      <div className='flex flex-col gap-2'>
        <span className='text-label-md uppercase text-outline'>Checkout</span>
        <h2 className='font-display text-headline-lg text-ink'>Order summary</h2>
      </div>

      <dl className='flex flex-col gap-4 text-body-md'>
        <div className='flex justify-between gap-4'>
          <dt className='text-muted'>
            Subtotal ({itemCount} {itemCount === 1 ? 'piece' : 'pieces'})
          </dt>
          <dd className='text-ink'>{formatPrice(subtotal)}</dd>
        </div>
        <div className='flex justify-between gap-4'>
          <dt className='text-muted'>Shipping and taxes</dt>
          <dd className='text-ink'>Calculated at checkout</dd>
        </div>
      </dl>

      <div className='flex items-end justify-between gap-4 pt-6 border-t border-line'>
        <div className='flex flex-col'>
          <span className='font-display text-headline-md text-ink'>Total</span>
          <span className='text-label-md uppercase text-outline'>Before shipping and taxes</span>
        </div>
        <span className='font-display text-headline-lg text-ink'>{formatPrice(subtotal)}</span>
      </div>

      <PrimaryButton type='button' onClick={() => setMessage('Checkout is not available yet.')}>
        <span className='inline-flex items-center gap-2'>
          Proceed to checkout
          <MdArrowForward className='text-[18px]' aria-hidden='true' />
        </span>
      </PrimaryButton>
      <FormStatus message={message} />
    </section>
  )
}

export default CartSummary
