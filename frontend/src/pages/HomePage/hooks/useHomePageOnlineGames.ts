import { useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { WEBSOCKETS } from 'utils/consts'
import { IHomePageOnlineGame } from '../models/homePageOnlineGame'

const useHomePageOnlineGames = () => {
  const [onlineGames, setOnlineGames] = useState<IHomePageOnlineGame[]>([])
  const [loading, setLoading] = useState(true)

  useWebSocket(WEBSOCKETS.onlineGames, {
    onMessage: (message) => {
      const data = JSON.parse(message.data)

      switch (data.command) {
        case 'onlineGames':
          if (data.onlineGames) {
            setOnlineGames(data.onlineGames)
            setLoading(false)
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

  return { onlineGames, loading }
}

export default useHomePageOnlineGames
