import { MdArrowForward } from 'react-icons/md'
import { ABOUT_HERO } from '../../config/aboutContent.js'
import ButtonLink from '../ButtonLink.jsx'
import Container from '../Container.jsx'

function AboutHero() {
  const { eyebrow, title, text, gallery } = ABOUT_HERO

  return (
    <section className='relative isolate overflow-hidden border-b border-line'>
      <div
        className='absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-gradient-to-b from-accent/10 via-accent-soft/40 to-transparent blur-3xl pointer-events-none -z-10'
        aria-hidden='true'
      />
      <Container className='pt-14 lg:pt-20 pb-12 lg:pb-16 flex flex-col items-center gap-14'>
        <div className='max-w-4xl flex flex-col items-center gap-6 text-center'>
          <span className='text-label-md uppercase text-accent'>{eyebrow}</span>
          <h1 className='font-display text-display-xl-mobile md:text-display-xl lg:text-display-2xl text-ink'>{title}</h1>
          <p className='text-body-lg text-muted font-normal max-w-2xl'>{text}</p>
          <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
            <ButtonLink to='/collections' icon={MdArrowForward}>
              Explore collections
            </ButtonLink>
            <ButtonLink to='/contact' variant='outline'>
              Contact us
            </ButtonLink>
          </div>
        </div>

        <ul className='w-full grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8 items-start'>
          {gallery.map(({ image, alt, label }, index) => (
            <li key={label} className={index === 1 ? 'sm:mt-12' : ''}>
              <figure className='group relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-mid'>
                <img
                  src={image}
                  alt={alt}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  className='absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none' />
                <figcaption className='absolute bottom-5 left-5 text-label-lg uppercase text-white'>{label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default AboutHero
