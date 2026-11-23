import { Link } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'
import { CATEGORIES } from '../../config/homeContent.js'
import Container from '../Container.jsx'
import SectionHeading from '../SectionHeading.jsx'
import CategoryCard from './CategoryCard.jsx'

function CategorySection() {
  return (
    <Container as='section' className='py-20'>
      <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12'>
        <SectionHeading eyebrow='Categories' title='Shop by category' />
        <Link
          to='/collections'
          className='group inline-flex items-center gap-2 text-label-lg uppercase text-accent hover:text-accent-strong transition-colors font-medium'
        >
          View all
          <MdArrowForward className='text-[18px] group-hover:translate-x-1 transition-transform' aria-hidden='true' />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Container>
  )
}

export default CategorySection
