import { MdOutlineLock } from 'react-icons/md'
import { SIGN_IN_METHODS } from '../../config/profileContent.js'
import { MIN_PASSWORD_LENGTH } from '../../config/validation.js'
import { useLogout } from '../../hooks/useLogout.js'
import { usePasswordForm } from '../../hooks/usePasswordForm.js'
import FormStatus from '../FormStatus.jsx'
import PasswordInput from '../PasswordInput.jsx'
import PrimaryButton from '../PrimaryButton.jsx'
import ProfileCard from './ProfileCard.jsx'

// Only email and password accounts have a password. The backend has no password-change endpoint yet,
// so the form validates and says honestly that nothing is saved.
function PasswordForm() {
  const { message, field, handleSubmit } = usePasswordForm()

  return (
    <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-5'>
      <PasswordInput label='Current password' autoComplete='current-password' required {...field('current')} />
      <PasswordInput label='New password' autoComplete='new-password' placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`} required {...field('next')} />
      <PasswordInput label='Confirm new password' autoComplete='new-password' placeholder='Type the new password again' required {...field('confirm')} />
      <PrimaryButton>Update password</PrimaryButton>
      <FormStatus message={message} />
    </form>
  )
}

function SecurityCard({ user, className }) {
  const { loggingOut, handleLogout } = useLogout()
  const method = SIGN_IN_METHODS[user.authProvider] ?? SIGN_IN_METHODS.local

  return (
    <ProfileCard eyebrow='Security' title='Sign-in & password' icon={MdOutlineLock} tinted className={className}>
      {user.authProvider === 'google' ? <p className='text-body-md text-muted'>{method.note}</p> : <PasswordForm />}

      <div className='flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-line text-body-sm text-muted'>
        <span>Signed in with {method.label}</span>
        <button
          type='button'
          onClick={handleLogout}
          disabled={loggingOut}
          className='text-label-md uppercase text-accent hover:text-accent-strong transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
        >
          {loggingOut ? 'Logging out...' : 'Log out'}
        </button>
      </div>
    </ProfileCard>
  )
}

export default SecurityCard
