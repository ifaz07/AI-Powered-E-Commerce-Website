import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineSearch } from 'react-icons/md'

// Search box. Press Enter to go to the Collections page with the search word in the address.
function SearchBar({ onDone, autoFocus = false, className = '' }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const term = query.trim()
    if (!term) return
    navigate(`/collections?${new URLSearchParams({ search: term })}`)
    setQuery('')
    onDone?.()
  }

  return (
    <form
      onSubmit={handleSubmit}
      role='search'
      className={`items-center gap-3 px-4 rounded bg-surface-low text-muted focus-within:bg-surface-mid transition-colors ${className}`}
    >
      <MdOutlineSearch className='text-[18px] shrink-0' aria-hidden='true' />
      <input
        type='search'
        aria-label='Search products'
        placeholder='Search catalog...'
        maxLength={100}
        autoFocus={autoFocus}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-full h-10 bg-transparent border-none outline-none text-body-sm text-ink placeholder:text-outline'
      />
    </form>
  )
}

export default SearchBar
