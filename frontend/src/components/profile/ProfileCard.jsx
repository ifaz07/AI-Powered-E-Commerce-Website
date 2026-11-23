import SectionHeading from '../SectionHeading.jsx'

// A card on the Profile & security tab: heading with a small icon, then the content.
function ProfileCard({ eyebrow, title, icon: Icon, tinted = false, className = '', children }) {
  return (
    <section
      className={`flex flex-col gap-8 p-6 lg:p-10 border border-line rounded-lg ${tinted ? 'bg-surface-low' : 'bg-surface'} ${className}`}
    >
      <div className='flex items-start justify-between gap-4'>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Icon className='text-[24px] text-outline shrink-0' aria-hidden='true' />
      </div>
      {children}
    </section>
  )
}

export default ProfileCard
