import React from 'react'
import KuriaAssociates from '../assets/Images/Kuria at Work.jpeg';

const About = () => {
  return (
   <>
   <div className="abth3">
   <h3>Who We Are</h3>
   </div>
   <div className='about'>
   <div className="about-img">
            <img className=''
            src={KuriaAssociates}
            alt='' />
        </div>
        <div className="about-txt">
            <p>Our specialized legal expertise spans various areas, 
                locally and regionally encompassing Arbitration, Asset Tracing & Recoveries, 
                Banking & Finance and Fin Tech just to mention a few.<br></br>  Our diverse clientele comprises 
                local and international entities, governments, regulators, and non-profit organizations 
                across industries such as retail, insurance, maritime & logistics, technology, construction, 
                private equity, education, energy, real estate, financial services, manufacturing & industries, and the public sector.<br></br>
                Our team of experienced attorneys collaborates closely with clients, ensuring that each case receives personalized attention and tailored strategies designed to achieve optimal outcomes.
                </p>
                <div className="about-btn">
                  <a href='/About'>Learn More</a>
                </div>
  </div>
        
        </div>
    </> 
  )
}

export default About