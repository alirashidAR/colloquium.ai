import React, {useState} from 'react'
import './navbar.css'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  
  const removeNavbar = ()=>{
      setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <h1>Colloquium.ai</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href = '#' className='navLink'>About Us</a>
            </li>
            <li className='navItem'>
              <a href = '#' className='navLink'>Features</a>
            </li>
            <li className='navItem'>
              <a href = '#' className='navLink'>Dashboard</a>
            </li>
            <li className='navItem'>
              <a href = '#' className='navLink'>Logout</a>
            </li>

            <li className='navItem'>
              <a href = '#' className='navLink'>Sign In</a>
            </li>
            <button className='btn'>
              <a href='#'>Create Account</a>
            </button>
          </ul>
          <div onClick={removeNavbar}
          className='closeNavbar'>
            <AiOutlineClose className="icon"/>
          </div>
        </div>

        <div onClick={showNav}
        className='toggleNavbar'>
          <RxHamburgerMenu className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar