import { Link, useSearchParams } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import Container from '../components/Container.jsx'
import CtaCard from '../components/CtaCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import FilterChip from '../components/FilterChip.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { COLLECTION_CATEGORIES, collectionsPath } from '../config/categories.js'
import { COLLECTIONS_CTAS, COLLECTIONS_SUBTITLE } from '../config/collectionsContent.js'

// There is no product API yet, so the product area shows an empty state instead of sample items.
function Collections() {
  const [params] = useSearchParams()
  const category = COLLECTION_CATEGORIES.find(({ id }) => id === params.get('category'))
  const search = params.get('search')?.trim() ?? ''

  const breadcrumb = [
    { label: 'Home', to: '/' },
    category ? { label: 'Collections', to: collectionsPath() } : { label: 'Collections' },
    ...(category ? [{ label: category.label }] : []),
  ]

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb}
        title={category ? category.label : 'All Collections'}
        subtitle={COLLECTIONS_SUBTITLE}
      />

      <section className='w-full border-b border-line'>
        <Container className='py-5 flex flex-col gap-4'>
          <div className='flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6'>
            <span className='text-label-md uppercase text-outline shrink-0'>Browse by category</span>
            <div className='flex gap-3 overflow-x-auto pb-1'>
              <FilterChip to={collectionsPath()} active={!category}>
                All pieces
              </FilterChip>
              {COLLECTION_CATEGORIES.map(({ id, label }) => (
                <FilterChip key={id} to={collectionsPath(id)} active={category?.id === id}>
                  {label}
                </FilterChip>
              ))}
            </div>
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

      <Container className='py-14 lg:py-20'>
        <EmptyState
          title='No pieces here yet'
          text='New pieces will appear on this page as soon as they are added to the shop.'
          action={{ label: 'Back to home', to: '/' }}
        />
      </Container>

      <section className='bg-surface-low border-t border-line py-14 lg:py-20'>
        <Container className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10'>
          {COLLECTIONS_CTAS.map((card) => (
            <CtaCard key={card.title} {...card} />
          ))}
        </Container>
      </section>
    </>
  )
}

export default Collections
