import './style.scss'
import Table from './partials/components/Table'
import Sidebar from './partials/components/Sidebar'
import Seat from './partials/components/Seat'

const GamePage = () => {
  return (
    <div className="game-page">
      <Sidebar />
      <Table />
      <Seat />
    </div>
  )
}

export default GamePage
