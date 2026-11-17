import { getApp, getApps, initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const REQUIRED_ENV_NAMES = {
  apiKey: 'VITE_FIREBASE_API_KEY',
  authDomain: 'VITE_FIREBASE_AUTH_DOMAIN',
  projectId: 'VITE_FIREBASE_PROJECT_ID',
  appId: 'VITE_FIREBASE_APP_ID',
}

export function getFirebaseAuth() {
  const missing = Object.entries(REQUIRED_ENV_NAMES)
    .filter(([key]) => !firebaseConfig[key])
    .map(([, envName]) => envName)

  if (missing.length > 0) {
    throw new Error(`Missing Firebase settings in frontend/.env: ${missing.join(', ')}`)
  }

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  return getAuth(app)
}

export function createGoogleProvider() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' }) // always let the user pick the account
  return provider
}
