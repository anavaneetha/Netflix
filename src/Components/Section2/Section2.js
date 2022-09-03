import React from 'react'
import tv from "../../Assets/tv.png";
import "./Section2.css";
import video from "../../Assets/tv-video.mp4";


const Section2 = () => {
  return (
    <section className='section2'>

        
        <div className='para'>
        <h1>Enjoy on your TV.</h1>
        <p>Watch on smart TVs, PlayStation, Xbox,<br></br> Chromecast, Apple TV, Blu-ray players and<br></br> more.</p>
    </div>
    
     <div className="tvvideo">
     <img src={tv} alt="" /> 
       <video src={video} autoPlay loop muted></video>
    
     </div>



    </section>
   
  )
}

export default Section2