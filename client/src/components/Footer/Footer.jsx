import React,{useEffect} from 'react'
import '../Footer/footer.scss'
import {AiOutlineTwitter, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { init } from 'aos'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className='secContent container'>
        <div className='footerCard flex'>
          <div data-aos="fade-up" className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                Colloquium.ai
              </a>
            </div>

            <div className="footerParagraph">
            Prepare for success with our comprehensive interview resources and expert guidance. Boost your confidence and nail your next interview with Prep Interview.
            </div>

            <div className='footerSocails flex'>
              <AiOutlineTwitter className="logo" />
              <AiFillYoutube className="logo" />
              <AiFillInstagram className="logo" />
            </div>
          </div>

          <div data-aos="fade-up" className='footerLinks grid'>
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Payment
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Resources
              </li>

            </div>

            <div className='linkGroup'>
              <span className='groupTitle'>
                PERSONAL REPORT
              </span>

              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Mock Interview
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Dashboard
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Score
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Materials
              </li>

            </div>

            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR MENTORS
              </span>

              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Nimisha Kumari
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Shashank Suggala
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Archit Patro
              </li>

            </div>
          </div>

          <div className='footerDiv flex'>
            <small>COPYRIGHTS RESERVED - COLLOQUIUM.ai 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer