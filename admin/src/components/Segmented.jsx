import { buttonMotion } from '../config/ui.js'

const styles = {
  // A framed switch: the chosen option is tinted (the time range).
  framed: {
    wrap: 'bg-surface border border-line p-1 rounded-md shadow-xs',
    on: 'bg-accent-soft text-accent-ink font-semibold',
    off: 'text-muted hover:text-ink',
  },
  // Loose tabs: the chosen option is filled (the merchant status tabs).
  tabs: {
    wrap: 'gap-2 border-b border-line pb-3 overflow-x-auto',
    on: 'bg-accent text-white font-medium shadow-xs',
    off: 'text-muted hover:bg-hover',
  },
}

// A row of options where exactly one is chosen. options are { id, label }.
function Segmented({ variant = 'framed', options, value, onChange, label }) {
  const style = styles[variant]

  return (
    <div role='group' aria-label={label} className={`inline-flex items-center text-sm ${style.wrap}`}>
      {options.map(({ id, label: optionLabel }) => (
        <button
          key={id}
          type='button'
          aria-pressed={value === id}
          onClick={() => onChange(id)}
          className={`px-4 py-2 rounded-md shrink-0 cursor-pointer ${value === id ? style.on : style.off} ${buttonMotion}`}
        >
          {optionLabel}
        </button>
      ))}
    </div>
  )
}

export default Segmented
