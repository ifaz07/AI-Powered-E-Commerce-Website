import EmptyState from '../EmptyState.jsx'
import SectionHeading from '../SectionHeading.jsx'

// A profile tab whose data has no backend yet (orders, saved items). Takes one entry of PROFILE_EMPTY.
function EmptyTab({ eyebrow, title, emptyTitle, emptyText, action }) {
  return (
    <div className='flex flex-col gap-8'>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <EmptyState title={emptyTitle} text={emptyText} action={action} />
    </div>
  )
}

export default EmptyTab
