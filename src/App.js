import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutPage from '../src/Pages/AboutPage';
import HomePage from '../src/Pages/HomePage';
import PracticesPage from '../src/Pages/PracticesPage';
import Loader from './Components/Loader';
import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
  }, [])
  
  

  return (
   <div>
    {loading?<Loader />:<>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/Home' element={<HomePage />}/>
        <Route path='/About' element={<AboutPage />}/>
        <Route path='/Practices' element={<PracticesPage />}/>
      </Routes>
      </BrowserRouter>
      </>}
      </div> 
     
  );
}

export default App;
