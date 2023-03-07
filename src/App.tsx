import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { HomeScreen } from './pages/HomeScreen'
import { Routes } from './routes'

function App() {
  return (
    <div className="w-full flex flex-col h-screen justify-around">
      <Routes/>
    </div>
  )
}

export default App
