import { Dodecahedron, Float, PerspectiveCamera,  RenderTexture,  View } from "@react-three/drei";
import { useRef } from "react";
import { TunnelR3f } from "./TunnelR3f";
import { useCountStore } from "./CountStore";



export default function Scene02(){
  console.log("Scene02");
  const trackRef = useRef<HTMLDivElement>(null!);
  const count = useCountStore((state)=>state.count);
  return <>
    <div ref={trackRef} style={{
      width:"100%",
      height:"100svh",
    }}>
      <div>{count}</div>
    </div>
    <TunnelR3f.In>
      <View track={trackRef}>
      <color attach="background" args={["skyblue"]}/>
        <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.0} position={[0, 3, 5]}/>
        <Float rotationIntensity={10}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial>
              <RenderTexture width={512} height={512} attach="map">
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                <color attach="background" args={["orange"]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                <Float rotationIntensity={10}>
                  <Dodecahedron>
                  <meshStandardMaterial color={"cyan"}/>
                  </Dodecahedron>
                </Float>
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
        </Float>
        
      </View>
    </TunnelR3f.In>
  </>;
}