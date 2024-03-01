import React from 'react'
import { Background } from './components/Background'
import { Forground } from './components/Forground'

export const App = () => {
  return (
    <div className='w-full relative h-screen bg-zinc-800'>
     <Background />
     <Forground />
    </div>
  )
}
export default App
