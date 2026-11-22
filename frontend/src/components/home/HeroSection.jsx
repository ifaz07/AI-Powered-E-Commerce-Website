import { Link } from 'react-router-dom'
import { MdArrowForward, MdOutlineAutoAwesome } from 'react-icons/md'
import { HERO } from '../../config/homeContent.js'
import { collectionsPath } from '../../config/categories.js'
import ButtonLink from '../ButtonLink.jsx'

// Full-width split hero: text on the left, a photo that runs to the right edge of the screen.
// The left padding matches Container so the text lines up with the logo in the menu bar.
function HeroSection() {
  return (
    <section className='relative isolate grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-5rem)] overflow-hidden'>
      <div
        className='absolute top-0 -left-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-accent/10 via-accent-soft/40 to-transparent blur-3xl pointer-events-none -z-10'
        aria-hidden='true'
      />

      <div className='flex flex-col justify-center gap-8 px-5 md:px-10 lg:pl-16 lg:pr-16 2xl:pl-24 2xl:pr-24 py-16 lg:py-24'>
        <span className='self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-high text-accent text-label-md uppercase shadow-sm'>
          <MdOutlineAutoAwesome className='text-[14px]' aria-hidden='true' />
          New season
        </span>

        <div className='flex flex-col gap-4'>
          <h1 className='font-display text-display-xl-mobile md:text-display-xl 2xl:text-display-2xl text-ink leading-[1.08]'>
            Fresh styles,
            <span className='block italic text-accent'>delivered to you</span>
          </h1>
          <p className='text-body-lg text-muted max-w-xl'>
            Shop the latest for men, women and kids. Effortless silhouettes shaped by traditional
            tailoring and modern ease.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-4 pt-2'>
          <ButtonLink to='/collections' icon={MdArrowForward}>
            Shop new arrivals
          </ButtonLink>
          <ButtonLink to='/about' variant='secondary'>
            Our story
          </ButtonLink>
        </div>

      </div>

      <div className='group relative min-h-[480px] lg:min-h-full bg-surface-mid overflow-hidden'>
        <img
          src={HERO.image}
          alt={HERO.alt}
          fetchPriority='high'
          className='absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none' />

        <div className='absolute top-6 left-6 [writing-mode:vertical-rl] rotate-180 text-caption uppercase tracking-[0.25em] text-ink/70 bg-surface/60 backdrop-blur-md px-2.5 py-3 rounded'>
          {HERO.label}
        </div>

        <div className='absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-auto lg:w-[460px] p-4 rounded-lg bg-surface/90 backdrop-blur-xl shadow-xl flex items-center justify-between gap-4'>
          <div className='flex flex-col min-w-0'>
            <span className='text-caption uppercase text-accent font-semibold'>{HERO.label}</span>
            <p className='font-display text-headline-sm text-ink truncate'>{HERO.title}</p>
          </div>
          <Link
            to={collectionsPath('men')}
            aria-label={HERO.title}
            className='shrink-0 w-11 h-11 rounded bg-accent text-white flex items-center justify-center hover:bg-accent-strong hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-300 ease-out shadow-md'
          >
            <MdArrowForward className='text-[20px]' aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
