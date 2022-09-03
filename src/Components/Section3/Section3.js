import React from 'react'
import cell from "../../Assets/image.jpg";
import "./Section3.css";

const Section3 = () => {
  return (

    <section className='section3'>
         <div className="cell">
     <img src={cell} alt="" /> 
       
    
     </div>
    <div className='para'>
        <h1>Download your shows<br></br> to watch offline.</h1>
        <p>
        Save your favourites easily and always have<br></br> something to watch.
        </p>

    </div>
        
    </section>
   
  )
}

export default Section3