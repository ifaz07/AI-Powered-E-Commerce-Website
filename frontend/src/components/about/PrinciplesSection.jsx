import { PRINCIPLES } from '../../config/aboutContent.js'
import Container from '../Container.jsx'
import SectionHeading from '../SectionHeading.jsx'

function PrinciplesSection() {
  const { eyebrow, title, text, items } = PRINCIPLES

  return (
    <section className='border-b border-line py-14 lg:py-20'>
      <Container className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16'>
        <div className='lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start'>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <p className='text-body-lg text-muted font-normal'>{text}</p>
        </div>

        <ol className='lg:col-span-7 flex flex-col'>
          {items.map(({ title: itemTitle, text: itemText }, index) => (
            <li
              key={itemTitle}
              className='group grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-8 border-t border-line last:border-b'
            >
              <span className='font-display text-display-xl text-accent/40 group-hover:text-accent transition-colors duration-500'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='flex flex-col gap-2 pt-2'>
                <h3 className='font-display text-headline-md text-ink'>{itemTitle}</h3>
                <p className='text-body-md text-muted'>{itemText}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default PrinciplesSection
