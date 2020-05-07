import React, { Component } from 'react';
// import { Fade } from 'react-slideshow-image';
import './css/slider.css';
import { Slide } from 'react-slideshow-image';
import image1 from './images/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png';
import image2 from './images/slide_3.jpg';
import image3 from './images/slide_2.png';
const slideImages = [
  'Screenshot (1329).png',
  'Screenshot (1330).png',
  'Screenshot (1331).png'
];
 
const properties = {
  duration: 5000,
   transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,

  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class Slider extends Component {
  
  render() {
   
    
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${image1})`, height: "525px !important", }}>
            <span style={{color: "white !important"}}>Your Future Starts Here<p style={{fontSize: "30px !important"}}>THE BEST EDUCATION</p> REACT THEME<br/>
            <button style={{padding: "2px 5px 2px 5px", backgroundColor:"white", boxShadow: "inset 0px 0px 10px black" ,fontSize: "10px !important"}}>Purchase Now</button></span>
           
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${image2})`, height: "525px !important",  backgroundColor: "#0f256e4d !important"}}>
            <span>FIND STUDENTS</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${image3})`, height: "525px !important",  backgroundColor: "#0f256e4d !important"}}>
            <span> To Boost Knowledge</span>
          </div>
        </div>
      </Slide>
    )
    }
  
}

export default Slider
