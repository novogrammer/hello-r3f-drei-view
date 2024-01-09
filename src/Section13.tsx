import { Float, PerspectiveCamera, Svg, View } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";
import * as THREE from "three";


function MyScene(){
  const tigerRef=useRef<THREE.Object3D>(null);
  useEffect(()=>{
    if(!tigerRef.current){
      throw new Error("tigerRef.current is null");
    }
    const tiger=tigerRef.current;
    tiger.traverse((object3d:THREE.Object3D)=>{
      if(object3d instanceof THREE.Mesh){
        const mesh=object3d;
        mesh.material.transparent=false;
      }
    })
    
  },[])
  return (
    <>
    <color attach="background" args={["green"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={10} position={[-1,0,0]}>
      <Suspense fallback={null}>
        <Svg ref={tigerRef} src="svgs/tiger.svg" scale={1/500} position={[-0.5,0.5,0]}/>
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