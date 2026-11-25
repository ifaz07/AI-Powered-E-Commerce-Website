import { useEffect, useRef, useState } from 'react'
import { MdExpandMore, MdLogout } from 'react-icons/md'
import { useAuth } from '../hooks/useAuth.js'
import { useLogout } from '../hooks/useLogout.js'

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

// The signed-in person's chip with a small menu to sign out.
function ProfileMenu() {
  const { user } = useAuth()
  const { loggingOut, handleLogout } = useLogout()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !ref.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  return (
    <div ref={ref} className='relative'>
      <button
        type='button'
        aria-expanded={open}
        aria-haspopup='menu'
        onClick={() => setOpen((value) => !value)}
        className='flex items-center gap-2.5 p-1 pr-2 rounded-md hover:bg-hover transition-colors cursor-pointer'
      >
        <span className='w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold'>{initials(user.name)}</span>
        <span className='hidden xl:flex flex-col text-left leading-tight max-w-44'>
          <span className='text-sm font-semibold text-ink truncate'>{user.name}</span>
          <span className='text-[11px] text-outline truncate'>{user.email}</span>
        </span>
        <MdExpandMore className='text-[16px] text-outline' aria-hidden='true' />
      </button>

      {open && (
        <div role='menu' className='absolute right-0 top-full mt-2 w-44 p-1 bg-surface border border-line rounded-lg shadow-lg shadow-black/5 z-10'>
          <button
            type='button'
            role='menuitem'
            onClick={handleLogout}
            disabled={loggingOut}
            className='w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-ink hover:bg-hover disabled:opacity-60 cursor-pointer'
          >
            <MdLogout className='text-[16px]' aria-hidden='true' />
            {loggingOut ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
