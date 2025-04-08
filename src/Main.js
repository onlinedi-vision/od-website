import React, { useEffect, useState } from 'react';
import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";
/*
function Model(props)
{
  const {scene} = useGLTF("/book.glb");
  return <primitive object={scene} {...props}/>
}
function App() {
  return (
    <div className="container mt-5">
      {/* Afișează scena Three.js }
      <Canvas dpr={[1,2]} shadows camera={{ fov: 60 }} style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}>
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.01, Math.PI / 4]}>
          <Stage environment={"sunset"}>
            <Model scale={1.0} />
         </Stage>
        </PresentationControls>
      </Canvas>
    </div>
    
  );
}
*/
import './Main.css'

function App() {
  return (
    <div className="App">
      <h1>Spinning Red Torus</h1>
      <div style={{ height: '80vh', width: '100%' }}>
      </div>
    </div>
  )
}

export default App

