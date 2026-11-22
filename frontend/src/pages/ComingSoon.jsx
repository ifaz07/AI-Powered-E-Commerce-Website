import PageLayout from '../components/PageLayout.jsx'

// Temporary page for menu links whose real page is not built yet. Replace each route in App.jsx when it is.
function ComingSoon({ title }) {
  return (
    <PageLayout>
      <section className='min-h-[60vh] flex flex-col items-center justify-center gap-2 px-5 text-center'>
        <h1 className='font-display text-headline-lg text-ink'>{title}</h1>
        <p className='text-body-lg text-muted'>This page is coming soon.</p>
      </section>
    </PageLayout>
  )
}

export default ComingSoon
