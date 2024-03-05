import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useCart } from "./context/CartContext";
import { Trash2, MoveLeft, Minus, Plus } from 'lucide-react';
import { NavLink } from "react-router-dom";

function UserCart() {
    const { cartItems, removeFromCart, ClearCart } = useCart();
    const [counts, setCounts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Initialize counts for each product in the cart
        const initialCounts = {};
        cartItems.forEach((item) => {
            initialCounts[item.id] = 1; // Initialize count to 1 for each product
        });
        setCounts(initialCounts);
    }, [cartItems]);

    useEffect(() => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price * (counts[item.id] || 1); // Multiply price by count
        });
        setTotalPrice(totalPrice.toFixed(2));
    }, [cartItems, counts]);

    const decrementCount = (id) => {
        if (counts[id] > 1) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [id]: prevCounts[id] - 1
            }));
        }
    };

    const incrementCount = (id) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
        }));
    };

    return (
        <>
            <Navbar />
            <div className="cart-container mx-4">
                <div className="cart-heading flex items-center justify-between">
                    <h2 className=" text-4xl p-8  font-bold">Your Cart</h2>
                    <NavLink to='/'><button className="flex text-[12px] items-center gap-x-2 border border-black py-[4px] px-[8px] rounded-[3px]"><MoveLeft /> Continue Shopping....</button></NavLink>
                </div>
                {cartItems.length === 0 ? (
                    <p className="text-center my-24 text-2xl">😔 No items in the cart.</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} id="cart-item" className="py-2 my-4">
                                <div className="cart-details flex  gap-x-8">
                                    <img className="w-[150px]" src={item.image} alt="" />
                                    <div className="cart-content">
                                        <h3 className="text-2xl pt-2">{item.brand}</h3>
                                        <h3 className="text-[13px] text-gray-400">{item.type}</h3>
                                        <h3 className="py-2 text-[12px]">{item.model || item.brand || item.name}</h3>
                                        <h2 className="py-2">${item.price}</h2>
                                    </div>
                                </div>
                                <div className="count flex items-center gap-x-4 mt-4">
                                    <p className="border border-slate-900 rounded-[2px] p-[4px] cursor-pointer hover:bg-blue-500 transition hover:text-white" onClick={() => decrementCount(item.id)}><Minus size={18} /></p>
                                    <p>{counts[item.id]}</p>
                                    <p className="border border-slate-900 rounded-[2px] p-[4px] cursor-pointer bg-black text-white transition " onClick={() => incrementCount(item.id)}><Plus size={18} /></p>
                                </div>
                                <div className="remove">
                                    <button className='removeBtn' onClick={() => removeFromCart(item)}><Trash2 /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className={cartItems.length === 0 ? "hidden" : "relative"}>
                    <div className="cart-proceed py-4 px-10 bg-gray-100 border border-gray-200 absolute top-0 right-0">
                        <h2 className="text-2xl py-4 font-bold">Total price : ${totalPrice}</h2>
                        <button onClick={ClearCart} className="p-2 bg-green-300 rounded-lg text-[15px] ">Proceed to CheckOut</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCart;