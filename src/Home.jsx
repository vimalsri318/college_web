import React from 'react';
import './App.css'
import logo from "./assets/Screenshot_2024-05-12_at_2.35.36_PM-removebg-preview.png"
import im from "./assets/Screenshot 2024-05-13 at 5.40.42 PM.png"
const Home = () => {
  return (
    <div className="home">
      <div className="homeChild" />
      <div className="homeItem" />
      <div className="homeInner" />
      <div className="rectangleDiv" />
      <div className="applyNow">Apply now</div>
      <div className="moreDetails">More Details</div>
      <div className="getStarted">Get started</div>
      <div className="about">About </div>
      <div className="life">Life@</div>
      <div className="placements">Placements</div>
      <img className="lineIcon" alt="kj" src={im} />
      <div className="letsStartYourContainer">
        Let’s start your education journey at <span className="presidencyCollege">Presidency college</span>
      </div>
      <div className="figmaIpsumComponent">
        Figma ipsum component variant main layer. Vector horizontal union frame device inspect ipsum flatten blur. Slice vertical vector scrolling style ellipse horizontal rectangle arrow shadow.
      </div>
      <img className="homeChild1" alt="" src={im}/>
      <div className="homeChild2" />
      <div className="colMd6">
        <img className="thumbConceptIcon" alt="vfv" src={im} />
      </div>
      <div className="homeChild3" />
      <img className="rectangleIcon" alt="" src="" />
      <div className="ellipseDiv" />
      <img className="image221Icon" alt="" src={logo} />
      <img className="image227Icon" alt="" src="/image-227@2x.png" />
      <img className="image228Icon" alt="" src="/image-228@2x.png" />
      <img className="image229Icon" alt="" src="/image-229@2x.png" />
      <img className="image230Icon" alt="" src="/image-230@2x.png" />
      <div className="homeChild4" />
      <div className="ranked11">
        <p className="stateLevel">Ranked#11</p>
      </div>
      <div className="indiasTopRankedPrivate">
        India’s Top-ranked private autonomous ASC colleges (2024)
      </div>
      <div className="component1">
        <div className="component11">
          <div className="ranked1InContainer">
            <p className="ranked3"><b>Ranked#3</b></p>
            <p className="stateLevel">State Level - Karnataka’s Best </p>
            <p className="stateLevel">Top Ranked Private Autonomous College - Education world 2022</p>
          </div>
          <div className="ranked1InContainer1">
            <p className="ranked3"><b>Ranked#3</b></p>
            <p className="stateLevel">State Level - Karnataka’s Best </p>
            <p className="stateLevel">Top Ranked Private Autonomous College - Education world 2022</p>
          </div>
          <div className="ranked1InContainer2">
            <p className="ranked3"><b>Ranked #1</b></p>
            <p className="stateLevel">In top Region Institute South</p>
            <p className="stateLevel">Zone by Times Annual BBA </p>
            <p className="stateLevel">Survey </p>
          </div>
          <div className="ranked1InContainer3">
            <p className="ranked3"><b>Ranked #1</b></p>
            <p className="stateLevel">In top Region Institute South</p>
            <p className="stateLevel">Zone by Times Annual BBA </p>
            <p className="stateLevel">Survey </p>
          </div>
          <div className="ranked3StateContainer">
            <p className="ranked3"><b>Ranked #1</b></p>
            <p className="stateLevel">In affiliated college category,</p>
            <p className="stateLevel">Top BA Colleges in Bengaluru</p>
          </div>
        </div>
      </div>
      <img src={logo} alt='d'/>
    </div>
    
    
  );
};

export default Home;
