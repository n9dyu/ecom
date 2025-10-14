import React from 'react'
import v1 from "../assets/v1.png"

function HeroSection() {
  return (
    <section className=''>
      <div className="hero-container">

        <h1>CRAFTED COLD. SERVED BOLD.</h1>
        
        <p>
          Satisfy your cravings with freshly churned ice cream, packed with flavor 
          and delivered to your door — because every day deserves a sweet ending.
        </p>

        <a href="#" className="hero-btn z-20 relative mt-6">SCOOP NOW!</a>

      </div>

      <div className="hero-image">
        <img src={v1} alt="footer" style={{ display: "block" }}/>
      </div> 
    </section>
    
  )
}

export default HeroSection
