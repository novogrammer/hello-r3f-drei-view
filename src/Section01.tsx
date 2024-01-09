import { Backdrop, Environment, Float, PerspectiveCamera,  View } from "@react-three/drei";
import { useRef, useState } from "react";
import { TunnelR3f } from "./TunnelR3f";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

function Box(){
  const [hovered, setHover] = useState(false);
  return <mesh
    onPointerOver={() => setHover(()=>true)}
    onPointerOut={() => setHover(()=>false)}
    castShadow
  >
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} roughness={0} metalness={0.75} />
  </mesh>;

}

function Scene(){
  return <>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.3} />
    <directionalLight castShadow intensity={2.0} position={[0, 3, 5]}/>
    <Backdrop
      receiveShadow
      floor={0.25}
      segments={20}
      scale={2}
      position={[0,-0.75,0]}
    >
      <meshStandardMaterial/>
    </Backdrop>
    <Float>
      <Box/>
    </Float>
    <Environment
      background={true}
      preset="city"
    />
    <EffectComposer>
      <Noise opacity={0.5} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>

  </>;

}


export default function Section01(){
  console.log("Section01");
  const trackRef = useRef<HTMLDivElement>(null!);
  return <>
    <div ref={trackRef} style={{
      width:"100%",
      height:"100svh",
    }} />
    <TunnelR3f.In>
      <View track={trackRef}>
        <Scene/>
      </View>
    </TunnelR3f.In>
  </>;
}