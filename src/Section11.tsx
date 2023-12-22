import { Cloud, Clouds, Float, PerspectiveCamera, View } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";
import * as THREE from "three";


function MyScene(){
  return (
    <>
    <color attach="background" args={["skyblue"]}/>
    <PerspectiveCamera makeDefault position={[0,0,20]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={10}>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud segments={40} bounds={[1, 0.2, 0.2]} volume={10} color="white" fade={100} />
        <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
      </Clouds>
    </Float>
    </>
  );

}

export default function Scene11(){
  console.log("Scene11");
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