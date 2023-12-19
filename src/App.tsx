import { Canvas } from '@react-three/fiber'
import './App.css'
import Hero from './Hero'
import { StatsGl } from '@react-three/drei'
import About from './About';
import { TunnelR3f } from './TunnelR3f';

function App() {
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
          <TunnelR3f.Out/>

        </Canvas>
      </div>
      <div style={{
          position:"relative",
      }}>
        <Hero/>
        <About/>
      </div>

    </>
  )
}

export default App
