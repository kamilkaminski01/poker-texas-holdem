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
        <div className="create-game__title">Create or Join a Poker Game</div>
        {!showForm && <button onClick={() => setShowForm(true)}>Create</button>}
      </section>
      {showForm && (
        <CreateGameForm createGameData={createGameData} closeForm={() => setShowForm(false)} />
      )}
    </>
  )
}

export default CreateGameSection
