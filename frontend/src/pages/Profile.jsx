import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Container from '../components/Container.jsx'
import FilterChip from '../components/FilterChip.jsx'
import AccountTab from '../components/profile/AccountTab.jsx'
import EmptyTab from '../components/profile/EmptyTab.jsx'
import MeasurementsTab from '../components/profile/MeasurementsTab.jsx'
import ProfileHeader from '../components/profile/ProfileHeader.jsx'
import { PROFILE_EMPTY, PROFILE_TABS } from '../config/profileContent.js'
import { useAuth } from '../hooks/useAuth.js'
import { useProfileCounts } from '../hooks/useProfileCounts.js'

// Tabs with a real panel. Tabs without one (orders, saved items) show their empty state from PROFILE_EMPTY.
const PANELS = {
  account: (user) => <AccountTab user={user} />,
  measurements: (user) => <MeasurementsTab user={user} />,
}

// Private page: RequireAuth in App.jsx only renders it for logged-in users. The tab lives in the address (?tab=).
function Profile() {
  const { user } = useAuth()
  const counts = useProfileCounts()
  const [params] = useSearchParams()
  const activeId = PROFILE_TABS.find(({ id }) => id === params.get('tab'))?.id ?? PROFILE_TABS[0].id

  return (
    <Container className='py-8 lg:py-12 flex flex-col gap-8'>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'My account' }]} />
      <ProfileHeader user={user} counts={counts} />

      <nav aria-label='Account sections' className='flex gap-3 overflow-x-auto pb-1'>
        {PROFILE_TABS.map(({ id, label, icon }) => (
          <FilterChip key={id} shape='tab' icon={icon} to={`/profile?tab=${id}`} active={id === activeId}>
            {id in counts ? `${label} (${counts[id]})` : label}
          </FilterChip>
        ))}
      </nav>

      {PANELS[activeId]?.(user) ?? <EmptyTab {...PROFILE_EMPTY[activeId]} />}
    </Container>
  )
}

export default Profile
