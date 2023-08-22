import './style.scss'
import useHomePageOnlineGames from 'pages/HomePage/hooks/useHomePageOnlineGames'

const OnlineGamesSection = () => {
  const { onlineGames } = useHomePageOnlineGames()

  return (
    <section className="online-games-section">
      <div className="online-games__title">Online Games</div>
      <div>
        {onlineGames.map((onlineGame) => (
          <div key={onlineGame.hash}>
            <p>{onlineGame.hash}</p>
            <p>{`small blind: ${onlineGame.smallBlind} | big blind: ${onlineGame.bigBlind} | buy in: ${onlineGame.buyIn}`}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OnlineGamesSection
