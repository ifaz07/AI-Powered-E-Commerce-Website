import ButtonLink from './ButtonLink.jsx'

// Shown where real data will appear once the backend has it. Never fill these areas with sample items.
function EmptyState({ title, text, action }) {
  return (
    <div className='mx-auto max-w-xl flex flex-col items-center gap-4 text-center p-10 rounded-lg bg-surface border border-line'>
      <h2 className='font-display text-headline-md text-ink'>{title}</h2>
      <p className='text-body-lg text-muted font-normal'>{text}</p>
      {action && (
        <ButtonLink to={action.to} variant='secondary' size='sm'>
          {action.label}
        </ButtonLink>
      )}
    </div>
  )
}

export default EmptyState
