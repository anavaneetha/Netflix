// import React from "react";

import {React,useState} from 'react';
import rightarrow from "../../Assets/right-arrow1.png";
import "./Section6.css";

const Section6 = () => {
    const data=[
        {
            question:" What is Netflix?",
            answers:"Netflix is a streaming service that offers a wide variety of awardwinning TV shows, movies, anime, documentaries and more on thousands of internet-connected",

          
        },
        {
          question:" How much does netflix cost?",
          answers:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to₹ 649 a month. No extra costs, no contracts.",
          
      },
    ];
    const[selected,setSelected] = useState(null)

    const handleSelect=(i)=>{
      if(selected === i){
        return setSelected(null)
      }
      setSelected(i);
    };




  return (
<>
<h1 className="heading">Frequently Asked Questions</h1>

    <section className="section6">
      <div className="item">
        {
          data.map((item,i)=>{
            return(
              <div className="wrapper" key={i} onclick={()=>handleSelect(i)}>
                <div className="question">
                  <h3>{item.question}</h3>
                  <div className={selected===i ? "reverse":""}>
                    <p>+</p>
                  </div>
                </div>
                <div className={selected===i ? "answers show":"answers"}>
                  <p>{item.answers}</p>
                </div>

              </div>
            )
          }
          )
        }
      </div>

      <div className="para">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className="bottom">
        <input type="email" value={"Email address"} />

        <button type="submit">
          Get Started <img src={rightarrow} alt="" />
        </button>
      </div>

      <div className="getstarted">
     
      </div>




    </section>

</>
    






   
  );
};

export default Section6;
