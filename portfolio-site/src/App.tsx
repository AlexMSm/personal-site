import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Details from './components/Details'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="details" element={<Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
