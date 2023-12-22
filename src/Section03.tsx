import { Backdrop, Environment, Float, MeshDistortMaterial, PerspectiveCamera,  View } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";


export default function Section03(){
  console.log("Section03");
  const trackRef = useRef<HTMLDivElement>(null!);
  return <>
    <div ref={trackRef} style={{
      width:"100%",
      height:"100svh",
    }} />
    <TunnelR3f.In>
      <View track={trackRef}>
        <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
        <ambientLight intensity={0.2} />
        <directionalLight castShadow intensity={2.0} position={[0, 3, 5]}/>
        <Backdrop
          receiveShadow
          floor={0.25}
          segments={20}
          scale={2}
          position={[0,-0.75,0]}
        >
          <meshStandardMaterial roughness={1} metalness={0}/>
        </Backdrop>
        <Float>
          <mesh castShadow>
            <icosahedronGeometry args={[0.5,4]}/>
            <MeshDistortMaterial distort={0.6} color={'orange'} roughness={0} metalness={0.75} />
          </mesh>;
        </Float>
        <Environment
        background={true}
          preset="city"
        />
      </View>
    </TunnelR3f.In>
  </>;
}