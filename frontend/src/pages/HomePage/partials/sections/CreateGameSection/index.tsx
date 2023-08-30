import './style.scss'
import CreateGameForm from 'pages/HomePage/partials/forms/CreateGameForm'
import { useState } from 'react'
import useGameData from 'hooks/useGameData'
import Button from 'components/atoms/Button'

const CreateGameSection = () => {
  const { createGameData } = useGameData()
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="create-game-section">
      <h1 className="create-game-section__title">Create or Join a Poker Game</h1>
      <Button
        className={'create-game-section__btn btn--outline'}
        onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close' : 'Create a Game'}
      </Button>
      <CreateGameForm
        createGameData={createGameData}
        closeForm={() => setShowForm(false)}
        isFormOpen={showForm}
      />
    </section>
  )
}

export default CreateGameSection
