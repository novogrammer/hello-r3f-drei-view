import { Float, PerspectiveCamera, View, useVideoTexture } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";


function MyScene(){
  const catVideoTexture = useVideoTexture("./videos/Cat_silhouette.mp4");
  return (
    <>
    <color attach="background" args={["white"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={10}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={catVideoTexture} />
      </mesh>
    </Float>
    </>
  );

}

export default function Scene08(){
  console.log("Scene08");
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