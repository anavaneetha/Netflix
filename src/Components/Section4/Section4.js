import React from 'react'
import device from "../../Assets/device.png";
import "./Section4.css";
import video from "../../Assets/video2.mp4"


const Section4 = () => {
  return (
    <section4 className='section4'>
        <div className='para'>
        <h1>Watch everywhere.</h1>
        <p>Stream unlimited movies and TV shows on<br></br> your phone, tablet, laptop, and TV.</p>
    </div>
     <div className="device">
    
     <video src={video} autoPlay loop muted></video>
     <img src={device} alt="" /> 
     </div>

    </section4>
    
  )
}

export default Section4