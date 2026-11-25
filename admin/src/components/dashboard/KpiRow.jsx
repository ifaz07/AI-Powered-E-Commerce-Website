import { KPI_CARDS } from '../../config/adminContent.js'
import { formatPrice } from '../../config/currency.js'

const values = {
  revenue: ({ revenue }) => formatPrice(revenue),
  orders: ({ activeOrders }) => activeOrders.toLocaleString('en-BD'),
  merchants: ({ merchants }) => merchants.total.toLocaleString('en-BD'),
  customers: ({ customers }) => customers.toLocaleString('en-BD'),
  applications: ({ pendingApplications }) => pendingApplications.toLocaleString('en-BD'),
}

const notes = {
  merchants: ({ merchants }) => `${merchants.approved} approved • ${merchants.pending} pending • ${merchants.suspended} suspended`,
}

// The five headline numbers. Each card reads a value (and an optional note) from the stats.
function KpiRow({ stats }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
      {KPI_CARDS.map(({ id, label, icon: Icon, alert }) => (
        <div key={id} className='bg-surface border border-line rounded-lg p-6 shadow-xs flex flex-col gap-4 hover:border-line-strong transition-colors'>
          <div className='flex items-center justify-between text-outline'>
            <span className='text-xs font-semibold uppercase tracking-wider'>{label}</span>
            <Icon className={`text-[24px] ${alert ? 'text-terracotta' : 'text-accent'}`} aria-hidden='true' />
          </div>
          <div>
            <div className='font-display text-3xl lg:text-4xl text-ink font-medium leading-none'>{values[id](stats)}</div>
            {notes[id] && <div className='text-xs text-muted mt-2.5 leading-relaxed'>{notes[id](stats)}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default KpiRow
