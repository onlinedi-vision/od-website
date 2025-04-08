// src/components/Sessions.js
import React, {useState} from 'react';
import './Sessions.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { FaRocketchat } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { CgProfile } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import  axios  from 'axios';

function Sessions() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setLoaded] = useState(0);
    const [isPop, setPop] = useState(false);
    const [o_sessions, setSessions] = useState([]);
    const navigate = useNavigate();
    const toggleChat = () => {
        setIsOpen(prevState => !prevState);
    };

    const getSessions = () => {
      const payload = { username: 'alex'};
	let config = {
	      headers: {
		      "Access-Control-Allow-Origin": "*",
		    }
      }
      if(isLoaded === 1) {
        console.log("heeeeeeeeeeeeeeei");
        return {
          recommended: [
            {
              id: "rec1",
              title: "React Basics",
              description: "Learn the basics of React.",
              owner: "Mic",
              },
            {
              id: "rec2",
              title: "Advanced React",
              description: "Dive deeper into React hooks and patterns.",
              owner: "Fruja",
            },
            {
                id: "s4",
                title: "UI/UX Design Essentials",
                description: "Master the basics of user experience and interface design using Figma.",
                owner: "Larisa"
              } 
          ],
          sessions: o_sessions,
        };

      }
      axios.post('https://onlinedi.vision/api/fetch_session_data', payload, config)
        .then(
            resp => {
              setSessions(resp.data.sessions);
              setLoaded(1);
	      console.log(o_sessions);
           }
        ).catch(
          err => {
            setLoaded(1);
            setSessions([]);
          }
        );
	console.log(o_sessions);
        return {
          recommended: [
            {
              id: "rec1",
              title: "React Basics",
              description: "Learn the basics of React.",
              owner: "Mic",
            },
            {
              id: "rec2",
              title: "Advanced React",
              description: "Dive deeper into React hooks and patterns.",
              owner: "Fruja",
            },
            {
                id: "s4",
                title: "UI/UX Design Essentials",
                description: "Master the basics of user experience and interface design using Figma.",
                owner: "Larisa"
              } 
          ],
          sessions: o_sessions,
        };
      };
      

  return (
	
    <div>
      <div className={`pop ${isPop ? '' : 'hide'}`}>
      <div className="inputbar" placeholder='Chat here'>
                     <input className="chatin" placeholder='Title'/>
                    </div>
 <div className="inputbar" placeholder='Chat here'>
                     <input className="chatin" placeholder='Description'/>
                    </div>
 <div className="inputbar" placeholder='Chat here'>
                     <input className="chatin" placeholder='Content'/>
                    </div>
<Button variant="dark">Create</Button>

      </div>
        <div className="top">
        <div className="searchbar" placeholder='Search Session'>
            <input className="searchin" placeholder='Search for session'/>
        </div>
        <button className="pfp" onClick={()=>{setPop(ps => !ps)}}>
            <FaPlus size={20}/>
        </button>
        <button className="pfp">
            <CgProfile size={30}/>
        </button>
    </div>
      <div className='card'>
      <Row>
      <Col>
      <h1>Recommended</h1>
      {getSessions().recommended.map((item) => (
        <Card key={item.id} className='hover-card' style={{ width: '100%', height:'300px', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <p><strong>Author:</strong> {item.owner}</p>
            <Button variant="dark" onClick={()=>{navigate("/session?id="+item.id)}}>Access Session</Button>
          </Card.Body>
        </Card>
      ))}
    </Col>
    <Col>
      <h1>Your Sessions</h1>
      {getSessions().sessions.map((item) => (
        <Card key={item.session} className='hover-card' style={{ width: '100%', height:'300px', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.config}</Card.Text>
            <p><strong>Author:</strong> {item.owner}</p>
            <Button variant="dark" onClick={()=>{navigate("/session?id="+item.session)}}>Access Session</Button>
          </Card.Body>
        </Card>
      ))}
    </Col>
    </Row>
    </div>
    
    </div>
  );
}

export default Sessions;
