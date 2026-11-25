import { useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext.js'
import * as authService from '../services/authService.js'

// Holds who is signed in. On first load it asks the backend "who am I?" so a refresh keeps the session.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    authService.getCurrentUser(controller.signal).then(({ ok, aborted, data }) => {
      if (aborted) return
      setUser(ok ? data.user : null)
      setIsLoading(false)
    })

    return () => controller.abort()
  }, [])

  const login = useCallback(async (credentials) => {
    const { ok, data } = await authService.login(credentials)
    if (ok) setUser(data.user)
    return { ok, message: data.message }
  }, [])

  const logout = useCallback(async () => {
    const { ok, data } = await authService.logout()
    // Only forget the user once the server cleared the cookie, otherwise a refresh would sign them back in.
    if (ok) setUser(null)
    return { ok, message: data.message }
  }, [])

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), isLoading, login, logout }),
    [user, isLoading, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
