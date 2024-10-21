import React from 'react'
import location from '../assets/Images/KA-Location.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faCity} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  return (
    <div>
        <div className="location">
            <h3>Our Location</h3>
            <div className="location-details">
                <div className="location-img">
                <img className=''
                    src={location}
                    alt=''
                    />
                </div>
                <div className="location-txt">
                    <p className='title'><FontAwesomeIcon icon={faBusinessTime} className='business' />   Kuria and Associates Advocates</p>
                    <p className='located'><FontAwesomeIcon icon={faLocationDot} className='lct' /> Kahawa Wendani - Next to Magunas Supermarket</p>
                    <p className='building'><FontAwesomeIcon icon={faCity} className='city' />   2nd Floor, Meltpot Building</p>
                    <p className='phone-2' ><FontAwesomeIcon icon={faPhone} className='call' />   +254717604898</p>
                    <p className='gmail'>  <FontAwesomeIcon icon={faEnvelope} className='email' />   kuriaadvocates@gmail.com</p>
                   <p>Pay us a visit; find our location through</p> <a  className='pin' href="https://www.google.com/maps/place/1%C2%B011'47.0%22S+36%C2%B055'29.0%22E/@-1.1963845,36.9221574,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.1963845!4d36.9247323?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">Google Maps</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Location