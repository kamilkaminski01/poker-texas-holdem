import './style.scss'
import FloatingIcons from '../../components/FloatingIcons'
import SectionTitle from '../../components/SectionTitle'

const TechnologySection = () => {
  return (
    <section>
      <div className="technology-section">
        <div className="technology-section__wrapper">
          <SectionTitle subtitle={"Poker Texas Hold'em"} title={'Technology'} />
          <p className="technology-section__description">
            The development of this web application relied on a versatile set of technologies and
            tools such as: Python, Django, TypeScript, React.js, Sass, PostgreSQL, AWS, Redis,
            Docker, Git. Together, these technologies formed a comprehensive and cohesive tech
            stack, resulting in a feature-rich and user-friendly web application
          </p>
        </div>
        <FloatingIcons />
      </div>
    </section>
  )
}

export default TechnologySection
