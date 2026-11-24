import { MdOutlineLocalShipping } from 'react-icons/md'
import { CONTACT_COVERAGE } from '../../config/contactContent.js'
import SectionCard from '../SectionCard.jsx'
import Fillable from './Fillable.jsx'

function CoverageCard({ className }) {
  const { eyebrow, title, items } = CONTACT_COVERAGE

  return (
    <SectionCard eyebrow={eyebrow} title={title} icon={MdOutlineLocalShipping} compact className={className}>
      <div className='flex flex-col gap-4'>
        {items.map(({ title: itemTitle, text, meta }) => (
          <div key={itemTitle} className='flex flex-col gap-2 p-4 rounded-lg bg-surface-low border border-line'>
            <h3 className='text-label-lg uppercase text-ink'>{itemTitle}</h3>
            <p className='text-body-md text-muted'>
              <Fillable value={text} />
            </p>
            <span className='pt-2 border-t border-line text-label-md uppercase text-accent'>
              <Fillable value={meta} />
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

export default CoverageCard
