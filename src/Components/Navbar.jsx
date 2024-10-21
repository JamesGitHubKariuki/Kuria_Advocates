import React from 'react'
import logo from '../assets/Images/Logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {


  return (
    <div>
        <header>
            <div className="logo">
                <img className=''
                src={logo}
                alt=''
                 />
            </div>
            <nav>
               <ul><li><a href='/Home'>Home</a></li></ul>
               <ul><li><a href='/About'>About</a></li></ul>
               <ul><li><a href='/Practices'>Practices</a></li></ul>
                </nav> 
            <div className="contact">
            <FontAwesomeIcon icon={faPhone} className='phone' /> +254717604898<br></br>+254701924289 
            </div>       
        </header>
        </div>
  )
}

export default Navbar