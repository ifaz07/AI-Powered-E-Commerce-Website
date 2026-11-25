// Shown instead of a table or list while there is nothing to show yet.
function EmptyState({ title, text }) {
  return (
    <div className='flex-1 flex flex-col items-center justify-center gap-1 py-10 px-4 text-center border border-dashed border-line-strong rounded-lg bg-inset'>
      <h3 className='font-display text-2xl text-ink'>{title}</h3>
      <p className='text-sm text-muted max-w-sm'>{text}</p>
    </div>
  )
}

export default EmptyState
