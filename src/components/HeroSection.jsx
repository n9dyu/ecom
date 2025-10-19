import React from 'react'
import v1 from "../assets/v1.png"
import cup from "../assets/cup.png"

function HeroSection() {
  return (
    <section id="hero">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Zcoop.</h1>
            <h2>CRAFTED COLD. SERVED BOLD.</h2>
            <p>
              Satisfy your cravings with freshly churned ice cream, packed with flavor 
              and delivered to your door — because every day deserves a sweet ending.
            </p>
            <a href="#" className="hero-btn">SCOOP NOW!</a>
          </div>

          <div className="hero-right">
            <img src={cup} alt="Ice Cream Cup" />
          </div>
        </div>

        <img src={v1} alt="Background Drip" className="hero-drip" />
      </section>
    </section>
    
  )
}

export default HeroSection
