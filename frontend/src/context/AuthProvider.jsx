import { useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext.js'
import * as authService from '../services/authService.js'

/**
 * Holds who is logged in for the whole app.
 * - On first load it asks the backend "who am I?" so a page refresh keeps you logged in.
 * - login / register / logout return { ok, message } so pages can show errors.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true) // true until the first session check finishes

  useEffect(() => {
    const controller = new AbortController()

    authService.getCurrentUser(controller.signal).then(({ ok, aborted, data }) => {
      if (aborted) return // component unmounted (or React StrictMode re-ran the effect)
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

  const register = useCallback(async (details) => {
    const { ok, data } = await authService.register(details)
    if (ok) setUser(data.user)
    return { ok, message: data.message }
  }, [])

  // Takes the Firebase ID token from googleAuthService. Kept separate so this context never
  // imports Firebase and the rest of the app does not pay for its size.
  const loginWithGoogle = useCallback(async (idToken) => {
    const { ok, data } = await authService.googleLogin(idToken)
    if (ok) setUser(data.user)
    return { ok, message: data.message }
  }, [])

  const logout = useCallback(async () => {
    const { ok, data } = await authService.logout()
    // Only forget the user once the server cleared the cookie, otherwise a refresh would log them back in.
    if (ok) setUser(null)
    return { ok, message: data.message }
  }, [])

  // Stable value so components only re-render when something actually changed.
  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), isLoading, login, register, loginWithGoogle, logout }),
    [user, isLoading, login, register, loginWithGoogle, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
