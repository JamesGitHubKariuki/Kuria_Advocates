import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';


const CustomerReview = () => {
  return (
    <>
    
        <div className="cust">
        <h3>What Clients Say About Us</h3>
          <div className="cust-txt">
                 <p>"My personal experience with Kuria and Associates is all about a dedicated and exclusive service.<br></br> 
                    As the firm grows in size am sure that quality of service will be maintained <br></br> 
                    for each and every client as part of the organisational culture."</p>
                 <h4>Edward Kamweti</h4>
                 </div>
                 <div className="cust-rating">
                 <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' /> <FontAwesomeIcon icon={faStar} className='' /> 
                 </div>
          <div className="cust-txt2">
                 <p>"Kuria and Associates Advocates has qualified lawyers with a strong dedication to clients; They<br></br>
                 walk the talk, go above and beyond the call of duty and deliver as promised."
                 </p>
                 <h4>Peninah Kariuki</h4>
                 </div>
                 <div className="cust-rating">
                 <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' /> <FontAwesomeIcon icon={faStar} className='' /> 
                 </div>
                 <div className="cust-txt2">
                 <p>"I have been privileged to work with Kuria and Associates Advocates and specifically with Mr George Kuria Ndegwa.<br></br>
                Mr Kuria exhibits high professionalism in his work. He is dependable, efficient and consistent in delivering results.<br></br>
                Mr Kuria is approachable with an open mindset towards his clients. 
                Mr Kuria  has provided me with legal services<br></br> for the last 2 years and he has never disappointed."</p>
                 <h4>Kinuthia Mbugua</h4>
                 </div>
                 <div className="cust-rating">
                 <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStar} className='full-star' />  <FontAwesomeIcon icon={faStarHalfStroke} className='full-star' />
                 </div>
</div>
    </>
  )
}

export default CustomerReview