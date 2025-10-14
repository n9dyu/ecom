import About from './components/About.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Origin from './components/Origin.jsx'
import FAQ from './components/FAQ.jsx'
import Discover from './components/Discover.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <About />
      <Discover />
      <Origin/>
      <FAQ/>
      {/* <Footer /> */}
      
    </>
  )
}

export default App
