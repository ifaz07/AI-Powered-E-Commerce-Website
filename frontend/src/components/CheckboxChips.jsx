// A group of rounded choices where several can be picked at once. The picked ones turn dark.
function CheckboxChips({ legend, options, selected, onToggle, error }) {
  return (
    <fieldset className='flex flex-col gap-3'>
      <legend className='text-label-lg uppercase text-muted mb-3'>{legend}</legend>
      <div className='flex flex-wrap gap-3'>
        {options.map(({ id, label }) => (
          <label key={id} className='cursor-pointer'>
            <input
              type='checkbox'
              className='peer sr-only'
              checked={selected.includes(id)}
              onChange={() => onToggle(id)}
            />
            <span className='block px-4 py-2 rounded-full border border-line bg-surface text-label-lg uppercase text-muted transition-all duration-300 ease-out hover:border-accent hover:text-accent peer-checked:bg-ink peer-checked:border-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent'>
              {label}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p role='alert' className='text-body-sm text-danger'>
          {error}
        </p>
      )}
    </fieldset>
  )
}

export default CheckboxChips
