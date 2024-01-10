import { Float, PerspectiveCamera, Svg, View } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";
import * as THREE from "three";
import { MeshBasicMaterialProps, useFrame } from "@react-three/fiber";


function MyScene(){
  const tigerRef=useRef<THREE.Object3D>(null);
  useFrame((_state,dt)=>{
    if(!tigerRef.current){
      throw new Error("tigerRef.current is null");
    }
    const tiger=tigerRef.current;
    tiger.rotateY(dt);
  });
  const fillMaterialProps:MeshBasicMaterialProps={
    transparent:false,
  };
  const strokeMaterialProps:MeshBasicMaterialProps={
    transparent:false,
  };
  return (
    <>
    <color attach="background" args={["green"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={10} position={[-1,0,0]}>
      <Suspense fallback={null}>
        <Svg ref={tigerRef} src="svgs/tiger.svg" scale={1/500} position={[-0.5,0.5,0]} fillMaterial={fillMaterialProps} strokeMaterial={strokeMaterialProps}/>
      </Suspense>
    </Float>
    <Float rotationIntensity={10} position={[1,0,0]}>
      <Suspense fallback={null}>
        <Svg src="svgs/Cat_silhouette.svg" scale={1/500} position={[-0.5,0.5,0]}/>
      </Suspense>
    </Float>
    </>
  );

}

export default function Scene13(){
  console.log("Scene13");
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