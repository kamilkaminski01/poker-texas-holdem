import { Outlet } from 'react-router-dom'
import './style.scss'

const GameLayout = () => {
  return (
    <div className="game-layout__bg">
      <Outlet />
    </div>
  )
}

export default GameLayout
