import './style.scss'
import FloatingIcons from '../../components/FloatingIcons'

const TechnologySection = () => {
  return (
    <section className="technology-section">
      <div className="technology-section__wrapper">
        <div className="technology-section__about">
          <h4 className="technology-section__subtitle">Poker Texas Hold&apos;em</h4>
          <h2 className="technology-section__title">Technology</h2>
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
