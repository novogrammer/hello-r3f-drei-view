import { Float, PerspectiveCamera, Stars, View } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";


function MyScene(){
  return (
    <>
    <color attach="background" args={["black"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    
    <Float rotationIntensity={10}>
      <Stars
      radius={10}
      depth={5}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}

      />
    </Float>
    </>
  );

}

export default function Scene10(){
  console.log("Scene10");
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