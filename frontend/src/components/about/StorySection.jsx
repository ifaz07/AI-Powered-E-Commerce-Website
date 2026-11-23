import { STORY } from '../../config/aboutContent.js'
import Container from '../Container.jsx'
import SectionHeading from '../SectionHeading.jsx'

function StorySection() {
  const { eyebrow, title, text, points, image, alt } = STORY

  return (
    <section className='bg-surface-low border-b border-line py-14 lg:py-20'>
      <Container className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
        <div className='flex flex-col gap-6'>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <p className='text-body-lg text-muted font-normal max-w-xl'>{text}</p>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl text-body-md text-ink font-medium'>
            {points.map((point) => (
              <li key={point} className='flex items-center gap-3 pb-3 border-b border-line'>
                <span className='w-1.5 h-1.5 rounded-full bg-accent' aria-hidden='true' />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className='group aspect-[4/3] overflow-hidden rounded-lg bg-surface-mid shadow-xl shadow-black/5'>
          <img
            src={image}
            alt={alt}
            loading='lazy'
            className='w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out'
          />
        </div>
      </Container>
    </section>
  )
}

export default StorySection
