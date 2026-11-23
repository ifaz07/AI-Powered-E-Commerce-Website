import { ABOUT_CTA } from '../../config/aboutContent.js'
import ButtonLink from '../ButtonLink.jsx'
import Container from '../Container.jsx'

function AboutCta() {
  const { title, text } = ABOUT_CTA

  return (
    <section className='py-12 lg:py-16'>
      <Container className='flex flex-col items-center gap-6 text-center'>
        <h2 className='font-display text-display-xl-mobile md:text-display-xl text-ink'>{title}</h2>
        <p className='text-body-lg text-muted font-normal max-w-xl'>{text}</p>
        <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
          <ButtonLink to='/collections'>Browse the collections</ButtonLink>
          <ButtonLink to='/registration' variant='outline'>
            Create an account
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

export default AboutCta
