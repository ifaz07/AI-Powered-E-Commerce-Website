function SectionHeading({ eyebrow, title, light = false, className = '' }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className={`text-label-md uppercase ${light ? 'text-accent-soft' : 'text-accent'}`}>{eyebrow}</span>
      <h2 className={`font-display text-headline-lg lg:text-display-xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
    </div>
  )
}

export default SectionHeading
