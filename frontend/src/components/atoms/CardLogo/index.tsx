import { CardLogoProps } from './interface'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts'

const CardLogo = ({ className }: CardLogoProps) => {
  return (
    <Link to={PATHS.home}>
      <img
        className={className}
        width="75"
        height="75"
        src="https://img.icons8.com/ios-filled/75/FFFFFF/cards.png"
        alt="cards"
      />
    </Link>
  )
}

export default CardLogo
