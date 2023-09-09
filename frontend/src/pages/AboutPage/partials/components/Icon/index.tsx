import './style.scss'
import { IconProps } from 'pages/AboutPage/partials/components/Icon/interface'
import React from 'assets/icons/react.png'

const Icon = ({ name, left, top, animationDelay, icon }: IconProps) => {
  return (
    <div
      className="floating-icons__icon"
      style={{
        left,
        top,
        animation: `float 3s infinite linear ${animationDelay}`
      }}>
      <img src={icon} alt={name} />
    </div>
  )
}

export default Icon
