import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag,  UserStar, LogOut} from "lucide-react"
import icon from "../assets/icon.png"
import { navItems } from "../constants"

import { useState } from "react"

function Navbar({ onCartToggle, onProfileToggle, onLogoutToggle}) {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleScroll = (id) => {
        if (location.pathname === "/home") {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        } else {
        navigate(`/home${id}`);
        }
        setMobileDrawerOpen(false);
    };

    return (
        <>
        <nav className="nav-bar">
            <div className="nav-container">
                <div className="flex justify-between items-center">

                    <div className="nav-logo">
                        <img className="h-15 w-15 mr-2" src={ icon } alt="logo"/>
                    </div>

                    <ul className="hidden lg:flex ml-14 space-x-12 list-none">
                        {navItems.map ((item, index) => (
                            <li key={index}>
                                <button onClick={() => handleScroll(item.href)}className="nav-list">{ item.label }</button>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-cart">
                        <button onClick={onCartToggle} className="size-5 text-[#FFB7B7] cursor-pointer">
                            <ShoppingBag />
                        </button>
                        <button onClick={onProfileToggle} className="size-5 text-[#FFB7B7] cursor-pointer">
                            <UserStar />
                        </button>
                        <button onClick={onLogoutToggle} className="size-5 text-[#FFB7B7] cursor-pointer">
                            <LogOut />
                        </button>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button className="text-[#A20100]" onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                        
                </div>

                {mobileDrawerOpen && (
                    <div className="drawer-bg">
                        <div className="flex flex-col">
                            <button onClick={onCartToggle} className="cart">Cart</button>
                            <button onClick={onProfileToggle} className="cart">Profile</button>
                            <button onClick={onLogoutToggle} className="cart">Logout</button>
                        </div>
                    </div>
                )}

            </div>
        </nav>
        </>
    );
}

export default Navbar