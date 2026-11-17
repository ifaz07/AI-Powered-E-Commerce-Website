function PageLoader() {
  return (
    <div
      className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex items-center justify-center'
      role='status'
      aria-live='polite'
    >
      Loading...
    </div>
  )
}

export default PageLoader
