import { Float, PerspectiveCamera, SpotLight, View } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";
import * as THREE from "three";


function MyScene(){
  const target=new THREE.Object3D();
  return (
    <>
    <color attach="background" args={["black"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.2} />
    {/* <directionalLight intensity={1.0} position={[0, 3, 5]}/> */}
    {/* <spotLight /> */}
    <primitive object={target}/>
    <SpotLight
      castShadow
      penumbra={0.2}
      radiusTop={0.1}
      radiusBottom={40}
      distance={80}
      angle={0.6}
      attenuation={1}
      anglePower={5}
      intensity={1}
      opacity={0.5}
      position={[0.5,1,0]}
      target={target}
  />
    <fog attach="fog" args={['#202020', 5, 20]} />
    <Float rotationIntensity={10}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Float>
    </>
  );

}

export default function Scene06(){
  console.log("Scene06");
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