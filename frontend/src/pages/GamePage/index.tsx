import './style.scss'
import Table from './partials/components/Table'
import Sidebar from './partials/components/Sidebar'

const GamePage = () => {
  return (
    <div className="game-page">
      <Sidebar />
      <Table />
    </div>
  )
}

export default GamePage
