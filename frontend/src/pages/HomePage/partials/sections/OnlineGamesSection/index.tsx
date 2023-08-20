import './style.scss'
import useHomePageOnlineGames from 'pages/HomePage/hooks/useHomePageOnlineGames'

const OnlineGamesSection = () => {
  const { onlineGames } = useHomePageOnlineGames()

  return (
    <section className="online-games-section">
      <div className="online-games__title">Online Games</div>
      <div>
        {onlineGames.map((onlineGame) => (
          <p key={onlineGame.hash}>{onlineGame.hash}</p>
        ))}
      </div>
    </section>
  )
}

export default OnlineGamesSection
