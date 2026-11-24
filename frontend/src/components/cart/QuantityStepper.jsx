import { MdAdd, MdRemove } from 'react-icons/md'

const buttonClass =
  'w-9 h-9 flex items-center justify-center text-muted hover:text-ink hover:bg-surface-high disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer'

function QuantityStepper({ value, min = 1, max = 99, name, onChange }) {
  return (
    <div className='inline-flex items-center rounded bg-surface-mid' role='group' aria-label={`Quantity of ${name}`}>
      <button type='button' className={buttonClass} aria-label={`Decrease quantity of ${name}`} disabled={value <= min} onClick={() => onChange(value - 1)}>
        <MdRemove className='text-[18px]' aria-hidden='true' />
      </button>
      <span className='w-8 text-center text-body-md text-ink' aria-live='polite'>
        {value}
      </span>
      <button type='button' className={buttonClass} aria-label={`Increase quantity of ${name}`} disabled={value >= max} onClick={() => onChange(value + 1)}>
        <MdAdd className='text-[18px]' aria-hidden='true' />
      </button>
    </div>
  )
}

export default QuantityStepper
