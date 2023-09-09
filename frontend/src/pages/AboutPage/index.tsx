import './style.scss'
import TechnologySection from './partials/sections/TechnologySection'
import FeatureSection from './partials/sections/FeatureSection'

const AboutPage = () => {
  return (
    <>
      <section className="about-page">
        <TechnologySection />
        <FeatureSection />
      </section>
    </>
  )
}

export default AboutPage
