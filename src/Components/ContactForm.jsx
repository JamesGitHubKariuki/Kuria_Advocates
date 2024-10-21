import React from 'react'
import { useRef,} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'





export const ContactUs = () => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0uiwdgy', 'template_z0nq6hm', form.current, {
        publicKey: 'PnqIYrewkhYkVThN0',
      })
    
      .then(
        () => {
          Swal.fire({
            title: "All Details Filled!",
            text: "Message Sent!",
            icon: "success"
          });
        },
        () => {
          
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} >
      <div className="foam">
      <h3>Connect with Us</h3>
      <label>Name</label><br></br>
      <input type="text" name="user_name" required className='name' placeholder='First and Last Name'/> <br></br><br></br>
      <label>Phone Number</label><br></br>
      <input type="text" name="user_number" required className='mobile' placeholder='Your Phone Number'/> <br></br><br></br>
      <label>Email</label><br></br>
      <input type="email" name="user_email" required className='email' placeholder='Enter your Email Address'/> <br></br><br></br>
      <label>Message</label><br></br>
      <textarea name="message" required className='info' /> <br></br>
      <button className='btn'>Send Message</button>
      </div>
    </form>
  );
};

// const ContactForm = () => {
//   return (
//  <div>
//         <div className="form">
//             <h3>Connect with Us</h3>
//             <form>
//                 <div className="name">
//                 <label>Name</label><br></br>
//                 <input type='text' placeholder='Name' id='name' ></input>
//                 </div>
//                 <div className="mobile">
//                 <label>Mobile</label><br></br>
//                 <input type='text' placeholder='Mobile Number' id='mobile' ></input>
//                 </div>
//                 <div className="email">
//                 <label>Email</label><br></br>
//                 <input type='text' placeholder='Email' id='email' ></input>
//                 </div>
//                 <div className="info">
//                 <label>Ask a Question </label><br></br>
//                 <textarea name='message' placeholder=''></textarea>
//                 <div className="cont-btn">
//                     <button type='button' name='send' id='send'>Send</button>
//                 </div>
//                 </div>
//                 </form>
//                 </div>
//     </div>
 


export default ContactUs