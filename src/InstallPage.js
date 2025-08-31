// InstallPage.js
import React, {useRef} from 'react';
import './InstallPage.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage} from '@react-three/drei';

function RotatingModel({ position, scale = 1 , path = "/book.glb"}) {
  const { scene } = useGLTF(path); // Asigură-te că e în /public
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.006;
      ref.current.rotation.x += 0.006;
      ref.current.rotation.z += 0.006;
    }
  });

  return <primitive object={scene} position={position} scale={scale} ref={ref} />;
}

const Page = () => {
  return(
  <div className="install-page">
          <div className="install-container">
          <h3 style={{color: "#d11f31", fontSize:40}}><b><i>onlinedi/vision</i></b></h3>
          <pre><b>Slashing* division online.</b></pre>
          <p style={{textAlign: "center", color: "white", fontSize: 14, marginBottom: 0, marginTop: 20}}><i>quick install</i></p>
          <div className="install" >
          <div className="terminal">
            <p style={{margin:1, fontSize:11}}>$ curl https://raw.githubusercontent.com/onlinedi-vision/install/main/i.sh | bash</p>
          </div>
          </div>
          <p style={{textAlign: "center", color: "white", fontSize: 14, marginBottom: 0, marginTop: 20}}><i>install from source (README.md)</i></p>
          <div className="install" >
          <div className="terminal">
            <p style={{margin:1, fontSize:11}}> $ git clone https://github.com/onlinedi-vision/od-client.git</p>
          </div>
          </div>
       </div>
        
    <div className='canvas-side'>
        <Canvas dpr={[1,1]} shadows camera={{ fov: 100 }} style={{ backgroundColor:"black", position: "absolute", top: 0, left: '0%', height: "100%", width: "100%" }}>
            <Stage environment={"sunset"}>
              <RotatingModel scale={40} position={0, 0, 0} path={'./heart.glb'}  />
          </Stage>
        </Canvas>
       </div>
    </div>
  );
}
export default function InstallPage() {
  console.log("test");
  return (
    <>
   <Page/>
    </>
  );
}


