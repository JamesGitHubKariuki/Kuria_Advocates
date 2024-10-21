import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faScaleBalanced} from '@fortawesome/free-solid-svg-icons';
import {faMicrochip} from '@fortawesome/free-solid-svg-icons';
import {faAward} from '@fortawesome/free-solid-svg-icons';
import {faBrain} from '@fortawesome/free-solid-svg-icons';
import {faHandshake} from '@fortawesome/free-solid-svg-icons';



const HireUs = () => {
  return (
    <>
    <div className="hire">
    <h3>Why Hire Us</h3>
    <p>A strong principled sense of social responsibility drives our lawyers to
            represent clients with skill, compassion and integrity.
        </p>
        
        <div className="h-class">
        <h4> <FontAwesomeIcon icon={faScaleBalanced} className='icon'/> Service Above All</h4>
        <p>We prioritize your needs and those of our partners, going the extra mile<br></br> to ensure your experience is exceptional. Empathy and honesty are the heart of our client relationships.
        </p>
        </div>
        <div className="h-class">
        <h4> <FontAwesomeIcon icon={faMicrochip} className='icon'/> Embracing Technology</h4>
        <p>We leverage technology to make your legal experience efficient and smooth,<br></br> allowing us to focus more on crafting tailored solutions for your unique situation.
        </p>
        </div>
        <div className="h-class">
       <h4>  <FontAwesomeIcon icon={faAward} className='icon'/> Pursuing Excellence</h4>
        <p>Our dedication to efficiency doesn't compromise the quality of our legal work.<br></br> We strive for excellence in every document, negotiation, and interaction.
        </p>
        </div>
        <div className="h-class">
        <h4> <FontAwesomeIcon icon={faBrain} className='icon'/> Anticipating Your Needs</h4>
        <p>We proactively identify obstacles and opportunities, embodying a "How can I help?" attitude <br></br>that underscores our commitment to your success. Empathy and honesty are the heart of our client relationships.
        </p>
        </div>
        <div className="h-class">
        <h4> <FontAwesomeIcon icon={faHandshake} className='icon'/> Elevated Professionalism</h4>
        <p>We maintain a high level of competence, ethics, and respect in our work.<br></br>Our professionalism ensures your experience is both dignified and constructive.
        </p>
             </div>
             </div>
    </>
  )
}

export default HireUs