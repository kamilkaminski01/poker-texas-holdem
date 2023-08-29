import React from 'react'
import './App.scss'
import { PATHS } from 'utils/consts'
import { Route, Routes } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import SharedLayout from 'components/atoms/SharedLayout'
import AboutPage from 'pages/AboutPage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path={PATHS.home} element={<HomePage />} />
          <Route path={PATHS.about} element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
