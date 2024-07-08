import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Model from '../public/Model'
import './App.css'


function App() {
 

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls  enableZoom={false}/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
    </>
  )
}

export default App
