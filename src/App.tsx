import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { HomeScreen } from './pages/HomeScreen'
import { router } from './routes'

function App() {

  return (
    <div className="w-full flex flex-col h-screen justify-around">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
