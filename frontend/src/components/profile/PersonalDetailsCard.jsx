import { MdOutlineBadge } from 'react-icons/md'
import { useProfileForm } from '../../hooks/useProfileForm.js'
import FormStatus from '../FormStatus.jsx'
import PrimaryButton from '../PrimaryButton.jsx'
import SectionCard from '../SectionCard.jsx'
import TextInput from '../TextInput.jsx'

// The backend has no profile-update endpoint yet, so this validates the form and says honestly that nothing is saved.
function PersonalDetailsCard({ user, className }) {
  const { message, field, handleSubmit } = useProfileForm(user)

  return (
    <SectionCard eyebrow='Your details' title='Personal details' icon={MdOutlineBadge} className={className}>
      <form onSubmit={handleSubmit} noValidate className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <TextInput label='Full name' autoComplete='name' maxLength={100} required {...field('name')} />
        <TextInput
          label='Email address'
          type='email'
          name='email'
          value={user.email}
          readOnly
          className='bg-surface-low text-muted'
        />
        <TextInput label='Mobile number (optional)' type='tel' placeholder='+880 1X XXXX XXXX' autoComplete='tel' maxLength={30} {...field('phone')} />
        <TextInput label='City or district (optional)' autoComplete='address-level2' maxLength={100} {...field('city')} />
        <div className='sm:col-span-2'>
          <TextInput label='Delivery address (optional)' placeholder='House, road and area' autoComplete='street-address' maxLength={200} {...field('address')} />
        </div>
        <TextInput label='Postal code (optional)' autoComplete='postal-code' maxLength={10} {...field('postalCode')} />

        <div className='sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2'>
          <FormStatus message={message} />
          <div className='sm:w-56 sm:ml-auto'>
            <PrimaryButton>Save changes</PrimaryButton>
          </div>
        </div>
      </form>
    </SectionCard>
  )
}

export default PersonalDetailsCard
