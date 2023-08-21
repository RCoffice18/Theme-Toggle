import React from 'react'
import { ThemeProvider } from './Context/ThemeContext'
import Routings from './Routes/Routings'

const App = () => {
  return (
    <ThemeProvider>
      <div className='dark:bg-slate-900 h-screen py-48 duration-500'>
        <Routings />
      </div>
    </ThemeProvider>

  )
}

export default App