import React from 'react'
import KuriaAssociates from '../assets/Images/justice.jpg';
import KAabt from '../assets/Images/KA About.jpg';


const AboutNav = () => {
  return (
    <>
       <div className="about">
        <div className="abtnav-img">
        <img className=''
            src={KuriaAssociates}
            alt='' />
        
        </div>
        <div className="abtnav-txt">
          <p>The law firm is dedicated to providing exceptional legal services with a focus on competence and unwavering commitment to our clients.<br></br><br></br>
          At Kuria and Associates Advocates, we are driven by a profound commitment to justice and a passion for empowering the oppressed. Founded just three years ago, our firm has quickly established itself as a beacon of hope for individuals and communities facing legal challenges.
          Our team of dedicated attorneys combines expertise with compassion, ensuring that every client receives personalized attention and robust representation. We believe that everyone deserves a voice, and we strive to uphold the rights of those who have been marginalized or wronged.<br></br><br></br>With a focus on integrity, advocacy, and social justice, Kuria and Associates Advocates is not just a law firm; we are a community ally dedicated to making a meaningful impact. Join us in our mission to champion justice and restore hope to those in need.
          </p>
          </div>
          </div>
          <div className='about'>
<div className="about-img">
            <img className=''
            src={KAabt}
            alt='' />
        </div>
        <div className="about-txt">
            <p>At our firm, we believe that effective legal representation goes beyond just knowledge of the law; it requires a deep understanding of our clients' unique needs and challenges. We are committed to building lasting relationships based on trust, transparency, and communication. 
              Our mission is to empower clients by providing them with clear guidance and support throughout their legal journey. <br></br><br></br>
              At Kuria and Associates Advocates, we prioritize maintaining open lines of communication with our clients, ensuring they are consistently informed about the progress of their cases. We understand that legal matters can be complex and stressful, which is why we provide regular updates tailored to each client's needs.
                </p>
                
  </div>
  </div>
    </>
  )
}

export default AboutNav