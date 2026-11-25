import { buttonMotion } from '../config/ui.js'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-strong shadow-xs',
  secondary: 'border border-line bg-surface text-ink hover:bg-hover',
  danger: 'border border-danger/30 bg-surface text-danger hover:bg-danger-soft',
}

// The one button style for the console. "icon" is an optional react-icons component shown before the label.
function Button({ variant = 'primary', icon: Icon, className = '', children, ...props }) {
  return (
    <button
      type='button'
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${buttonMotion} ${className}`}
      {...props}
    >
      {Icon && <Icon className='text-[20px]' aria-hidden='true' />}
      {children}
    </button>
  )
}

export default Button
