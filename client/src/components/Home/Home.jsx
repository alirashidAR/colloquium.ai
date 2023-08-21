import React, {useEffect} from 'react'
import './home.css'
import homeImg from '../../Assets/homeImg.png'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { init } from 'aos'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home'> 
      <div className='overlay'></div>
      <div className='homeContent container'>
        <div data-aos="fade-up" className='textDiv'>
          <h1 className='homeTitle'>
            Colloquium.ai
          </h1>
          <span className='smallText'>
          Revolutionize your interview preparation with our AI-integrated platform. Experience tailored guidance, instant feedback, and curated resources for optimizing your interview skills. Our innovative technology adapts to your progress, empowering you to excel in diverse interview scenarios. Elevate your confidence and competence, ensuring you're well-equipped for success in every interview opportunity.
          </span>
          <div data-aos="fade-up" className='input flex'>
              <input type="text" placeholder="Enter your domain here..."/>
            </div>
            <div data-aos="fade-up"  className='searchOptions flex'>
            <AiOutlineSearch className='icon'/>
            <span>SEARCH</span>
          </div>
        </div>

        <div data-aos="fade-up"  className='imageContainer'>
          <img src={homeImg} alt='interview' />
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className='rightIcons'>
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FiTwitter className="icon"/>
          </div>

          <div className='leftIcons'>
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home