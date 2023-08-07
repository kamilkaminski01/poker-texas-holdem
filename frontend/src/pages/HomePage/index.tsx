import './style.scss'
import CreateGameSection from './partials/sections/CreateGameSection'
import OnlineGamesSection from './partials/sections/OnlineGamesSection'

const HomePage = () => {
  return (
    <div className="home-page">
      <CreateGameSection />
      <OnlineGamesSection />
    </div>
  )
}

export default HomePage
