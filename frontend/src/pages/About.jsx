import AboutCta from '../components/about/AboutCta.jsx'
import AboutHero from '../components/about/AboutHero.jsx'
import PrinciplesSection from '../components/about/PrinciplesSection.jsx'
import StorySection from '../components/about/StorySection.jsx'
import StepsSection from '../components/StepsSection.jsx'
import { STEPS } from '../config/aboutContent.js'

function About() {
  return (
    <>
      <AboutHero />
      <PrinciplesSection />
      <StepsSection {...STEPS} />
      <StorySection />
      <AboutCta />
    </>
  )
}

export default About
