import { Facebook, Instagram, Twitter, Linkedin, ShoppingCart, Heart, CircleUser } from "lucide-react";
import logo from '/public/2.png'
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";


function Navbar() {
    const { cartItems } = useCart();
    return (
        <>
            <div className="top py-1">
                <p className="text-sm">Welcome to our  website!</p>
                <div className="top-links">
                    <div className="logos">
                        <ul>
                            <li><Facebook size={15} /></li>
                            <li><Instagram size={15} /></li>
                            <li><Twitter size={15} /></li>
                            <li><Linkedin size={15} /></li>
                        </ul>
                    </div>
                    <div className="flex space-x-4">
                        <p className="text-sm">My Orders </p>
                        <p className="pr-4 text-sm">My Account</p>
                    </div>
                </div>
            </div>
            <hr />
            <nav className="flex text-black items-center justify-evenly">
                <div className="logo"><NavLink to="/"><img src={logo} className="w-[100%]" alt="logo" /></NavLink></div>
                <div className="search-bar">
                    <input type="text" placeholder="Search here.." className=" text-sm" />
                </div>
                <div className="flex space-x-4 texr-white">
                    <h2 title="User"><CircleUser /></h2>
                    <Heart color="black" />
                    <NavLink to='/cart'>
                        <div className="cart relative">
                            <span className="badge absolute top-[-7px] right-[-7px] bg-red-500 rounded-[50%] w-4 h-4 flex items-center justify-center text-sm text-white">{cartItems.length}</span>
                            <ShoppingCart color="black" />
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
