import { request } from '../config/api.js'

// One function per backend endpoint. Components never build URLs themselves.
const AUTH_BASE = '/api/auth'

export const register = ({ name, email, password }) =>
  request(`${AUTH_BASE}/registration`, { method: 'POST', body: { name, email, password } })

export const login = ({ email, password }) =>
  request(`${AUTH_BASE}/login`, { method: 'POST', body: { email, password } })

// idToken is the Firebase token from googleAuthService. The backend verifies it.
export const googleLogin = (idToken) =>
  request(`${AUTH_BASE}/google`, { method: 'POST', body: { idToken } })

export const logout = () => request(`${AUTH_BASE}/logout`, { method: 'POST' })

export const getCurrentUser = (signal) => request(`${AUTH_BASE}/me`, { signal })
