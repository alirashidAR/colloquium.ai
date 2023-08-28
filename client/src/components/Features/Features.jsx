import React, { useEffect } from 'react';
import './features.css';
import img from '../../Assets/features.jpg';
import img2 from '../../Assets/freecourses.jpg';
import img3 from '../../Assets/resume.jpg';
import img4 from '../../Assets/mentors.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img,
    featureTitle: 'Check your Interview Score with AI',
    description: "Utilizing AI-driven assessment to gauge interview performance and provide actionable insights",
  },
  {
    id:2,
    imgSrc: img2,
    featureTitle: 'Access Free Courses',
    description: "Unlock a world of knowledge with a diverse range of free online courses tailored to enhance your skills and expand your horizons."
  },

  {
    id:3,
    imgSrc: img3,
    featureTitle: 'Build Great Resumes',
    description: "Crafting compelling resumes that highlight achievements, skills, and experience to make a strong impression on potential employers."
  },

  {
    id:4,
    imgSrc: img4,
    featureTitle: 'Get Personal Guidance',
    description: "Connect with mentors and guides to improve exponentially under their expert guidance."
  }
];

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='features'>
      <div className='secTitle'>
        <h1 data-aos='fade-right' className='title'>
          Crack Interviews Faster!
        </h1>
      </div>

      <div data-aos='fade-up' className='secContent grid'>
        {Data.map(({ id, imgSrc, featureTitle, description }) => (
          <div key={id} className='featuremenu'>
            <div className='imageDiv'>
              <img src={imgSrc} alt={featureTitle} />
            </div>

            <div className='cardInfo'>
              <h4 className='destTitle'>{featureTitle}</h4>
              <div className='desc'>
                <p>{description}</p>
              </div>

              <button className='btn flex'>
                TEST NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default Features;