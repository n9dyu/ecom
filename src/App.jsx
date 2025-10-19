import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Login from './components/Login.jsx'
import Register from './components/Register.jsx';

import Navbar from './components/Navbar.jsx'
import CartModal from './components/CartModal.jsx'
import ProfileModal from "./components/ProfileModal.jsx";

import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx'
import Discover from './components/Discover.jsx'
import Origin from './components/Origin.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [isProfileOpen, setProfileOpen] = useState(false);

  const handleAddToCart = (flavor) => {
    console.log("Adding to cart:", flavor);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === flavor.name);
      if (existing) {
        return prev.map((item) =>
          item.name === flavor.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...flavor, quantity: 1, price: Number(flavor.price) }];
    });
  };

  const handleQuantityChange = (flavorName, type) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === flavorName
            ? {
                ...item,
                quantity:
                  type === "increase"
                    ? item.quantity + 1
                    : Math.max(1, item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (itemName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName));
  };

  const handleClearCart = () => {
    setCartItems([]); // clear all items
  };

  return (
    <>
      <Navbar 
        onCartToggle={() => setCartOpen(!cartOpen)}
        onProfileToggle={() => setProfileOpen(!isProfileOpen)}
      />

      <div className="mx-auto pt-10">
        <HeroSection />
      </div>
      <About />
      <Discover onAddToCart={handleAddToCart} />
      <div className="mx-auto pt-20">
        <Origin />
      </div>
      <FAQ />
      <Footer />

      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={ <Home />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/register" element={ <Register />}/>
      </Routes>
    </Router>
  )
}

export default App
