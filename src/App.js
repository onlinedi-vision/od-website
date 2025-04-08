
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom';
import React from 'react';
import './Main.css';
import { Navbar, Container} from 'react-bootstrap';
import { SearchBar } from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie'

import Main from './Main.js';
import Login from './Login.js';
import Sessions from './Sessions.js'
import ScrollToTop from './components/ScrollToTop';
import Session from './Session';

async function get_sessions(user) {
  return {
    sessions: [
      {
        id: "asdsadsad",
        title: "Sesiunea 1"
      },
      {
        id: "adasdasd",
        title: "Sesiunea 2"
      }
    ],
    recommended: [
      {
        id: "asdsadsad",
        title: "Recomandarea 1"
      },
      {
        id: "adasdasd",
        title: "Recomandarea 2"
      }
    ]
  };
}


function NavigationBar() {
  const location = useLocation(); 

  if (location.pathname !== '/') {
    return null; 
  }

  return (
    <Navbar expand="lg" className="navbar fixed-top">
      <Container fluid>
        <SearchBar /> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <CookiesProvider>
	  <BrowserRouter>
      <div className="App">
        {/* Afișăm navbar-ul doar pe rutele care nu sunt /login */}
        
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sessions" element={<Sessions />} /> {/* Ruta pentru sesiuni */}
          <Route path="/login" element={<Login />} />
          <Route path="/session" element={<Session />} />
        </Routes>
      </div>
    </BrowserRouter>
	  </CookiesProvider>
  );
}

export default App;
