import { Float, PerspectiveCamera,  View } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";



export default function About(){
  const trackRef = useRef<HTMLDivElement>(null!);
  return <>
    <div ref={trackRef} style={{
      width:"100%",
      height:"100svh",
    }} />
    <TunnelR3f.In>
      <View track={trackRef}>
      <color attach="background" args={["skyblue"]}/>
        <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.0} position={[0, 3, 5]}/>
        <Float>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
          </mesh>
        </Float>
        
      </View>
    </TunnelR3f.In>
  </>;
}