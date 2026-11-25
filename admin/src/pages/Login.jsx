import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo.jsx'
import Button from '../components/Button.jsx'
import PageLoader from '../components/PageLoader.jsx'
import TextInput from '../components/TextInput.jsx'
import { LOGIN } from '../config/adminContent.js'
import { useAuth } from '../hooks/useAuth.js'

function Login() {
  const { isAuthenticated, isLoading, login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isLoading) return <PageLoader />
  if (isAuthenticated) return <Navigate to='/' replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email.trim() || !form.password) {
      setError('Enter your email and password.')
      return
    }
    setError('')
    setSubmitting(true)
    const { ok, message } = await login({ email: form.email.trim(), password: form.password })
    if (!ok) setError(message || 'Sign in failed. Please try again.')
    setSubmitting(false)
  }

  const field = (name) => ({ name, value: form[name], onChange: (e) => setForm((current) => ({ ...current, [name]: e.target.value })) })

  return (
    <main className='min-h-screen flex items-center justify-center px-6 py-10'>
      <form onSubmit={handleSubmit} noValidate className='page-enter w-full max-w-sm bg-surface border border-line rounded-lg p-8 shadow-xs flex flex-col gap-5'>
        <div className='flex items-center gap-3'>
          <BrandLogo />
          <span className='text-[11px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm bg-accent-soft text-accent border border-accent-line font-bold'>Admin</span>
        </div>
        <div>
          <h1 className='font-display text-4xl text-ink'>{LOGIN.title}</h1>
          <p className='text-sm text-muted mt-1'>{LOGIN.text}</p>
        </div>
        <TextInput label='Email' type='email' autoComplete='email' {...field('email')} />
        <TextInput label='Password' type='password' autoComplete='current-password' {...field('password')} />
        {error && (
          <p role='alert' className='text-sm text-danger'>
            {error}
          </p>
        )}
        <Button type='submit' disabled={submitting} className='w-full'>
          {submitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </main>
  )
}

export default Login
