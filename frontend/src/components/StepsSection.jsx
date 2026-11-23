import { STEPS } from '../../config/aboutContent.js'
import Container from '../Container.jsx'
import SectionHeading from '../SectionHeading.jsx'

function StepsSection() {
  const { eyebrow, title, items } = STEPS

  return (
    <section className='bg-ink py-14 lg:py-20'>
      <Container className='flex flex-col gap-10 lg:gap-14'>
        <SectionHeading eyebrow={eyebrow} title={title} light />
        <ol className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14'>
          {items.map(({ title: itemTitle, text }, index) => (
            <li key={itemTitle} className='flex flex-col gap-4 pt-6 border-t border-white/20'>
              <span className='font-display italic text-headline-lg text-accent-soft'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='font-display text-headline-md text-white'>{itemTitle}</h3>
              <p className='text-body-md text-white/70'>{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default StepsSection
