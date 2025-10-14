import { Menu, X, ShoppingBag } from "lucide-react"
import icon from "../assets/icon.png"
import { navItems } from "../constants"

import CartModal from "./CartModal"

import { useState } from "react"

function Navbar({ onCartToggle }) {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <div className="flex justify-between items-center">

                    <div className="nav-logo">
                        <img className="h-15 w-15 mr-2" src={ icon } alt="logo"/>
                    </div>

                    <ul className="hidden lg:flex ml-14 space-x-12 list-none">
                        {navItems.map ((item, index) => (
                            <li key={index}>
                                <a href={ item.href } className="nav-list">{ item.label }</a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-cart">
                        <button onClick={onCartToggle} className="size-5 text-[#A20100]">
                            <ShoppingBag />
                        </button>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                        
                </div>

                {mobileDrawerOpen && (
                    <div className="drawer-bg">
                        <ul className="">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>

                        <div className="felx-space-x-6">
                            <button onClick={onCartToggle} className="cart">Cart</button>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar