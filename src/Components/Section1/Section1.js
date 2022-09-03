import React from "react";
import logo from "../../Assets/netflix.png";
import rightarrow from "../../Assets/right-arrow1.png";

import "./Section1.css";

const Section1 = () => {
  return (
    <section className="section1">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="langgg">
          <img style={{width:"24px",height:"24px"}} src={require("../../Assets/globe.png")} alt="" />
        <div id="google_translate_element"></div>
        </div>
        <div className="button">
          <button>Sign In</button>
        </div>
      </nav>

      <div className="content">
        <h1>Unlimited movies,TV</h1>
        <h1> shows and more.</h1>
        <div className="para">
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
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
  );
};

export default Section1;
