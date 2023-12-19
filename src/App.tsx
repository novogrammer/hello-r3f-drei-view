import { Canvas } from '@react-three/fiber'
import './App.css'
import Hero from './Hero'
import { StatsGl } from '@react-three/drei'
import { useRef } from 'react';
import About from './About';

function App() {
  const heroDivElementRef = useRef<HTMLDivElement>(null!);
  const aboutDivElementRef = useRef<HTMLDivElement>(null!);
  return (
    <>
      <div style={{
        position:"fixed",
        left:0,
        top:0,
        width:"100%",
        height:"100%",
      }}>
        <Canvas>
          <StatsGl/>
          <Hero track={heroDivElementRef}/>
          <About track={aboutDivElementRef}/>

        </Canvas>
      </div>
      <div style={{
          position:"relative",
      }}>
        <div ref={heroDivElementRef} style={{
          width:"100%",
          height:"100svh",
        }} />
        <div ref={aboutDivElementRef} style={{
          width:"100%",
          height:"100svh",
        }} />
      </div>

    </>
  )
}

export default App
