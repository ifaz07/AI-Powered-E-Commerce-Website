import { MdOutlineEditNote, MdOutlineInfo } from 'react-icons/md'
import { MEASUREMENT_GROUPS, MEASUREMENT_TIP } from '../../config/profileContent.js'
import { useMeasurementsForm } from '../../hooks/useMeasurementsForm.js'
import FormStatus from '../FormStatus.jsx'
import PrimaryButton from '../PrimaryButton.jsx'
import SectionHeading from '../SectionHeading.jsx'
import TextInput from '../TextInput.jsx'
import MeasurementField from './MeasurementField.jsx'

const cardClass = 'flex flex-col gap-6 p-6 lg:p-8 bg-surface border border-line rounded-lg shadow-sm shadow-black/5'

// The backend has no measurements endpoint yet, so this validates the form and says honestly that nothing is saved.
function MeasurementsTab({ user }) {
  const { message, field, handleSubmit } = useMeasurementsForm()

  return (
    <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-8'>
      <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-5'>
        <SectionHeading eyebrow='Tailoring' title={`${user.name}'s measurement card`} />
        <div className='sm:w-56 shrink-0'>
          <PrimaryButton>Save measurements</PrimaryButton>
        </div>
      </div>
      <FormStatus message={message} />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start'>
        {MEASUREMENT_GROUPS.map(({ title, fields }) => (
          <section key={title} className={cardClass}>
            <div className='flex items-baseline justify-between gap-4'>
              <h2 className='font-display text-headline-md text-ink'>{title}</h2>
              <span className='text-label-md uppercase text-outline'>Inches</span>
            </div>
            <div className='flex flex-col gap-5'>
              {fields.map(({ name, label, hint }) => (
                <MeasurementField key={name} label={label} hint={hint} {...field(name)} />
              ))}
            </div>
          </section>
        ))}

        <section className={cardClass}>
          <div className='flex items-baseline justify-between gap-4'>
            <h2 className='font-display text-headline-md text-ink'>Fit notes</h2>
            <MdOutlineEditNote className='text-[24px] text-outline' aria-hidden='true' />
          </div>
          <TextInput
            as='textarea'
            label='Anything a tailor should know (optional)'
            placeholder='For example: preferred fit, shoulder or posture notes'
            maxLength={500}
            {...field('notes')}
          />
          <p className='flex items-start gap-2 p-4 rounded bg-surface-mid text-body-sm text-muted'>
            <MdOutlineInfo className='text-[18px] shrink-0 mt-0.5 text-accent' aria-hidden='true' />
            {MEASUREMENT_TIP}
          </p>
        </section>
      </div>
    </form>
  )
}

export default MeasurementsTab
