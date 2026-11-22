import { MdArrowForward } from 'react-icons/md'
import { SPOTLIGHT } from '../../config/homeContent.js'
import ButtonLink from '../ButtonLink.jsx'
import Container from '../Container.jsx'

function SpotlightSection() {
  return (
    <Container as='section' className='py-16'>
      <div className='relative w-full rounded-xl bg-surface overflow-hidden shadow-2xl'>
        <div
          className='absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none'
          aria-hidden='true'
        />

        <div className='grid grid-cols-1 lg:grid-cols-12 lg:min-h-[640px]'>
          <div className='group lg:col-span-5 relative min-h-[520px] overflow-hidden bg-surface-mid'>
            <img
              src={SPOTLIGHT.image}
              alt={SPOTLIGHT.alt}
              loading='lazy'
              className='absolute inset-0 w-full h-full object-cover object-[center_15%] group-hover:scale-[1.02] transition-transform duration-700 ease-out'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/80 hidden lg:block pointer-events-none' />
            <div className='absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:hidden pointer-events-none' />
          </div>

          <div className='lg:col-span-7 relative z-10 flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-16 2xl:p-24 bg-surface [&>*]:max-w-3xl'>
            <div className='flex items-center gap-3'>
              <span className='w-8 h-px bg-accent' aria-hidden='true' />
              <span className='text-label-md uppercase text-accent'>{SPOTLIGHT.eyebrow}</span>
            </div>
            <h2 className='font-display text-headline-lg text-ink'>{SPOTLIGHT.title}</h2>
            <p className='text-body-lg text-muted'>{SPOTLIGHT.text}</p>
            <div className='pt-2'>
              <ButtonLink to='/collections' icon={MdArrowForward}>
                {SPOTLIGHT.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SpotlightSection
