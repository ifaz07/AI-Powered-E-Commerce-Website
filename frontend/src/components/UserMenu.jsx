import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineLogout, MdOutlinePerson } from 'react-icons/md'
import { useAuth } from '../hooks/useAuth.js'
import { useLogout } from '../hooks/useLogout.js'

// Right side of the Nav: Login for visitors, a round avatar with a small menu (name + Logout) once logged in.
function UserMenu() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading } = useAuth()
  const { loggingOut, handleLogout } = useLogout()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  // Close the menu when clicking outside it or pressing Escape.
  useEffect(() => {
    if (!open) return undefined
    const handlePointer = (e) => {
      if (!containerRef.current?.contains(e.target)) setOpen(false)
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const logoutAndClose = async () => {
    await handleLogout()
    setOpen(false)
  }

  // Keep the space empty during the first session check so "Login" does not flash on refresh.
  if (isLoading) return <div className='w-10 h-10' aria-hidden='true' />

  if (!isAuthenticated) {
    return (
      <button
        type='button'
        onClick={() => navigate('/login')}
        aria-label='Login'
        className='h-10 min-w-10 px-3 sm:px-6 rounded bg-accent text-white text-label-lg uppercase font-semibold flex items-center justify-center gap-2 hover:bg-accent-strong transition-colors cursor-pointer'
      >
        <MdOutlinePerson className='text-[20px] sm:hidden' />
        <span className='hidden sm:inline'>Login</span>
      </button>
    )
  }

  return (
    <div ref={containerRef} className='relative'>
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-label='Account menu'
        aria-haspopup='menu'
        aria-expanded={open}
        className='w-10 h-10 rounded-full bg-accent text-white font-semibold uppercase flex items-center justify-center cursor-pointer'
      >
        {user?.name?.charAt(0)}
      </button>

      {open && (
        <div
          role='menu'
          className='absolute right-0 top-12 w-[220px] p-2 rounded-lg bg-surface border border-line shadow-xl shadow-black/10'
        >
          <p className='px-3 py-2 text-body-sm text-muted truncate' title={user?.name}>
            {user?.name}
          </p>
          <Link
            to='/profile'
            role='menuitem'
            onClick={() => setOpen(false)}
            className='w-full px-3 py-2.5 rounded text-left text-body-md text-ink flex items-center gap-[10px] hover:bg-surface-low'
          >
            <MdOutlinePerson className='text-[20px]' />
            My profile
          </Link>
          <button
            type='button'
            role='menuitem'
            onClick={logoutAndClose}
            disabled={loggingOut}
            className='w-full px-3 py-2.5 rounded text-left text-body-md text-ink flex items-center gap-[10px] hover:bg-surface-low disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer'
          >
            <MdOutlineLogout className='text-[20px]' />
            {loggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      )}
    </div>
  )
}

export default UserMenu
