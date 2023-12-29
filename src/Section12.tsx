import { Float, PerspectiveCamera,  View } from "@react-three/drei";
import { TunnelR3f } from "./TunnelR3f";
import { PrimitiveProps, useLoader } from "@react-three/fiber";
import {GLTFLoader} from "three-stdlib";
import * as THREE from "three";
import { useRef } from "react";

function SuzanneHigh(props:Partial<PrimitiveProps>) {
  const gltf = useLoader(GLTFLoader, "./models/SuzanneHigh.glb");
  const merged=Object.assign(
    Object.assign({},props),
    {
      object:gltf.scene.clone()
    }
  );
  merged.object.traverse((object3d)=>{
    if(object3d instanceof THREE.Mesh){
      object3d.castShadow=true;
      object3d.receiveShadow=false;
      object3d.material.side=THREE.FrontSide
    }
  })
  
  return (
    <primitive {...merged}/>
  );
}



function MyScene(){
  
  return (
    <>

    <color attach="background" args={["white"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={10}>
      <SuzanneHigh/>
    </Float>
    </>
  );

}

export default function Scene12(){
  console.log("Scene12");
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