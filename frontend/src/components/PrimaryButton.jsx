// The main submit button used by forms.
function PrimaryButton({ children, ...props }) {
  return (
    <button
      type='submit'
      className='w-full h-14 rounded bg-accent text-white text-label-lg uppercase font-semibold hover:bg-accent-strong transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
