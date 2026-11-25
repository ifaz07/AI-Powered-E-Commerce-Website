import { useId } from 'react'
import { cleanMeasurement } from '../../config/validation.js'

// One row of the measurement card: the name and a short "how to measure" note on the left, a small value box on the right.
function MeasurementField({ label, hint, error, onChange, ...props }) {
  const id = useId()

  return (
    <div className='flex items-start justify-between gap-4'>
      <label htmlFor={id} className='flex flex-col gap-1 cursor-pointer'>
        <span className='text-body-md text-ink'>{label}</span>
        <span className='text-body-sm text-muted'>{hint}</span>
      </label>
      <div className='flex flex-col items-end gap-1 shrink-0'>
        <input
          id={id}
          inputMode='decimal'
          placeholder='0.0'
          maxLength={5}
          onChange={(e) => onChange({ target: { value: cleanMeasurement(e.target.value) } })}
          aria-invalid={error ? true : undefined}
          className={`w-20 h-10 px-3 rounded bg-surface-mid text-right text-body-md text-ink placeholder:text-outline border focus:outline-none focus:border-accent transition-colors ${
            error ? 'border-danger' : 'border-transparent hover:border-line'
          }`}
          {...props}
        />
        {error && (
          <span role='alert' className='text-body-sm text-danger'>
            {error}
          </span>
        )}
      </div>
    </div>
  )
}

export default MeasurementField
