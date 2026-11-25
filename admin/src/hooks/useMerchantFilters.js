import { useMemo, useState } from 'react'
import { DIRECTORY } from '../config/adminContent.js'

// Category, status and page for the merchant directory. Changing a filter goes back to the first page.
export function useMerchantFilters(merchants) {
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(0)

  const categories = useMemo(() => [...new Set(merchants.map((merchant) => merchant.category))].sort(), [merchants])

  const matching = useMemo(
    () => merchants.filter((merchant) => (!category || merchant.category === category) && (!status || merchant.status === status)),
    [merchants, category, status],
  )

  const visible = matching.slice(page * DIRECTORY.pageSize, (page + 1) * DIRECTORY.pageSize)

  const withReset = (setter) => (value) => {
    setter(value)
    setPage(0)
  }

  return { category, status, page, categories, visible, total: matching.length, setCategory: withReset(setCategory), setStatus: withReset(setStatus), setPage }
}
