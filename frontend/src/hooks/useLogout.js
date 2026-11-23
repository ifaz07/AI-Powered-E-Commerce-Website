import { useCallback, useState } from 'react'
import { useAuth } from './useAuth.js'

export function useLogout() {
  const { logout } = useAuth()
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = useCallback(async () => {
    if (loggingOut) return
    setLoggingOut(true)
    await logout()
    setLoggingOut(false)
  }, [logout, loggingOut])

  return { loggingOut, handleLogout }
}
