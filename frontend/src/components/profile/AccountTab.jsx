import PersonalDetailsCard from './PersonalDetailsCard.jsx'
import SecurityCard from './SecurityCard.jsx'

function AccountTab({ user }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start'>
      <PersonalDetailsCard user={user} className='lg:col-span-7' />
      <SecurityCard user={user} className='lg:col-span-5' />
    </div>
  )
}

export default AccountTab
