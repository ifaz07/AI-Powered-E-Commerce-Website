import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  MdLockOutline,
  MdOutlineAlternateEmail,
  MdPersonOutline,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md'
import AuthDivider from '../components/AuthDivider.jsx'
import AuthHeading from '../components/AuthHeading.jsx'
import GoogleButton from '../components/GoogleButton.jsx'
import PageLoader from '../components/PageLoader.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import TextInput from '../components/TextInput.jsx'
import { useAuth } from '../hooks/useAuth.js'

const MIN_PASSWORD_LENGTH = 8

function Registration() {
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
    <div className='flex flex-col gap-8'>
      <AuthHeading title='Create your account' subtitle='Join OneCart and place your first order' />
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
        <TextInput
          label='Full name'
          icon={MdPersonOutline}
          type='text'
          name='name'
          autoComplete='name'
          placeholder='Your name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label='Email address'
          icon={MdOutlineAlternateEmail}
          type='email'
          name='email'
          autoComplete='email'
          placeholder='name@example.com'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label='Password'
          icon={MdLockOutline}
          type={showPassword ? 'text' : 'password'}
          name='password'
          autoComplete='new-password'
          placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
          required
          minLength={MIN_PASSWORD_LENGTH}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          trailing={
            <button
              type='button'
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className='text-[20px] text-outline hover:text-ink cursor-pointer'
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          }
        />

        {error && (
          <p className='text-danger text-body-sm' role='alert'>
            {error}
          </p>
        )}

        <PrimaryButton disabled={submitting}>{submitting ? 'Creating account...' : 'Create Account'}</PrimaryButton>

        <AuthDivider />

        <GoogleButton label='Sign up with Google' disabled={submitting} onError={setError} />
      </form>
    </div>
  )
}

export default Registration
