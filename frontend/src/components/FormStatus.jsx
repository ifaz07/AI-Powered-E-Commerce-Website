import { MdOutlineInfo } from 'react-icons/md'

// The note under a form after it was submitted. Shows nothing when there is no message.
function FormStatus({ message }) {
  if (!message) return null

  return (
    <p className='flex items-start gap-2 text-body-sm text-muted max-w-xl' role='status'>
      <MdOutlineInfo className='text-[18px] shrink-0 mt-0.5 text-accent' aria-hidden='true' />
      {message}
    </p>
  )
}

export default FormStatus
