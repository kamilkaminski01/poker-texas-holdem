import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts'

const Navbar = () => {
  return (
    <nav>
      <Link to={PATHS.home}>
        <img
          className="nav__logo"
          width="75"
          height="75"
          src="https://img.icons8.com/ios-filled/75/FFFFFF/cards.png"
          alt="cards"
        />
      </Link>
      <div className="nav__links">
        <Link to={PATHS.about}>About</Link>
      </div>
    </nav>
  )
}

export default Navbar
