import { Float, PerspectiveCamera, Sampler, View } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";
import * as THREE from "three";


function MyScene(){
  const geometry=new THREE.TorusKnotGeometry(1,0.3);
  const material=new THREE.MeshStandardMaterial({
    color:"magenta",
  });
  const transformFn=({dummy,sampledMesh, position, normal}:{dummy:THREE.Object3D,sampledMesh:THREE.Mesh,position:THREE.Vector3,normal:THREE.Vector3})=>{
    dummy.scale.setScalar(Math.random()*0.01+0.03);
    const worldPosition=sampledMesh.localToWorld(position);
    dummy.position.copy(worldPosition);
    dummy.lookAt(normal.clone().add(position));
    // dummy.rotation.y+=(Math.random()-0.5)*(Math.PI*0.5);
    // dummy.rotation.z+=(Math.random()-0.5)*(Math.PI*0.5);
    // dummy.rotation.x+=(Math.random()-0.5)*(Math.PI*0.5);
  };
  return (
    <>
    <color attach="background" args={["white"]}/>
    <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
    <ambientLight intensity={0.6} />
    <directionalLight intensity={1.0} position={[0, 3, 5]}/>
    <Float rotationIntensity={10}>
      <Sampler
        // weight={'normal'}
        count={1000}
        transform={transformFn}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <instancedMesh args={[geometry,material,1000]}>
        </instancedMesh>
      </Sampler>
    </Float>
    </>
  );

}

export default function Scene07(){
  console.log("Scene07");
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