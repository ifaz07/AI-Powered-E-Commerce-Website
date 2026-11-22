// Title and short line above the Login and Registration forms.
function AuthHeading({ title, subtitle }) {
  return (
    <div className='flex flex-col gap-2 text-center'>
      <h1 className='font-display text-headline-lg 2xl:text-display-xl'>{title}</h1>
      <p className='text-body-lg text-muted font-normal'>{subtitle}</p>
    </div>
  )
}

export default AuthHeading
