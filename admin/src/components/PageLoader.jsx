// Shown while a page or the login check is loading. It fades in after a short delay, so quick loads show nothing.
function PageLoader() {
  return (
    <div
      className='loader-delayed w-full min-h-[60vh] text-muted flex items-center justify-center'
      role='status'
      aria-live='polite'
    >
      Loading...
    </div>
  )
}

export default PageLoader
