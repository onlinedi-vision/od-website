
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import InstallPage from './InstallPage.js';

function App() {
  return (
	  <BrowserRouter>
      <div className="App">        
        <Routes>
          <Route path="/" element={<InstallPage />} />
          <Route path="/login" element={<InstallPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
