import { MERCHANTS_DIRECTORY } from '../../config/merchantsContent.js'
import Container from '../Container.jsx'
import EmptyState from '../EmptyState.jsx'
import SectionHeading from '../SectionHeading.jsx'

// There is no merchant API yet, so the directory shows an empty state instead of sample merchants.
function MerchantDirectory() {
  const { eyebrow, title, emptyTitle, emptyText } = MERCHANTS_DIRECTORY

  return (
    <section className='border-b border-line py-14 lg:py-20'>
      <Container className='flex flex-col gap-10'>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <EmptyState title={emptyTitle} text={emptyText} />
      </Container>
    </section>
  )
}

export default MerchantDirectory
