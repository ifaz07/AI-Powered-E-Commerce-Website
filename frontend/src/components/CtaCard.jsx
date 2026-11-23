import { Link } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'

// A bordered card with a short heading and one text link.
function CtaCard({ eyebrow, title, text, cta, to }) {
  return (
    <article className='group flex flex-col gap-4 p-8 lg:p-10 bg-surface border border-line rounded-lg hover:border-accent/50 hover:shadow-lg transition-all duration-500 ease-out'>
      <span className='text-label-md uppercase text-outline'>{eyebrow}</span>
      <h2 className='font-display text-headline-md lg:text-headline-lg text-ink'>{title}</h2>
      <p className='text-body-md text-muted'>{text}</p>
      <Link
        to={to}
        className='mt-2 inline-flex items-center gap-2 self-start text-label-lg uppercase text-accent hover:text-accent-strong transition-colors'
      >
        {cta}
        <MdArrowForward className='text-[18px] group-hover:translate-x-1 transition-transform duration-300' aria-hidden='true' />
      </Link>
    </article>
  )
}

export default CtaCard
