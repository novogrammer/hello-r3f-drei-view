import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene01 from './Scene01'
import { StatsGl } from '@react-three/drei'
import Scene02 from './Scene02';
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
        <Scene01/>
        <Scene02/>
      </div>

    </>
  )
}

export default App
