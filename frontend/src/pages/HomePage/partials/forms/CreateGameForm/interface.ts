import { IServerResponse } from 'models/serverResponse'
import { IGameData } from 'models/gameData'

export interface CreateGameFormProps {
  createGameData: (data: IGameData) => Promise<IServerResponse<IGameData>>
  closeForm: () => void
  isFormOpen: boolean
}
