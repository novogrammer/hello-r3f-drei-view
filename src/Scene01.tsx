import { Float, PerspectiveCamera,  View } from "@react-three/drei";
import { useRef, useState } from "react";
import { TunnelR3f } from "./TunnelR3f";

function Box(){
  const [hovered, setHover] = useState(false);
  return <mesh
    onPointerOver={() => setHover(()=>true)}
    onPointerOut={() => setHover(()=>false)}
  >
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}  />
  </mesh>;

}


export default function Scene01(){
  console.log("Scene01");
  const trackRef = useRef<HTMLDivElement>(null!);
  return <>
    <div ref={trackRef} style={{
      width:"100%",
      height:"100svh",
    }} />
    <TunnelR3f.In>
      <View track={trackRef}>
        <color attach="background" args={["hotpink"]}/>
        <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.0} position={[0, 3, 5]}/>
        <Float>
          <Box/>
        </Float>
      </View>
    </TunnelR3f.In>
  </>;
}