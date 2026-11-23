import { MdArrowForward, MdOutlineInfo } from 'react-icons/md'
import { MERCHANT_APPLICATION, MERCHANT_CATEGORIES, MERCHANT_TYPES } from '../../config/merchantsContent.js'
import { useMerchantApplication } from '../../hooks/useMerchantApplication.js'
import CheckboxChips from '../CheckboxChips.jsx'
import Container from '../Container.jsx'
import PrimaryButton from '../PrimaryButton.jsx'
import SectionHeading from '../SectionHeading.jsx'
import TextInput from '../TextInput.jsx'

// The backend has no merchant endpoint yet, so this validates the form and says honestly that nothing is saved.
function MerchantApplication() {
  const { eyebrow, title, text, optionalTitle, optionalText } = MERCHANT_APPLICATION
  const { form, errors, message, field, toggleCategory, handleSubmit } = useMerchantApplication()

  return (
    <section id='apply' className='scroll-mt-24 border-b border-line py-14 lg:py-20'>
      <Container>
        <div className='p-6 sm:p-10 lg:p-14 bg-surface-low border border-line rounded-lg flex flex-col gap-10'>
          <div className='flex flex-col gap-4 max-w-3xl'>
            <SectionHeading eyebrow={eyebrow} title={title} />
            <p className='text-body-lg text-muted font-normal'>{text}</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <TextInput label='Business name' placeholder='Your shop or workshop' maxLength={100} required {...field('business')} />
            <TextInput label='Your name' placeholder='Full name' autoComplete='name' maxLength={100} required {...field('name')} />
            <TextInput label='Email address' type='email' placeholder='name@example.com' autoComplete='email' maxLength={254} required {...field('email')} />
            <TextInput label='Phone number' type='tel' placeholder='+880 1X XXXX XXXX' autoComplete='tel' maxLength={30} required {...field('phone')} />

            <div className='md:col-span-2'>
              <CheckboxChips
                legend='What do you sell? Choose all that apply'
                options={MERCHANT_CATEGORIES}
                selected={form.categories}
                onToggle={toggleCategory}
                error={errors.categories}
              />
            </div>
            {form.categories.includes('other') && (
              <div className='md:col-span-2'>
                <TextInput
                  label='Which other items do you sell?'
                  placeholder='For example chains, rings or bags'
                  maxLength={200}
                  required
                  {...field('otherItems')}
                />
              </div>
            )}

            <div className='md:col-span-2 pt-4 border-t border-line flex flex-col gap-1'>
              <h3 className='font-display text-headline-sm text-ink'>{optionalTitle}</h3>
              <p className='text-body-md text-muted'>{optionalText}</p>
            </div>

            <TextInput as='select' label='Type of business (optional)' {...field('type')}>
              <option value=''>Select a type</option>
              {MERCHANT_TYPES.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </TextInput>
            <TextInput label='Number of shops or branches (optional)' inputMode='numeric' placeholder='For example 1' maxLength={4} {...field('branches')} />
            <TextInput label='City or area (optional)' placeholder='Where you are based' autoComplete='address-level2' maxLength={100} {...field('city')} />
            <TextInput label='Years in business (optional)' inputMode='numeric' placeholder='For example 5' maxLength={3} {...field('years')} />
            <TextInput label='Business address (optional)' placeholder='Street and area' autoComplete='street-address' maxLength={200} {...field('address')} />
            <TextInput label='Trade licence or registration number (optional)' placeholder='Your licence number' maxLength={40} {...field('licence')} />
            <div className='md:col-span-2'>
              <TextInput label='Website or Instagram (optional)' placeholder='Link or @handle' maxLength={200} {...field('link')} />
            </div>
            <div className='md:col-span-2'>
              <TextInput as='textarea' label='Tell us about your products (optional)' placeholder='What you make or sell, your materials and what makes your pieces special' maxLength={1000} {...field('about')} />
            </div>

            <div className='md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2'>
              <div className='sm:w-72'>
                <PrimaryButton>
                  <span className='inline-flex items-center gap-2'>
                    Submit application
                    <MdArrowForward className='text-[18px]' aria-hidden='true' />
                  </span>
                </PrimaryButton>
              </div>
              {message && (
                <p className='flex items-start gap-2 text-body-sm text-muted max-w-xl' role='status'>
                  <MdOutlineInfo className='text-[18px] shrink-0 mt-0.5 text-accent' aria-hidden='true' />
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default MerchantApplication
