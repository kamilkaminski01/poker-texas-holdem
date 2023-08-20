import { useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { WEBSOCKETS } from 'utils/consts'
import { IHomePageOnlineGame } from 'pages/HomePage/models/homePageOnlineGame'

const useHomePageOnlineGames = () => {
  const [onlineGames, setOnlineGames] = useState<IHomePageOnlineGame[]>([])

  useWebSocket(WEBSOCKETS.onlineGames, {
    onMessage: (message) => {
      const data = JSON.parse(message.data)

      switch (data.command) {
        case 'onlineGames':
          if (data.onlinePokerGames) {
            setOnlineGames(data.onlinePokerGames)
          }
          break
        case 'gameCreated':
          if (data.hash) {
            setOnlineGames((prevOnlineGames) => [...prevOnlineGames, data])
          }
          break
        case 'gameDeleted':
          if (data.hash) {
            setOnlineGames((prevOnlineGames) =>
              prevOnlineGames.filter((game) => game.hash !== data.hash)
            )
          }
          break
        default:
          break
      }
    }
  })

  return { onlineGames }
}

export default useHomePageOnlineGames
