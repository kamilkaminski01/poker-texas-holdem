import './style.scss'
import CreateGameForm from 'pages/HomePage/partials/forms/CreateGameForm'
import { useState } from 'react'
import useGameData from 'hooks/useGameData'

const CreateGameSection = () => {
  const { createGameData } = useGameData()
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <section className="create-game-section">
        <h1 className="create-game-section__title">Create or Join a Poker Game</h1>
        {!showForm && <button onClick={() => setShowForm(true)}>Create</button>}
      </section>
      {showForm && (
        <CreateGameForm createGameData={createGameData} closeForm={() => setShowForm(false)} />
      )}
    </>
  )
}

export default CreateGameSection
