import { Canvas } from '@react-three/fiber'
import './App.css'
import Section01 from './Section01'
import { StatsGl } from '@react-three/drei'
import Section02 from './Section02';
import { TunnelR3f } from './TunnelR3f';
import { useEffect, useRef } from 'react';
import { useCountStore } from './CountStore';
import Section03 from './Section03';
import Section05 from './Section05';
import Section06 from './Section06';
import Section07 from './Section07';
import Section08 from './Section08';
// import Section00 from './Section00';
// import Section04 from './Section04';

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
        {/* <Section00/> */}
        <Section01/>
        <Section02/>
        <Section03/>
        {/* <Section04/> */}
        <Section05/>
        <Section06/>
        <Section07/>
        <Section08/>
      </div>

    </>
  )
}

export default App
