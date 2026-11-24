import { CONTACT_FAQ } from '../../config/contactContent.js'
import Container from '../Container.jsx'
import SectionHeading from '../SectionHeading.jsx'
import Fillable from './Fillable.jsx'

function FaqSection() {
  const { eyebrow, title, items } = CONTACT_FAQ

  return (
    <section className='bg-surface-low border-y border-line py-14 lg:py-20'>
      <Container className='flex flex-col gap-10'>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10'>
          {items.map(({ topic, question, answer }) => (
            <article key={question} className='flex flex-col gap-3 p-6 lg:p-8 bg-surface border border-line rounded-lg hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out'>
              <span className='text-label-md uppercase text-accent'>{topic}</span>
              <h3 className='font-display text-headline-sm text-ink'>{question}</h3>
              <p className='text-body-md text-muted'>
                <Fillable value={answer} />
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FaqSection
