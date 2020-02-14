import React from 'react';
import Navigate from './Navbar';
import './App.css';
import 'react-bootstrap';
import "animate.css/animate.min.css";
import ircprize from './img/news/irc-prize.webp'
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (<div>
    <div className="backGrey">
      <Navigate/>
      <Link activeClass="active"
      to="ircnews"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500} 
      style={{position: 'absolute', color: '#ffffff',fontSize: '40px' , marginLeft: '100px', marginTop:'50px'}}>IRC-2020
      </Link>
      <Link activeClass="active"
      to="urcnews"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500} style={{position: 'absolute', color: '#ffffff',fontSize: '40px' , marginLeft: '1620px', marginTop:'50px'}}>URC-2019
      </Link>
      <div className="App">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <section id='ircnews'>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="row" style={{marginLeft: '35%'}}>
            <a style={{color: "#ffffff", fontSize: '50px', margin: '20px', textShadow:'2px 2px 4px #000000'}}>Indian Rover Challenge</a>
        </div>    
        <div className="row" style={{marginLeft: '35%'}}>
            <img src={ircprize} height="400px" width='600px' style={{borderRadius: '15px', boxShadow: '10px 10px #141414'}}></img>
        </div>
      </ScrollAnimation>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </section>
      <section id='urcnews'>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="row">
          <div className="col-md-4">
            <a style={{color: "#ffffff", fontSize: '50px'}}>University Rover Challenge</a>
          </div>
        </div>
      </ScrollAnimation>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </section>
    </div>
    </div>
  );
}

export default App;