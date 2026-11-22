import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import AuthLayout from '../components/AuthLayout.jsx'
import GoogleButton from '../components/GoogleButton.jsx'
import PageLoader from '../components/PageLoader.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import TextInput from '../components/TextInput.jsx'
import { useAuth } from '../hooks/useAuth.js'

function Login() {
  const navigate = useNavigate()
  const { login, isAuthenticated, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  if (isLoading) return <PageLoader />
  if (isAuthenticated) return <Navigate to='/' replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return
    setError('')
    setSubmitting(true)
    const { ok, message } = await login({ email: email.trim(), password })
    setSubmitting(false)
    // On success the context stores the user and this page redirects to home on its own.
    if (!ok) setError(message || 'Login failed')
  }

  return (
    <AuthLayout title='Welcome back' subtitle='Log in to continue shopping with OneCart'>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[20px]'>
        <TextInput
          type='email'
          name='email'
          autoComplete='email'
          aria-label='Email'
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='relative'>
          <TextInput
            type={showPassword ? 'text' : 'password'}
            name='password'
            autoComplete='current-password'
            aria-label='Password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='pr-[52px]'
          />
          <button
            type='button'
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className='absolute right-[16px] top-[50%] -translate-y-[50%] text-[20px] text-muted hover:text-ink cursor-pointer'
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        </div>

        {error && (
          <p className='text-danger text-body-sm' role='alert'>
            {error}
          </p>
        )}

        <PrimaryButton disabled={submitting}>{submitting ? 'Logging in...' : 'Login'}</PrimaryButton>

        <div className='flex items-center gap-[10px] text-[14px] text-muted' aria-hidden='true'>
          <span className='flex-1 h-[1px] bg-line' />
          or
          <span className='flex-1 h-[1px] bg-line' />
        </div>

        <GoogleButton label='Login with Google' disabled={submitting} onError={setError} />

        <p className='text-[15px] text-center text-muted'>
          Don&apos;t have an account?{' '}
          <button
            type='button'
            className='text-ink font-semibold underline underline-offset-4 cursor-pointer'
            onClick={() => navigate('/registration')}
          >
            Create New Account
          </button>
        </p>
      </form>
    </AuthLayout>
  )
}

export default Login
