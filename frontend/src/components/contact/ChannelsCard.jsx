import { MdOutlineSupportAgent } from 'react-icons/md'
import { CONTACT_CHANNELS } from '../../config/contactContent.js'
import SectionCard from '../SectionCard.jsx'
import Fillable from './Fillable.jsx'

const rowClass = 'flex items-start gap-4 p-4 rounded-lg bg-surface-low border border-line transition-colors duration-300'

function ChannelRow({ icon: Icon, label, note, value, href }) {
  const content = (
    <>
      <span className='w-10 h-10 shrink-0 rounded bg-accent-soft text-accent flex items-center justify-center'>
        <Icon className='text-[20px]' aria-hidden='true' />
      </span>
      <span className='flex flex-col gap-0.5 min-w-0'>
        <span className='text-label-lg uppercase text-ink'>{label}</span>
        <span className='text-body-md text-ink break-all'>
          <Fillable value={value} />
        </span>
        <span className='text-body-sm text-muted'>{note}</span>
      </span>
    </>
  )

  return value ? (
    <a href={href(value)} target='_blank' rel='noopener noreferrer' className={`${rowClass} hover:border-accent/50 hover:bg-surface-mid`}>
      {content}
    </a>
  ) : (
    <div className={rowClass}>{content}</div>
  )
}

function ChannelsCard({ className }) {
  const { eyebrow, title, items } = CONTACT_CHANNELS

  return (
    <SectionCard eyebrow={eyebrow} title={title} icon={MdOutlineSupportAgent} compact className={className}>
      <div className='flex flex-col gap-4'>
        {items.map(({ id, ...channel }) => (
          <ChannelRow key={id} {...channel} />
        ))}
      </div>
    </SectionCard>
  )
}

export default ChannelsCard
