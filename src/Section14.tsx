import { Float, PerspectiveCamera, View,Image } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";


function MyScene(){
  return (
    <>
    <color attach="background" args={["orange"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={10} position={[-1,0,0]}>
      <Image url="images/Lenna.png" scale={[1,2]}/>
    </Float>
    <Float rotationIntensity={10} position={[1,0,0]}>
      <Image url="images/Lenna.png" scale={[2,1]}/>
    </Float>
    </>
  );

}

export default function Scene14(){
  console.log("Scene14");
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