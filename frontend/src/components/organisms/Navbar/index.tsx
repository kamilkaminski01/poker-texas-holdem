import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts'
import CardLogo from 'components/atoms/CardLogo'

const Navbar = () => {
  return (
    <nav>
      <CardLogo className={'nav__logo'} />
      <div className="nav__links">
        <Link to={PATHS.about}>About</Link>
      </div>
    </nav>
  )
}

export default Navbar
