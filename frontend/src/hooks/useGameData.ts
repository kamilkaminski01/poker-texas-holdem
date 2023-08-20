import { IGameData } from 'models/gameData'
import useData from './useData'
import { ENDPOINTS } from 'utils/consts'

const useGameData = (options?: { dontFetchOnMount: true }) => {
  const {
    data: gameData,
    createData: createGameData,
    ...rest
  } = useData<IGameData>(ENDPOINTS.games, {
    dontFetchOnMount: options?.dontFetchOnMount,
    dataLocation: 'items'
  })

  return {
    gameData,
    createGameData,
    ...rest
  }
}

export default useGameData
