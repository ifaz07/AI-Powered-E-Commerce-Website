// The "or continue with" line between the form button and the Google button.
function AuthDivider() {
  return (
    <div className='flex items-center gap-4 text-label-lg uppercase text-outline' aria-hidden='true'>
      <span className='flex-1 h-px bg-line' />
      or continue with
      <span className='flex-1 h-px bg-line' />
    </div>
  )
}

export default AuthDivider
