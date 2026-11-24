import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import CartItemRow from '../components/cart/CartItemRow.jsx'
import CartSummary from '../components/cart/CartSummary.jsx'
import SavedItems from '../components/cart/SavedItems.jsx'
import Container from '../components/Container.jsx'
import CtaCard from '../components/CtaCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { collectionsPath } from '../config/categories.js'
import { cartRowGrid } from '../config/ui.js'
import { useCart } from '../hooks/useCart.js'

const headingClass = 'text-label-md uppercase text-outline'

function Cart() {
  const { items, itemCount, subtotal } = useCart()

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Shopping bag' }]}
        title='Your bag'
        subtitle={itemCount === 0 ? 'Pieces you add will wait here until you are ready.' : `${itemCount} ${itemCount === 1 ? 'piece' : 'pieces'} in your bag. Check them over before you check out.`}
      />

      {items.length === 0 ? (
        <Container className='py-14 lg:py-20'>
          <EmptyState
            title='Your bag is empty'
            text='Browse the collections and add the pieces you like.'
            action={{ label: 'Browse collections', to: collectionsPath() }}
          />
        </Container>
      ) : (
        <Container className='py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
          <div className='lg:col-span-8 flex flex-col gap-6'>
            <div className={`hidden sm:grid ${cartRowGrid} gap-6 px-6 ${headingClass}`} aria-hidden='true'>
              <span className='col-span-2'>Item</span>
              <span>Quantity</span>
              <span className='text-right'>Subtotal</span>
            </div>
            <ul className='flex flex-col gap-6'>
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </ul>
            <Link
              to={collectionsPath()}
              className='group self-start inline-flex items-center gap-2 text-label-lg uppercase text-muted hover:text-ink transition-colors'
            >
              <MdArrowBack className='text-[18px] group-hover:-translate-x-1 transition-transform' aria-hidden='true' />
              Continue exploring collections
            </Link>
          </div>

          <aside className='lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6'>
            <CartSummary itemCount={itemCount} subtotal={subtotal} />
            <CtaCard eyebrow='Need a hand?' title='Questions about your order?' text='Sizing, changes or anything else, get in touch and we will help.' cta='Contact us' to='/contact' />
          </aside>
        </Container>
      )}

      <SavedItems />
    </>
  )
}

export default Cart
