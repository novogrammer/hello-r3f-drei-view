import { Backdrop, Environment, Float, PerspectiveCamera,  View } from "@react-three/drei";
import { useRef, useState } from "react";
import { TunnelR3f } from "./TunnelR3f";

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
      </View>
    </TunnelR3f.In>
  </>;
}