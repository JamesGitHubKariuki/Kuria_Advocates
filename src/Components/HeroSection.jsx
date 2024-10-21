import React from 'react'
import { useTypewriter} from 'react-simple-typewriter'
import is from '../assets/Images/justicevd.mp4';
import gv from '../assets/Images/gavelvd.mp4';
import lw from '../assets/Images/lawyer2.mp4';

const About = () => {
  const [typeEffect] = useTypewriter({
    words: ['A Leading African Law Firm Renowed for Its Comprehensive Range of Legal Services', 'Including Dispute Resolution and Corporate and Commercial Law '],
    loop:{},
    typeSpeed : 75,
    deleteSpeed :30
  })
  
  return (
    <>
      <div className="hero-actual">
   <div className='hero'>
        <h3>
          Kuria and Associates Advocates
          </h3>
        <p className='span'>
        {typeEffect}
        </p>
        </div>
    </div>
    <div className="hsv">
      <video autoPlay muted loop  className='hvd'
                  src={lw}
                  alt=''
                  video/>
                  <video autoPlay muted loop  className='hvd'
                  src={is}
                  alt=''
                  video/>
      <video autoPlay muted loop  className='hvd'
                  src={gv}
                  alt=''
                  video/>
      
      </div>
    </>
  )
}

export default About