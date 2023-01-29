import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            
          </div>
        </div>
        <div className="about__content">
   
          <p>
          I am a passionate front-end developer with a love for design. I love to make the website look beautiful. 
          I am also learning MERN stack development
          I am also a WEB3 enthusiast. Learning BlockChain development. 
          <br/>And yeah!!! sometimes I write too.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;