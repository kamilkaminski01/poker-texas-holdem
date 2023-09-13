import { IGameData } from 'models/gameData'
import useData from './useData'
import { ENDPOINTS } from 'utils/consts'

const useGameData = (options?: { dontFetchOnMount: true }) => {
  const { createData: createGameData } = useData<IGameData>(ENDPOINTS.games, {
    dontFetchOnMount: options?.dontFetchOnMount
  })

  return { createGameData }
}

export default useGameData
