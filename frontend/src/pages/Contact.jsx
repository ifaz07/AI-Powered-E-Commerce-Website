import ButtonLink from '../components/ButtonLink.jsx'
import ChannelsCard from '../components/contact/ChannelsCard.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import CoverageCard from '../components/contact/CoverageCard.jsx'
import FaqSection from '../components/contact/FaqSection.jsx'
import Fillable from '../components/contact/Fillable.jsx'
import Container from '../components/Container.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { CONTACT_AT_A_GLANCE, CONTACT_BANNER, CONTACT_HERO } from '../config/contactContent.js'
import { useAuth } from '../hooks/useAuth.js'

function AtAGlance() {
  const { title, rows } = CONTACT_AT_A_GLANCE

  return (
    <div className='p-6 bg-surface border border-line rounded-lg shadow-lg shadow-black/5 flex flex-col gap-4'>
      <h2 className='text-label-lg uppercase text-ink'>{title}</h2>
      <dl className='flex flex-col gap-3'>
        {rows.map(({ label, value }) => (
          <div key={label} className='flex items-center justify-between gap-4 text-body-md'>
            <dt className='text-muted'>{label}</dt>
            <dd className='text-ink text-right'>
              <Fillable value={value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function Contact() {
  const { eyebrow, title, text, cta, to } = CONTACT_BANNER
  const { user } = useAuth()

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        title={
          <>
            {CONTACT_HERO.title} <span className='italic text-accent'>{CONTACT_HERO.accent}</span>
          </>
        }
        subtitle={CONTACT_HERO.subtitle}
        aside={<AtAGlance />}
      />

      <Container className='py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
        <ContactForm key={user?._id ?? 'guest'} user={user} className='lg:col-span-7' />
        <div className='lg:col-span-5 flex flex-col gap-8'>
          <ChannelsCard />
          <CoverageCard className='flex-1' />
        </div>
      </Container>

      <FaqSection />

      <Container className='py-14 lg:py-20'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 lg:p-12 bg-surface border border-line rounded-lg'>
          <div className='flex flex-col gap-3 max-w-2xl'>
            <span className='text-label-md uppercase text-accent'>{eyebrow}</span>
            <h2 className='font-display text-headline-lg lg:text-display-xl text-ink'>{title}</h2>
            <p className='text-body-lg text-muted font-normal'>{text}</p>
          </div>
          <ButtonLink to={to}>{cta}</ButtonLink>
        </div>
      </Container>
    </>
  )
}

export default Contact
