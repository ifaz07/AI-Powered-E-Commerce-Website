import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import Logo from '../assets/Logo.png'
import GoogleButton from '../components/GoogleButton.jsx'
import PageLoader from '../components/PageLoader.jsx'
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
    <div className='w-[100%] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
      <button
        type='button'
        className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'
        onClick={() => navigate('/')}
      >
        <img className='w-[40px]' src={Logo} alt='' />
        <span className='text-[22px] font-sans'>OneCart</span>
      </button>

      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px] px-[20px] text-center'>
        <h1 className='text-[25px] font-semibold'>Login Page</h1>
        <p className='text-[16px]'>Welcome back to OneCart, Place your order</p>
      </div>

      <div className='max-w-[600px] w-[90%] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center py-[30px]'>
        <form onSubmit={handleSubmit} className='w-[90%] flex flex-col items-center justify-start gap-[20px]'>
          <input
            type='email'
            name='email'
            autoComplete='email'
            aria-label='Email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold focus:outline-none focus:border-[#6060f5]'
          />
          <div className='w-[100%] relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              autoComplete='current-password'
              aria-label='Password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] pr-[50px] font-semibold focus:outline-none focus:border-[#6060f5]'
            />
            <button
              type='button'
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className='absolute right-[15px] top-[50%] -translate-y-[50%] text-[20px] cursor-pointer'
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>

          {error && (
            <p className='w-[100%] text-[#ff7b7b] text-[14px]' role='alert'>
              {error}
            </p>
          )}

          <button
            type='submit'
            disabled={submitting}
            className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg font-semibold text-[17px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {submitting ? 'Logging in...' : 'Login'}
          </button>

          <div className='w-[100%] flex items-center gap-[10px] text-[14px] text-[#ffffffa0]' aria-hidden='true'>
            <span className='flex-1 h-[1px] bg-[#96969635]' />
            or
            <span className='flex-1 h-[1px] bg-[#96969635]' />
          </div>

          <GoogleButton label='Login with Google' disabled={submitting} onError={setError} />

          <p className='text-[15px]'>
            Don&apos;t have an account?{' '}
            <button
              type='button'
              className='text-[#5555f6cf] font-semibold cursor-pointer'
              onClick={() => navigate('/registration')}
            >
              Create New Account
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
