import React from 'react';
import '../../App.css';
import './css/Landing.css';
import landing from '../../assets/images/landing.svg';
import headerwoman from '../../assets/images/typersmall.svg'
import headerbg from '../../assets/images/landingimgbg.svg'
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom'


function Landing() {
  return (
    <>
      <div className="landing">
        <div className="header">
          <img alt="Speare header" src={headerbg}/>
          <img alt="Speare typer" className="typerwoman" src={headerwoman}/>
          <h1 className="headname">speare</h1>
        </div>
        <div className="intro">
          <div className="img-container">
            <img src={logo}></img>
          </div>
          <h2>technology <br/>meets elegancy</h2>
          <p>
            Speare is a language dedicated to bringing the
            beauty and sophistication of the English language to Computer Science.
          </p>
          <div className="butt-container">
            <div className="butt">
              <Link to="/about">about the project</Link>
            </div>
            <div className="butt">
              <a href="https://github.com/MichaelReza/Speare" target="_blank" rel="noreferrer">documentation</a>
            </div>
          </div>
        </div>
        <div className="landing-photo-wrap">
          <div className="landing-photo">
            <img src={landing}></img>
          </div>
          </div>
        </div>
    </>
  )
}

export default Landing;