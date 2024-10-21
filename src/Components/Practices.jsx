import React from 'react'
import re from '../assets/Images/Real Estate.jpg';
import fl from '../assets/Images/Family Law.jpg';
import el from '../assets/Images/Employment.jpg';
import cl from '../assets/Images/Corporate Law.jpg';
import bl from '../assets/Images/Banking.jpg';
import tl from '../assets/Images/Fin Tech.jpg';

const Practices = () => {
  return (
    <div>
        <div className="jobs">
            <h3>Areas of Practice</h3>
            <div className="job-actual">
       <div className="job-1">
        <div className="job-left">
        <img className=''
            src={re}
            alt='' />
            <p>Conveyancing and Real Estate Law</p>
            </div>
            <div className="job-right">
        <img className=''
            src={fl}
            alt='' />
            <p>Family Law</p>
            </div>
        </div>
        <div className="job-2">
        <div className="job-left">
        <img className=''
            src={el}
            alt='' />
            <p>Employment and Labor Law</p>
            </div>
            <div className="job-right">
        <img className=''
            src={cl}
            alt='' />
             <p>Corporate and Commercial Law</p>
             </div>
        </div>
        <div className="job-3">
        <div className="job-left">
        <img className=''
            src={bl}
            alt='' />
            <p>Banking Law</p>
        </div>
        <div className="job-right">
        <img className=''
            src={tl}
            alt='' />
            <p>Tech Law</p>
        </div>
        </div>
        </div>
       </div>
       <div className="otherp">
       <p>We also provide competent representation in other legal matters</p> <a href="/Practices">Other Practices</a>
       </div>
       </div>
  )
}

export default Practices