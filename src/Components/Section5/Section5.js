import React from 'react'
import children from "../../Assets/children.png";
import "./Section5.css";

const Section5 = () => {
  return (
    <section5 className='section5'>
     <div className="device">
     <img src={children} alt="" /> 
     </div>
     <div className='para'>
        <h1>Create profiles for<br></br> children.</h1>
        <p>Send children on adventures with their<br></br> favourite characters in a space made just for<br></br> them—free with your membership.</p>
    </div>

    </section5>
    
  )
}

export default Section5