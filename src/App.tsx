import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene01 from './Scene01'
import { StatsGl } from '@react-three/drei'
import Scene02 from './Scene02';
import { TunnelR3f } from './TunnelR3f';
import { useEffect, useRef } from 'react';
import { useCountStore } from './CountStore';
import Scene03 from './Scene03';

function App() {
  const incrementCount=useCountStore((state)=>state.increseCount);

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      incrementCount();
    },1000*0.1);
    return ()=>{
      clearInterval(intervalId);
    }
  },[])

  const containerRef=useRef<HTMLDivElement>(null!);
  return (
    <>
      <div style={{
        position:"fixed",
        left:0,
        top:0,
        width:"100%",
        height:"100%",
      }}>
        <Canvas eventSource={containerRef} shadows={'soft'}>
          <StatsGl/>
          <TunnelR3f.Out/>

        </Canvas>
      </div>
      <div ref={containerRef} style={{
          position:"relative",
      }}>
        <Scene01/>
        <Scene02/>
        <Scene03/>
      </div>

    </>
  )
}

export default App
