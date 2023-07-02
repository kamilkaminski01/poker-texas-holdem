import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts'

const Navbar = () => {
  return (
    <nav>
      <Link to={PATHS.home}>Poker Texas Hold&apos;em</Link>
    </nav>
  )
}

export default Navbar
