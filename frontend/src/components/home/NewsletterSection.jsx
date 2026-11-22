import { useState } from 'react'
import { MdArrowForward, MdOutlineMarkEmailRead } from 'react-icons/md'
import Container from '../Container.jsx'

// The backend has no newsletter endpoint yet, so this only validates the email and says so honestly.
function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setMessage('Newsletter sign-up is coming soon. Thank you for your interest.')
    setEmail('')
  }

  return (
    <Container as='section' className='py-20'>
      <div className='relative w-full rounded-xl bg-surface p-10 md:p-16 lg:p-20 overflow-hidden shadow-2xl'>
        <div className='absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none' aria-hidden='true' />
        <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none' aria-hidden='true' />

        <div className='relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6'>
          <span className='w-14 h-14 rounded-full bg-surface-high flex items-center justify-center text-accent shadow-sm'>
            <MdOutlineMarkEmailRead className='text-[28px]' aria-hidden='true' />
          </span>
          <span className='text-label-md uppercase text-accent font-semibold tracking-[0.25em]'>The OneCart letter</span>
          <h2 className='font-display text-display-xl-mobile md:text-display-xl text-ink'>
            Be first to see what&apos;s new
          </h2>
          <p className='text-body-lg text-muted max-w-xl'>
            Get early looks at new arrivals and styling notes straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className='w-full max-w-md flex flex-col sm:flex-row items-center gap-3 mt-4'>
            <input
              type='email'
              required
              aria-label='Email address'
              placeholder='Enter your email address'
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-14 px-5 rounded bg-surface-mid text-ink text-body-sm placeholder:text-outline outline-none focus:bg-surface-high transition-colors'
            />
            <button
              type='submit'
              className='w-full sm:w-auto h-14 px-8 rounded bg-accent text-white text-label-lg uppercase font-semibold whitespace-nowrap hover:bg-accent-strong transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer'
            >
              Join OneCart
              <MdArrowForward className='text-[18px]' aria-hidden='true' />
            </button>
          </form>

          {message && (
            <p className='text-accent text-label-md uppercase' role='status'>
              {message}
            </p>
          )}
        </div>
      </div>
    </Container>
  )
}

export default NewsletterSection
