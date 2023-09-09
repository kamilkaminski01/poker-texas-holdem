import './style.scss'
import HoverBox from '../../components/HoverBox'
import SectionTitle from '../../components/SectionTitle'

const hoverBoxes = [
  {
    icon: 'https://img.icons8.com/ios/30/228BE6/cards.png',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    icon: 'https://img.icons8.com/ios/30/228BE6/cards.png',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    icon: 'https://img.icons8.com/ios/30/228BE6/cards.png',
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }
]

const FeatureSection = () => {
  return (
    <section>
      <div className="feature-section">
        <SectionTitle subtitle={"Poker Texas Hold'em"} title={'Features'} />
        <div className="feature-section__boxes">
          {hoverBoxes.map((hoverBox, index) => (
            <HoverBox
              key={index}
              icon={hoverBox.icon}
              title={hoverBox.title}
              description={hoverBox.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
