import { MdCheckCircle, MdVerified } from 'react-icons/md'
import { INSPECTOR } from '../../config/adminContent.js'
import { labelClass } from '../../config/ui.js'
import Button from '../Button.jsx'
import EmptyState from '../EmptyState.jsx'
import Panel from '../Panel.jsx'
import TextInput from '../TextInput.jsx'

function Row({ label, value, mono, divider }) {
  return (
    <div className={`flex justify-between items-center gap-2 ${divider ? 'pt-2 border-t border-line' : ''}`}>
      <span className='text-outline'>{label}</span>
      <span className={`text-ink text-right truncate ${mono ? 'font-mono' : 'font-medium'}`}>{value}</span>
    </div>
  )
}

// The side panel for the application being reviewed. Decisions stay switched off until the review service exists.
function ApplicationInspector({ application, className }) {
  if (!application) {
    return (
      <Panel className={className}>
        <EmptyState {...INSPECTOR.empty} />
      </Panel>
    )
  }

  const { id, name, submitted, owner, phone, email, address, documents } = application

  return (
    <Panel className={className}>
      <div className='border-b border-line pb-4'>
        <span className='inline-block px-2.5 py-0.5 rounded-sm bg-terracotta-soft text-terracotta-ink text-[11px] font-bold uppercase tracking-wider mb-2'>
          {INSPECTOR.eyebrow}
        </span>
        <h3 className='font-display text-3xl text-ink'>{name}</h3>
        <p className='text-sm text-outline mt-1 font-mono'>
          Submitted {submitted} • ID {id}
        </p>
      </div>

      <div className='p-4 rounded-md bg-inset border border-line flex flex-col gap-2.5 text-sm'>
        <Row label={INSPECTOR.owner} value={owner} />
        <Row label={INSPECTOR.phone} value={phone} mono />
        <Row label={INSPECTOR.email} value={email} />
        <Row label={INSPECTOR.hub} value={address} divider />
      </div>

      {documents.length > 0 && (
        <div className='flex flex-col gap-2.5'>
          <span className={labelClass}>{INSPECTOR.checklistTitle}</span>
          <ul className='flex flex-col gap-2 text-sm'>
            {documents.map(({ label, state }) => (
              <li key={label} className='flex items-center justify-between p-2.5 rounded-md bg-inset border border-line'>
                <span className='flex items-center gap-2.5 text-ink font-medium'>
                  <MdCheckCircle className='text-[20px] text-accent' aria-hidden='true' />
                  {label}
                </span>
                <span className='font-mono text-[11px] text-accent font-bold bg-accent-soft px-2 py-0.5 rounded-sm border border-accent-line uppercase'>{state}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <TextInput as='textarea' rows={3} label={INSPECTOR.noteLabel} placeholder={INSPECTOR.notePlaceholder} />

      <div className='flex flex-col gap-2.5'>
        <Button icon={MdVerified} disabled className='w-full'>
          {INSPECTOR.approve}
        </Button>
        <div className='grid grid-cols-2 gap-2.5'>
          <Button variant='secondary' disabled>
            {INSPECTOR.requestInfo}
          </Button>
          <Button variant='danger' disabled>
            {INSPECTOR.reject}
          </Button>
        </div>
        <p className='text-xs text-outline'>{INSPECTOR.actionsHint}</p>
      </div>
    </Panel>
  )
}

export default ApplicationInspector
