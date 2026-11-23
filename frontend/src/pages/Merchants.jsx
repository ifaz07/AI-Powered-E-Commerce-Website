import { MdArrowDownward } from 'react-icons/md'
import ButtonLink from '../components/ButtonLink.jsx'
import MerchantApplication from '../components/merchants/MerchantApplication.jsx'
import MerchantDirectory from '../components/merchants/MerchantDirectory.jsx'
import MerchantStandards from '../components/merchants/MerchantStandards.jsx'
import PageHeader from '../components/PageHeader.jsx'
import StepsSection from '../components/StepsSection.jsx'
import { MERCHANTS_APPLY_PATH, MERCHANTS_HERO, MERCHANTS_STEPS } from '../config/merchantsContent.js'

function Merchants() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Merchants' }]}
        title={MERCHANTS_HERO.title}
        subtitle={MERCHANTS_HERO.subtitle}
        aside={<MerchantStandards />}
      >
        <ButtonLink to={MERCHANTS_APPLY_PATH} icon={MdArrowDownward}>
          Apply to sell
        </ButtonLink>
        <ButtonLink to='/contact' variant='outline'>
          Contact us
        </ButtonLink>
      </PageHeader>
      <MerchantDirectory />
      <MerchantApplication />
      <StepsSection {...MERCHANTS_STEPS} />
    </>
  )
}

export default Merchants
