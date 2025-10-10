  // InstallPage.js
import React, {useRef} from 'react';
import './InstallPage.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage} from '@react-three/drei';
import { FaWindows } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { FaFedora } from "react-icons/fa";

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
            <pre style={{marginBottom: "0px", height:"50px"}}><b>Slashing* division online.</b></pre>
          <p style={{textAlign: "center", color: "white", fontSize: 14, marginBottom: 0, marginTop: 10}}><i>install from source</i></p>
          <div className="install" >
          <div className="terminal">
            <p style={{margin:1, fontSize:14}}> $ git clone https://github.com/onlinedi-vision/od-client.git</p>
            <br/>
            <p style={{margin:1, fontSize:14}}> $ cd od-client && npm i && npm run tauri build</p>
          </div>
          </div>

          <p style={{textAlign: "center", color: "white", fontSize: 14, marginBottom: 0, marginTop: 10}}><i>...or use our official installers</i></p>
          <div className="icons">

            <a className="windows-icon-link" href="https://github.com/onlinedi-vision/od-client/releases/latest/download/client.msi">
              <FaWindows size="40px" className="windows-icon"/>
            </a>

            <a className="windows-icon-link" href="https://github.com/onlinedi-vision/od-client/releases/latest/download/client.deb">
              <FaUbuntu size="40px" className="windows-icon"/>
            </a>

            <a className="windows-icon-link" href="https://github.com/onlinedi-vision/od-client/releases/latest/download/client.rpm">
              <FaFedora size="40px" className="windows-icon">
              </FaFedora>
            </a>

            <a className="windows-icon-link" href="https://github.com/onlinedi-vision/od-client/releases/latest">
              <FaGithub size="40px" className="windows-icon">
              </FaGithub>
            </a>
          </div>
       </div>
        
    <div className='canvas-side'>
        <Canvas dpr={[1,1]} shadows camera={{ fov: 100 }} style={{ backgroundColor:"black", position: "absolute", top: 0, left: '0%', height: "100%", width: "100%" }}>
            <Stage environment={"sunset"}>
              <RotatingModel scale={40} position={0, 0, 0} path={'./cat.glb'}  />
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


