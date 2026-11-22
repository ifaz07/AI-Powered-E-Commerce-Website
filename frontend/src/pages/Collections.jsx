import { Link, useSearchParams } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import Container from '../components/Container.jsx'
import ButtonLink from '../components/ButtonLink.jsx'
import { COLLECTION_CATEGORIES, collectionsPath } from '../config/categories.js'

const chipBase = 'px-4 py-2 rounded-full text-label-lg uppercase whitespace-nowrap border transition-all duration-300 ease-out'
const chipIdle = 'bg-surface/80 border-line text-muted hover:border-accent hover:text-accent'
const chipActive = 'bg-ink border-ink text-white'

// The Collections page: heading, category chips and the product area.
// There is no product API yet, so the product area shows an honest empty state instead of sample items.
function Collections() {
  const [params] = useSearchParams()
  const categoryId = params.get('category')
  const search = params.get('search')?.trim() ?? ''
  const category = COLLECTION_CATEGORIES.find(({ id }) => id === categoryId)

  const title = category ? category.label : 'All Collections'

  return (
    <>
      <section className='w-full bg-surface-low border-b border-line py-8 lg:py-10'>
        <Container className='flex flex-col gap-3'>
          <nav aria-label='Breadcrumb' className='flex items-center gap-2 text-label-md uppercase text-outline'>
            <Link to='/' className='hover:text-accent transition-colors'>Home</Link>
            <span aria-hidden='true'>/</span>
            {category ? (
              <>
                <Link to={collectionsPath()} className='hover:text-accent transition-colors'>Collections</Link>
                <span aria-hidden='true'>/</span>
                <span className='text-ink'>{category.label}</span>
              </>
            ) : (
              <span className='text-ink'>Collections</span>
            )}
          </nav>
          <h1 className='font-display text-display-xl-mobile md:text-display-xl text-ink'>{title}</h1>
          <p className='font-display italic text-headline-sm text-muted'>
            Clothing and accessories for men, women and kids.
          </p>
        </Container>
      </section>

      <section className='w-full border-b border-line bg-page'>
        <Container className='py-5 flex flex-col gap-4'>
          <div className='flex gap-3 overflow-x-auto pb-1' role='list' aria-label='Categories'>
            <Link
              role='listitem'
              to={collectionsPath()}
              aria-current={!category ? 'page' : undefined}
              className={`${chipBase} ${!category ? chipActive : chipIdle}`}
            >
              All pieces
            </Link>
            {COLLECTION_CATEGORIES.map(({ id, label }) => (
              <Link
                key={id}
                role='listitem'
                to={collectionsPath(id)}
                aria-current={category?.id === id ? 'page' : undefined}
                className={`${chipBase} ${category?.id === id ? chipActive : chipIdle}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {search && (
            <div className='flex flex-wrap items-center gap-3 text-label-md uppercase text-muted'>
              <span>Searching for</span>
              <Link
                to={collectionsPath(category?.id)}
                aria-label={`Clear search for ${search}`}
                className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-line text-ink normal-case text-body-sm hover:border-accent hover:text-accent transition-colors'
              >
                {search}
                <MdClose className='text-[14px]' aria-hidden='true' />
              </Link>
            </div>
          )}
        </Container>
      </section>

      <Container className='py-16 lg:py-24'>
        <div className='mx-auto max-w-xl flex flex-col items-center gap-4 text-center p-10 rounded-lg bg-surface border border-line'>
          <h2 className='font-display text-headline-md text-ink'>No pieces here yet</h2>
          <p className='text-body-lg text-muted font-normal'>
            New pieces will appear on this page as soon as they are added to the shop.
          </p>
          <ButtonLink to='/' variant='secondary' size='sm'>
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </>
  )
}

export default Collections
