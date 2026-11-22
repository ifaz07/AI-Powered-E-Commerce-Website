import { Link } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'

// A photo tile for one category. It goes to Collections until category pages exist.
function CategoryCard({ category }) {
  const { label, image, alt } = category

  return (
    <Link
      to='/collections'
      aria-label={`Shop ${label}`}
      className='group relative block w-full aspect-[4/3] 2xl:aspect-[16/10] rounded-lg overflow-hidden bg-surface-mid shadow-lg hover:shadow-2xl transition-shadow duration-300'
    >
      <img
        src={image}
        alt={alt}
        loading='lazy'
        className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none' />

      <div className='absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white'>
        <div className='flex flex-col'>
          <span className='text-caption uppercase text-white/80'>Shop</span>
          <span className='font-display text-headline-lg'>{label}</span>
        </div>
        <span className='shrink-0 w-11 h-11 rounded bg-surface/90 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors'>
          <MdArrowForward className='text-[20px]' aria-hidden='true' />
        </span>
      </div>
    </Link>
  )
}

export default CategoryCard
