const baseClass =
  'w-full h-14 px-5 rounded border border-line bg-surface text-ink text-body-md placeholder:text-outline hover:border-outline focus:outline-none focus:border-accent transition-colors'

// The one text box style used by every form. Optional: a label above it, an icon inside on the left,
// and a "trailing" element inside on the right (for example the show/hide password button).
function TextInput({ label, icon: Icon, trailing, className = '', ...props }) {
  const input = (
    <input
      className={`${baseClass} ${Icon ? 'pl-12' : ''} ${trailing ? 'pr-14' : ''} ${className}`}
      {...props}
    />
  )

  if (!label && !Icon && !trailing) return input

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
    </label>
  )
}

export default TextInput
