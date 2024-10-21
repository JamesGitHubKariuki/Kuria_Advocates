import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import About from '../Components/About';
import Practices from '../Components/Practices';
import HireUs from '../Components/HireUs';
import CustomerReview from '../Components/CustomerReview';
import Location from '../Components/Location';
import ContactForm from '../Components/ContactForm';






const HomePage= () => {
 return (
<>
      <Navbar />
      <HeroSection />
      <About />
      <Practices />
      <HireUs />
      <CustomerReview />
      <Location />
      <ContactForm />
    </> 
 )
}



export default HomePage
