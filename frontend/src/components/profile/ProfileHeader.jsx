import { MdOutlineEmail, MdOutlineEventAvailable, MdOutlineVerifiedUser } from 'react-icons/md'
import { PROFILE_STATS, SIGN_IN_METHODS } from '../../config/profileContent.js'

const memberSince = (date) => new Date(date).toLocaleDateString('en', { month: 'long', year: 'numeric' })

function ProfileHeader({ user, counts }) {
  const method = SIGN_IN_METHODS[user.authProvider] ?? SIGN_IN_METHODS.local
  const facts = [
    user.createdAt && { icon: MdOutlineEventAvailable, text: `Member since ${memberSince(user.createdAt)}` },
    { icon: MdOutlineEmail, text: user.email },
  ].filter(Boolean)

  return (
    <header className='flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-6 lg:p-10 bg-surface border border-line rounded-lg shadow-lg shadow-black/5'>
      <div className='flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8 min-w-0'>
        <span
          className='w-24 h-24 lg:w-32 lg:h-32 shrink-0 rounded bg-accent text-white font-display text-display-xl-mobile lg:text-display-xl uppercase flex items-center justify-center shadow-md'
          aria-hidden='true'
        >
          {user.name.charAt(0)}
        </span>
        <div className='flex flex-col gap-3 min-w-0'>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
            <h1 className='font-display text-display-xl-mobile md:text-display-xl text-ink break-words'>{user.name}</h1>
            <span className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-mid text-label-md uppercase text-accent'>
              <MdOutlineVerifiedUser className='text-[16px]' aria-hidden='true' />
              {method.badge}
            </span>
          </div>
          <ul className='flex flex-wrap gap-x-6 gap-y-2 text-body-md text-muted'>
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className='flex items-center gap-2 min-w-0'>
                <Icon className='text-[18px] shrink-0 text-accent' aria-hidden='true' />
                <span className='break-all'>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dl className='grid grid-cols-3 gap-4 sm:gap-8 lg:gap-10 p-4 sm:p-5 lg:p-6 rounded bg-surface-low shrink-0'>
        {PROFILE_STATS.map(({ id, label, caption, tone }) => (
          <div key={id} className='flex flex-col gap-1 min-w-0'>
            <dt className='text-label-md uppercase text-outline'>{label}</dt>
            <dd className={`font-display text-headline-lg ${tone}`}>{String(counts[id]).padStart(2, '0')}</dd>
            <p className='text-body-sm text-muted'>{caption}</p>
          </div>
        ))}
      </dl>
    </header>
  )
}

export default ProfileHeader
