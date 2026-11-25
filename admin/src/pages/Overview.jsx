import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import Button from '../components/Button.jsx'
import ApplicationInspector from '../components/dashboard/ApplicationInspector.jsx'
import KpiRow from '../components/dashboard/KpiRow.jsx'
import MerchantDirectory from '../components/dashboard/MerchantDirectory.jsx'
import RecentOrders from '../components/dashboard/RecentOrders.jsx'
import Segmented from '../components/Segmented.jsx'
import { OVERVIEW_HEADER, TIME_RANGES } from '../config/adminContent.js'
import { useOverviewData } from '../hooks/useOverviewData.js'

function Overview() {
  const [range, setRange] = useState('week')
  const [reviewingId, setReviewingId] = useState(null)
  const { stats, merchants, applications, orders } = useOverviewData(range)

  const application = applications.find(({ id }) => id === reviewingId) ?? applications[0]

  return (
    <div className='flex-1 flex flex-col gap-10'>
      <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-5'>
        <div className='min-w-0'>
          <h1 className='font-display text-4xl lg:text-5xl text-ink tracking-tight'>{OVERVIEW_HEADER.title}</h1>
          <p className='text-sm text-muted mt-1.5'>{OVERVIEW_HEADER.text}</p>
        </div>
        <div className='flex flex-wrap items-center gap-3 shrink-0'>
          <Segmented label='Time range' options={TIME_RANGES} value={range} onChange={setRange} />
          <Button icon={MdAdd} disabled title={OVERVIEW_HEADER.inviteHint}>
            {OVERVIEW_HEADER.invite}
          </Button>
        </div>
      </div>

      <KpiRow stats={stats} />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 flex-1'>
        <MerchantDirectory
          className='lg:col-span-8 min-w-0'
          merchants={merchants}
          counts={stats.merchants}
          reviewingId={application?.id}
          onReview={setReviewingId}
        />
        <ApplicationInspector className='lg:col-span-4' application={application} />
      </div>

      <RecentOrders className='flex-1' orders={orders} />
    </div>
  )
}

export default Overview
