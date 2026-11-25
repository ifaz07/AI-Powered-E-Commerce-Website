import { labelClass } from '../config/ui.js'

const baseClass =
  'px-3 rounded-md border bg-inset text-ink text-sm placeholder:text-outline/70 focus:outline-none focus:border-accent transition-colors'

// The one field style for the console. Pass as='select' or as='textarea' for those. A label and an error are optional.
// "inline" sizes the field to its content instead of the full width (for filter dropdowns).
function TextInput({ as: Field = 'input', label, error, inline = false, className = '', ...props }) {
  const field = (
    <Field
      aria-invalid={error ? true : undefined}
      className={`${baseClass} ${inline ? 'w-auto min-w-0 flex-1 sm:flex-none' : 'w-full'} ${Field === 'textarea' ? 'py-3 resize-none' : 'h-11'} ${error ? 'border-danger' : 'border-line'} ${className}`}
      {...props}
    />
  )

  if (!label && !error) return field

  return (
    <label className='flex flex-col gap-1.5'>
      {label && <span className={labelClass}>{label}</span>}
      {field}
      {error && (
        <span role='alert' className='text-sm text-danger'>
          {error}
        </span>
      )}
    </label>
  )
}

export default TextInput
