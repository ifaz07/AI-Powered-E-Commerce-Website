import { DIRECTORY, MERCHANT_STATUSES } from '../../config/adminContent.js'
import { labelClass } from '../../config/ui.js'
import { useMerchantFilters } from '../../hooks/useMerchantFilters.js'
import EmptyState from '../EmptyState.jsx'
import Pagination from '../Pagination.jsx'
import Panel from '../Panel.jsx'
import Segmented from '../Segmented.jsx'
import TextInput from '../TextInput.jsx'
import MerchantRow from './MerchantRow.jsx'

const TAB_STATUSES = ['approved', 'pending', 'suspended']

// The merchant table with its filters. The tabs and the status dropdown change the same filter.
function MerchantDirectory({ merchants, counts, reviewingId, onReview, className }) {
  const { category, status, page, categories, visible, total, setCategory, setStatus, setPage } = useMerchantFilters(merchants)

  const tabs = [
    { id: '', label: `All (${counts.total})` },
    ...TAB_STATUSES.map((id) => ({ id, label: `${MERCHANT_STATUSES[id].label} (${counts[id]})` })),
  ]

  const filters = (
    <div className='flex items-center gap-2.5 w-full sm:w-auto'>
      <TextInput as='select' aria-label='Category' inline value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value=''>{DIRECTORY.allCategories}</option>
        {categories.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </TextInput>
      <TextInput as='select' aria-label='Status' inline value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value=''>{DIRECTORY.allStatuses}</option>
        {Object.entries(MERCHANT_STATUSES).map(([id, { label }]) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </TextInput>
    </div>
  )

  return (
    <Panel title={DIRECTORY.title} text={DIRECTORY.text} aside={filters} className={className}>
      <Segmented variant='tabs' label='Merchant status' options={tabs} value={status} onChange={setStatus} />

      {merchants.length === 0 ? (
        <EmptyState {...DIRECTORY.empty} />
      ) : (
        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm border-collapse min-w-[640px]'>
            <thead>
              <tr className={`${labelClass} border-b border-line`}>
                {DIRECTORY.columns.map((column) => (
                  <th key={column} scope='col' className='py-3 px-3 first:pl-2 first:pr-4 last:text-right'>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='divide-y divide-line/70'>
              {visible.map((merchant) => (
                <MerchantRow key={merchant.id} merchant={merchant} reviewing={merchant.applicationId === reviewingId} onReview={onReview} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination page={page} total={total} pageSize={DIRECTORY.pageSize} noun='merchants' onPage={setPage} />
    </Panel>
  )
}

export default MerchantDirectory
