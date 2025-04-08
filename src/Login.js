// Login.js
import React, {act, useRef, useState} from 'react';
import './Login.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage} from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import { useCookies } from 'react-cookie';

function RotatingModel({ position, scale = 1 , path = "/book.glb"}) {
  const { scene } = useGLTF(path); // Asigură-te că e în /public
  const ref = useRef();
  let change = 0.0001;
  let accumchange = 0;
  let max = 0.02;
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
  let [state, setState] = useState(1);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState(""); 

  let navigate = useNavigate();
  
  const [cookies, setCookie] = useCookies(['user']);

  
  return(
  <div className="login-page">
          <div className="login-container">
          <h3 style={{color: "#d11f31a", fontSize:40}}><b><i>onlinedi/vision</i></b></h3>
          <pre><b>Slashing* division online.</b></pre>
          <p style={{textAlign: "center", color: "white", fontSize: 14, marginBottom: 0, marginTop: 20}}><i>quick install</i></p>
          <div className="install" >
          <div className="terminal">
            <p style={{margin:2, fontSize:14}}> $ bash &lt;$(wget -qO- https://onlinedi.vision/cdn/install/i.sh)</p>
          </div>
          </div>
          <p style={{textAlign: "center", color: "white", fontSize: 14, marginBottom: 0, marginTop: 20}}><i>install from source (README.md)</i></p>
          <div className="install" >
          <div className="terminal">
            <p style={{margin:2, fontSize:14}}> $ git clone https://github.com/onlinedi-vision/od-client.git</p>
          </div>
          </div>
       </div>
        
    <div className='canvas-side'>
        <Canvas dpr={[1,1]} shadows camera={{ fov: 100 }} style={{ backgroundColor:"black", position: "absolute", top: 0, left: '0%', height: "100%", width: "100%" }}>
            <Stage environment={"sunset"}>
              <RotatingModel scale={40} position={0,0,0} path={'./heart.glb'}  />
          </Stage>
        </Canvas>
       </div>
    </div>
  );
}
export default function Login() {
  console.log("test");
  return (
    <>
   <Page/>
    </>
  );
}


