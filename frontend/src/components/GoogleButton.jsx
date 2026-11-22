import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../hooks/useAuth.js'
import { getGoogleIdToken } from '../services/googleAuthService.js'


function GoogleButton({ label = 'Continue with Google', disabled = false, onError }) {
  const { loginWithGoogle } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (loading) return
    onError?.('')
    setLoading(true)

    const google = await getGoogleIdToken()
    if (!google.ok) {
      setLoading(false)
      if (!google.cancelled) onError?.(google.message)
      return
    }

    const { ok, message } = await loginWithGoogle(google.idToken)
    if (!ok) {
      setLoading(false)
      onError?.(message || 'Google sign-in failed. Please try again.')
    }
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      disabled={disabled || loading}
      className='w-[100%] h-14 bg-surface border border-line rounded text-ink font-semibold text-body-md flex items-center justify-center gap-[10px] hover:bg-surface-low hover:border-accent enabled:hover:-translate-y-0.5 enabled:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300 ease-out cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
    >
      <FcGoogle className='text-[22px]' />
      {loading ? 'Connecting to Google...' : label}
    </button>
  )
}

export default GoogleButton
