import SectionHeading from './SectionHeading.jsx'

// A card with a heading, a small icon at the top right, then the content. Used on the profile and contact pages.
// compact makes the heading smaller, for narrow side cards.
function SectionCard({ eyebrow, title, icon: Icon, tinted = false, compact = false, className = '', children }) {
  return (
    <section
      className={`flex flex-col ${compact ? 'gap-6 p-6 lg:p-8' : 'gap-8 p-6 lg:p-10'} border border-line rounded-lg ${tinted ? 'bg-surface-low' : 'bg-surface'} ${className}`}
    >
      <div className='flex items-start justify-between gap-4'>
        {compact ? (
          <div className='flex flex-col gap-2'>
            <span className='text-label-md uppercase text-accent'>{eyebrow}</span>
            <h2 className='font-display text-headline-md text-ink'>{title}</h2>
          </div>
        ) : (
          <SectionHeading eyebrow={eyebrow} title={title} />
        )}
        <Icon className='text-[24px] text-outline shrink-0' aria-hidden='true' />
      </div>
      {children}
    </section>
  )
}

export default SectionCard
