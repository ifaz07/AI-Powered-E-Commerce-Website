import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import AuthLayout from '../components/AuthLayout.jsx'
import GoogleButton from '../components/GoogleButton.jsx'
import PageLoader from '../components/PageLoader.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import TextInput from '../components/TextInput.jsx'
import { useAuth } from '../hooks/useAuth.js'

const MIN_PASSWORD_LENGTH = 8

function Registration() {
  const navigate = useNavigate()
  const { register, isAuthenticated, isLoading } = useAuth()
  const [name, setName] = useState('')
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

    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`)
      return
    }

    setSubmitting(true)
    const { ok, message } = await register({ name: name.trim(), email: email.trim(), password })
    setSubmitting(false)
    if (!ok) setError(message || 'Registration failed')
  }

  return (
    <AuthLayout title='Create your account' subtitle='Join OneCart and place your first order'>
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[20px]'>
        <TextInput
          type='text'
          name='name'
          autoComplete='name'
          aria-label='Full name'
          placeholder='Full name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
            autoComplete='new-password'
            aria-label='Password'
            placeholder={`Password (min ${MIN_PASSWORD_LENGTH} characters)`}
            required
            minLength={MIN_PASSWORD_LENGTH}
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

        <PrimaryButton disabled={submitting}>{submitting ? 'Creating account...' : 'Create Account'}</PrimaryButton>

        <div className='flex items-center gap-[10px] text-[14px] text-muted' aria-hidden='true'>
          <span className='flex-1 h-[1px] bg-line' />
          or
          <span className='flex-1 h-[1px] bg-line' />
        </div>

        <GoogleButton label='Sign up with Google' disabled={submitting} onError={setError} />

        <p className='text-[15px] text-center text-muted'>
          Already have an account?{' '}
          <button
            type='button'
            className='text-ink font-semibold underline underline-offset-4 cursor-pointer'
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </p>
      </form>
    </AuthLayout>
  )
}

export default Registration
