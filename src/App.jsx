import './App.css'
import Navbar from './components/Navbar'; // default export...
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { createBrowserRouter } from 'react-router-dom';
import Offers from './components/Offers';

function App() {

  return (
    <div>
      <Navbar />
      <Hero/>
      <Features/>
      <Footer/>
      <Offers/>
    </div>
    
  );
}

export default App
