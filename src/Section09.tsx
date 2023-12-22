import { Float, PerspectiveCamera, View, useTrailTexture } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";


function MyScene(){
  const [ texture, onMove ] = useTrailTexture();
  return (
    <>
    <color attach="background" args={["white"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={6}>
      <mesh onPointerMove={onMove}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
    </>
  );

}

export default function Scene09(){
  console.log("Scene09");
  const trackRef = useRef<HTMLDivElement>(null!);
  return <>
    <div ref={trackRef} style={{
      width:"100%",
      height:"100svh",
    }}>
    </div>
    <TunnelR3f.In>
      <View track={trackRef}>
        <MyScene/>
        
      </View>
    </TunnelR3f.In>
  </>;
}