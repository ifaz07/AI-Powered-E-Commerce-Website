import { ORDER_STATUSES, RECENT_ORDERS } from '../../config/adminContent.js'
import { formatPrice } from '../../config/currency.js'
import Badge from '../Badge.jsx'
import EmptyState from '../EmptyState.jsx'
import Panel from '../Panel.jsx'

function OrderCard({ order }) {
  const { id, status, product, customer, area, total, payment } = order
  const { label, tone } = ORDER_STATUSES[status]

  return (
    <li className='p-4 rounded-md bg-inset border border-line flex flex-col justify-between gap-3 hover:border-line-strong transition-colors'>
      <div>
        <div className='flex items-center justify-between mb-2'>
          <span className='font-mono text-sm font-semibold text-accent'>{id}</span>
          <Badge tone={tone}>{label}</Badge>
        </div>
        <div className='font-display text-lg text-ink font-medium leading-snug'>{product}</div>
        <div className='text-sm text-outline mt-1'>
          {customer} • {area}
        </div>
      </div>
      <div className='pt-2.5 border-t border-line flex items-center justify-between text-sm'>
        <span className='font-mono font-semibold text-ink'>{formatPrice(total)}</span>
        <span className='px-2 py-0.5 rounded-sm bg-surface border border-line text-[11px] font-medium text-outline'>{payment}</span>
      </div>
    </li>
  )
}

// The latest orders as cards. The "view all" link comes when there is an orders page.
function RecentOrders({ orders, className }) {
  return (
    <Panel title={RECENT_ORDERS.title} text={RECENT_ORDERS.text} className={className}>
      {orders.length === 0 ? (
        <EmptyState {...RECENT_ORDERS.empty} />
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </ul>
      )}
    </Panel>
  )
}

export default RecentOrders
