import PageLayout from '../components/PageLayout.jsx'
import CategorySection from '../components/home/CategorySection.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import NewsletterSection from '../components/home/NewsletterSection.jsx'
import SpotlightSection from '../components/home/SpotlightSection.jsx'

function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <SpotlightSection />
      <CategorySection />
      <NewsletterSection />
    </PageLayout>
  )
}

export default Home
