// The main submit button used by forms.
function PrimaryButton({ children, ...props }) {
  return (
    <button
      type='submit'
      className='w-full h-14 rounded bg-accent text-white text-label-lg uppercase font-semibold hover:bg-accent-strong hover:shadow-lg enabled:hover:-translate-y-0.5 enabled:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-300 ease-out cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
