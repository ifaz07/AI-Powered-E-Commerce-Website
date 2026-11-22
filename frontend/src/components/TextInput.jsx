const baseClass =
  'w-full h-14 px-5 rounded border border-line bg-surface text-ink text-body-md placeholder:text-outline focus:outline-none focus:border-accent transition-colors'

// The one text box style used by every form.
function TextInput({ className = '', ...props }) {
  return <input className={`${baseClass} ${className}`} {...props} />
}

export default TextInput
