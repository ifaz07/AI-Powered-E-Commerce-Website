const baseClass =
  'w-full px-5 rounded border bg-surface text-ink text-body-md placeholder:text-outline focus:outline-none focus:border-accent transition-colors'

// The one text box style used by every form. Pass as='select' or as='textarea' for those fields. Optional: a label above it,
// an icon inside on the left, a "trailing" element inside on the right (for example the show/hide password button),
// and an error message shown below in red.
function TextInput({ as: Field = 'input', label, icon: Icon, trailing, error, className = '', ...props }) {
  const input = (
    <Field
      aria-invalid={error ? true : undefined}
      className={`${baseClass} ${Field === 'textarea' ? 'min-h-32 py-4 resize-none' : 'h-14'} ${
        error ? 'border-danger' : 'border-line hover:border-outline'
      } ${Icon ? 'pl-12' : ''} ${trailing ? 'pr-14' : ''} ${className}`}
      {...props}
    />
  )

  if (!label && !Icon && !trailing && !error) return input

  return (
    <label className='flex flex-col gap-2'>
      {label && <span className='text-label-lg uppercase text-muted'>{label}</span>}
      <span className='relative block'>
        {Icon && (
          <Icon
            className='absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-outline pointer-events-none'
            aria-hidden='true'
          />
        )}
        {input}
        {trailing && <span className='absolute right-4 top-1/2 -translate-y-1/2 flex'>{trailing}</span>}
      </span>
      {error && (
        <span role='alert' className='text-body-sm text-danger'>
          {error}
        </span>
      )}
    </label>
  )
}

export default TextInput
