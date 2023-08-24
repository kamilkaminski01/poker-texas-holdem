import './style.scss'
import useHomePageOnlineGames from 'pages/HomePage/hooks/useHomePageOnlineGames'

const OnlineGames = () => {
  const { onlineGames } = useHomePageOnlineGames()

  return (
    <div className="online-games">
      {onlineGames.length === 0 ? (
        <p>There are no online games.</p>
      ) : (
        onlineGames.map((onlineGame) => (
          <div key={onlineGame.hash} className="online-games__content">
            <h3 className="online-games__title">{onlineGame.hash}</h3>
            <p>{`small blind: ${onlineGame.smallBlind} | big blind: ${onlineGame.bigBlind} | buy in: ${onlineGame.buyIn}`}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default OnlineGames
