import React from 'react'
import './App.scss'
import { PATHS } from './utils/consts'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={PATHS.home} element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
