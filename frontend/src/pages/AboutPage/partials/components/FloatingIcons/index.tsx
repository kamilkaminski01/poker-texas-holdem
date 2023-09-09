import './style.scss'
import Icon from '../Icon'
import Python from 'assets/icons/python.png'
import Django from 'assets/icons/django.png'
import TypeScript from 'assets/icons/typescript.png'
import React from 'assets/icons/react.png'
import Sass from 'assets/icons/sass.png'
import Postgres from 'assets/icons/postgres.png'
import Redis from 'assets/icons/redis.png'
import Docker from 'assets/icons/docker.png'
import AWS from 'assets/icons/aws.png'

const icons = [
  { name: 'python', left: '15%', top: '15%', animationDelay: '0s', icon: Python },
  { name: 'django', left: '40%', top: '20%', animationDelay: '0.3s', icon: Django },
  { name: 'typescript', left: '10%', top: '50%', animationDelay: '1.7s', icon: TypeScript },
  { name: 'react', left: '65%', top: '20%', animationDelay: '1s', icon: React },
  { name: 'sass', left: '30%', top: '40%', animationDelay: '0.2s', icon: Sass },
  { name: 'postgres', left: '50%', top: '50%', animationDelay: '1.3s', icon: Postgres },
  { name: 'redis', left: '30%', top: '70%', animationDelay: '0.4s', icon: Redis },
  { name: 'docker', left: '70%', top: '55%', animationDelay: '1.3s', icon: Docker },
  { name: 'aws', left: '55%', top: '75%', animationDelay: '0.6s', icon: AWS }
]

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      {icons.map((icon, index) => (
        <Icon
          key={index}
          name={icon.name}
          left={icon.left}
          top={icon.top}
          animationDelay={icon.animationDelay}
          icon={icon.icon}
        />
      ))}
    </div>
  )
}

export default FloatingIcons
