import './style.scss'
import CreateGameForm from 'pages/HomePage/partials/forms/CreateGameForm'
import { useState } from 'react'
import useGameData from 'hooks/useGameData'
import Button from 'components/atoms/Button'

const CreateGameSection = () => {
  const { createGameData } = useGameData()
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <section className="create-game-section">
        <h1 className="create-game-section__title">Create or Join a Poker Game</h1>
        {showForm ? (
          <CreateGameForm createGameData={createGameData} closeForm={() => setShowForm(false)} />
        ) : (
          <Button
            className={'create-game-section__btn btn--outline'}
            onClick={() => setShowForm(true)}>
            Create a Game
          </Button>
        )}
      </section>
    </>
  )
}

export default CreateGameSection
