import './style.scss'
import { useEffect, useState } from 'react'
import Spinner from 'components/atoms/Spinner'

const GamePage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 700)
  })

  return (
    <div className="game-page">
      {loading ? <Spinner /> : <div className="game-page__content">Game Page</div>}
    </div>
  )
}

export default GamePage
