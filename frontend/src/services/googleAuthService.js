import { signInWithPopup, signOut } from 'firebase/auth'
import { createGoogleProvider, getFirebaseAuth } from '../config/firebase.js'

// The user closed the popup on purpose, so this is not an error worth showing.
const CANCELLED_CODES = new Set(['auth/popup-closed-by-user', 'auth/cancelled-popup-request'])

const FRIENDLY_MESSAGES = {
  'auth/popup-blocked': 'Your browser blocked the Google window. Allow pop-ups for this site and try again.',
  'auth/network-request-failed': 'Network problem. Please check your connection and try again.',
  'auth/unauthorized-domain': 'Google sign-in is not enabled for this website address yet.',
  'auth/operation-not-allowed': 'Google sign-in is not enabled yet.',
}

const DEFAULT_MESSAGE = 'Google sign-in failed. Please try again.'

/**
 * Opens the Google account picker and returns a Firebase ID token for our backend to verify.
 * Never throws: resolves to { ok: true, idToken } or { ok: false, cancelled?, message }.
 */
export async function getGoogleIdToken() {
  try {
    const auth = getFirebaseAuth()
    const result = await signInWithPopup(auth, createGoogleProvider())
    const idToken = await result.user.getIdToken()

    // Our own cookie session is the source of truth, so drop Firebase's browser session.
    await signOut(auth).catch(() => {})

    return { ok: true, idToken }
  } catch (error) {
    if (CANCELLED_CODES.has(error.code)) {
      return { ok: false, cancelled: true, message: '' }
    }
    // Keep the real reason in the console for debugging. Users only see a friendly message.
    console.error('Google sign-in error:', error.code || error.message)
    return { ok: false, message: FRIENDLY_MESSAGES[error.code] ?? DEFAULT_MESSAGE }
  }
}
