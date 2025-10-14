import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Login from './components/Login.jsx'

import Navbar from './components/Navbar.jsx'
import CartModal from './components/CartModal.jsx'

import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx'
import Discover from './components/Discover.jsx'
import Origin from './components/Origin.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartToggle={() => setCartOpen(!cartOpen)}/>

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <About />
      <Discover />
      <Origin/>
      <FAQ/>
      {/* <Footer /> */}
      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)}/>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/login" element={ <Login />}/>
      </Routes>
    </Router>
  )
}

export default App
