import './style.scss'
import { IHoverBoxProps } from './interface'

const HoverBox = ({ icon, title, description }: IHoverBoxProps) => {
  return (
    <div className="hover-box">
      <img src={icon} alt={title} />
      <h3 className="hover-box__title">{title}</h3>
      <p className="hover-box__description">{description}</p>
    </div>
  )
}

export default HoverBox
