import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import AuthDivider from '../components/AuthDivider.jsx'
import AuthHeading from '../components/AuthHeading.jsx'
import GoogleButton from '../components/GoogleButton.jsx'
import PageLoader from '../components/PageLoader.jsx'
import PasswordInput from '../components/PasswordInput.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import TextInput from '../components/TextInput.jsx'
import { useAuth } from '../hooks/useAuth.js'

function Login() {
  const { login, isAuthenticated, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <div className='flex flex-col gap-8'>
      <AuthHeading title='Welcome back' subtitle='Enter your details to log in to OneCart' />
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
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
        <PasswordInput
          label='Password'
          name='password'
          autoComplete='current-password'
          placeholder='Your password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className='text-danger text-body-sm' role='alert'>
            {error}
          </p>
        )}

        <PrimaryButton disabled={submitting}>{submitting ? 'Logging in...' : 'Login'}</PrimaryButton>

        <AuthDivider />

        <GoogleButton label='Login with Google' disabled={submitting} onError={setError} />
      </form>
    </div>
  )
}

export default Login
