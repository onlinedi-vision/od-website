
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import InstallPage from './InstallPage.js';

function App() {
  return (
    <>
      <meta content="Di/Vision Online" property="og:title"/>
      <meta content="The Open-Source IRC & VoIP app that's slashing* division online." property="og:description"/>
      <meta content="https://onlinedi-vision.github.io/image.png" property="og:image"/>
  	  <BrowserRouter>
        <div className="App">        
          <Routes>
            <Route path="/" element={<InstallPage />} />
            <Route path="/login" element={<InstallPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
