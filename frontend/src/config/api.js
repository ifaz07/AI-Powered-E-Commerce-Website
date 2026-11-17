const DEFAULT_TIMEOUT_MS = 10000

// Development falls back to the local backend. In production VITE_API_URL must be set at build time
// (an empty value means "same origin", for example behind a reverse proxy).
const rawBase = import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? 'http://localhost:8000' : '')
export const API_URL = rawBase.replace(/\/+$/, '')

/**
 * The single place that talks to the backend.
 * Never throws: always resolves to { ok, status, data, aborted? }.
 * - Sends the login cookie (credentials: 'include').
 * - Gives up after `timeout` ms so the UI never hangs forever.
 * - Can be cancelled with an AbortSignal (aborted: true in the result).
 */
export async function request(path, { method = 'GET', body, signal, timeout = DEFAULT_TIMEOUT_MS } = {}) {
  const controller = new AbortController()
  let timedOut = false
  const timer = setTimeout(() => {
    timedOut = true
    controller.abort()
  }, timeout)

  const onCallerAbort = () => controller.abort()
  if (signal) {
    if (signal.aborted) controller.abort()
    else signal.addEventListener('abort', onCallerAbort, { once: true })
  }

  try {
    const res = await fetch(`${API_URL}${path}`, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      credentials: 'include',
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    })
    const data = await res.json().catch(() => ({}))
    return { ok: res.ok, status: res.status, data }
  } catch (error) {
    if (error.name === 'AbortError') {
      return {
        ok: false,
        status: 0,
        aborted: !timedOut,
        data: { message: timedOut ? 'The server took too long to respond. Please try again.' : 'Request cancelled.' },
      }
    }
    return {
      ok: false,
      status: 0,
      data: { message: 'Cannot reach the server. Please check your connection and try again.' },
    }
  } finally {
    clearTimeout(timer)
    signal?.removeEventListener('abort', onCallerAbort)
  }
}
