import { Float, PerspectiveCamera,  View } from "@react-three/drei";


interface HeroProps{
  track:React.MutableRefObject<HTMLElement>;
}

export default function Hero({track}:HeroProps){
  if(track.current===null){
    return undefined;
  }
  return <>
    <View track={track}>
      <color attach="background" args={["hotpink"]}/>
      <PerspectiveCamera makeDefault position={[0,0,5]} fov={30} />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1.0} position={[0, 3, 5]}/>
      <Float>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </Float>
      
    </View>
  </>;
}