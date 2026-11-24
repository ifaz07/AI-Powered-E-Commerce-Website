import { MdArrowForward, MdOutlineMailOutline } from 'react-icons/md'
import { CALLBACK_WINDOWS, CONTACT_FORM, CONTACT_METHODS, INQUIRY_TYPES } from '../../config/contactContent.js'
import { useContactForm } from '../../hooks/useContactForm.js'
import ChoiceChips from '../ChoiceChips.jsx'
import FormStatus from '../FormStatus.jsx'
import PrimaryButton from '../PrimaryButton.jsx'
import SectionCard from '../SectionCard.jsx'
import TextInput from '../TextInput.jsx'

// The backend has no inquiry endpoint yet, so this validates the form and says honestly that nothing is sent.
// Give it key={user id} so it starts again with the name and email filled in once the login check finishes.
function ContactForm({ user, className }) {
  const { form, message, field, setValue, handleSubmit } = useContactForm(user)
  const { eyebrow, title } = CONTACT_FORM

  return (
    <SectionCard eyebrow={eyebrow} title={title} icon={MdOutlineMailOutline} compact className={className}>
      <form onSubmit={handleSubmit} noValidate className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className='sm:col-span-2'>
          <ChoiceChips
            legend='Nature of inquiry'
            name='type'
            type='radio'
            options={INQUIRY_TYPES}
            selected={[form.type]}
            onToggle={(id) => setValue('type', id)}
          />
        </div>

        <TextInput label='Full name' autoComplete='name' maxLength={100} required {...field('name')} />
        <TextInput label='Email address' type='email' placeholder='name@example.com' autoComplete='email' maxLength={254} required {...field('email')} />
        <TextInput label='Mobile number' type='tel' placeholder='+880 1X XXXX XXXX' autoComplete='tel' maxLength={30} required {...field('phone')} />
        <TextInput label='Order reference (optional)' placeholder='If your question is about an order' maxLength={40} {...field('reference')} />
        <div className='sm:col-span-2'>
          <ChoiceChips
            legend='Preferred way to reach you (optional)'
            name='method'
            type='radio'
            options={CONTACT_METHODS}
            selected={[form.method]}
            onToggle={(id) => setValue('method', id)}
          />
        </div>
        <div className='sm:col-span-2'>
          <TextInput as='select' label='Best time to call back (optional)' {...field('callback')}>
            <option value=''>Any time</option>
            {CALLBACK_WINDOWS.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </TextInput>
        </div>
        <div className='sm:col-span-2'>
          <TextInput as='textarea' label='Your message' placeholder='Tell us how we can help' maxLength={1000} required {...field('message')} />
        </div>

        <div className='sm:col-span-2 flex flex-col gap-4'>
          <PrimaryButton>
            <span className='inline-flex items-center gap-2'>
              Send inquiry
              <MdArrowForward className='text-[18px]' aria-hidden='true' />
            </span>
          </PrimaryButton>
          <FormStatus message={message} />
        </div>
      </form>
    </SectionCard>
  )
}

export default ContactForm
