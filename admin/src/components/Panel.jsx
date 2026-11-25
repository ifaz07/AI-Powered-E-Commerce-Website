// The white card used by every section. An optional title and text sit on the left, an optional "aside" on the right.
function Panel({ title, text, aside, className = '', children }) {
  return (
    <section className={`bg-surface border border-line rounded-lg p-6 lg:p-8 shadow-xs flex flex-col gap-6 ${className}`}>
      {(title || aside) && (
        <header className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
          <div>
            <h2 className='font-display text-3xl text-ink'>{title}</h2>
            {text && <p className='text-sm text-muted mt-0.5'>{text}</p>}
          </div>
          {aside}
        </header>
      )}
      {children}
    </section>
  )
}

export default Panel
