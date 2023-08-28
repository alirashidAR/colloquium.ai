import React, {useEffect} from 'react';
import aboutImage from '../../Assets/aboutus.png';
import './aboutus.css';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { init } from 'aos'

const AboutUs = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="about-container">
      <div data-aos="fade-up" className="about-text">
        <h2>About Us</h2>
        <br></br>
        <br></br>
        <p>
            We are BitByBit a passionate team of five individuals: Ali, Khushi, Anant, Ved and Jahnavi.
            Together we're on a mission to empower job seekers and students providing them with the tools
            they need to excel in interviews and confidently step into their professional journey.
          </p>
          <p>
            Our platform is a labor of love. We understand the challenges that individuals face when preparing
            for interviews and we're committed to making that journey smoother. Through a blend of expertly
            crafted resources, tailor-made interview questions and comprehensive mock interviews we're here
            to transform nervous candidates into confident contenders.
          </p>
          <p>
            With BitByBit, you'll receive personalized schedules, insightful feedback, and access to a library
            of free ebooks and resources. Whether you're a fresh graduate or a seasoned professional seeking to
            pivot, we're dedicated to helping you stand out and shine in any interview scenario.
          </p>
      </div>
      <div data-aos="fade-up" className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs