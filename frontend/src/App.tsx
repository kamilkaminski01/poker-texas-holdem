import React from 'react'
import './App.scss'
import { PATHS } from 'utils/consts'
import { Route, Routes } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import SharedLayout from 'components/atoms/SharedLayout'
import AboutPage from 'pages/AboutPage'
import GamePage from 'pages/GamePage'
import GameLayout from 'components/atoms/GameLayout'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path={PATHS.home} element={<HomePage />} />
          <Route path={PATHS.about} element={<AboutPage />} />
        </Route>

        <Route element={<GameLayout />}>
          <Route path={PATHS.game} element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
