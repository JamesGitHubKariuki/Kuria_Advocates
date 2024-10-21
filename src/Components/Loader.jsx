import React from 'react'
import db from '../assets/Images/Dual Ball@1x-1.0s-200px-200px.gif';
import {useState, useEffect} from 'react';



const Loader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      }, 3000);
    }, [])
  return (
    <>
    <div className="load">
         <img className=''
            src={db}
            alt='' />
          
       <span className='ld'>
       <h3> 
       Destiny Is Not a Matter of Chance: It is a Matter of Choice
        </h3>
        </span>
        
         </div>
        </>
  )
}

export default Loader