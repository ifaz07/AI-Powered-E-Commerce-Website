import { request } from '../config/api.js'

// One function per backend endpoint. Components never build URLs themselves.
const AUTH_BASE = '/api/auth'

export const login = ({ email, password }) =>
  request(`${AUTH_BASE}/login`, { method: 'POST', body: { email, password } })

export const logout = () => request(`${AUTH_BASE}/logout`, { method: 'POST' })

export const getCurrentUser = (signal) => request(`${AUTH_BASE}/me`, { signal })
