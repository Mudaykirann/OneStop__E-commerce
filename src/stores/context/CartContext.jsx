import { createContext, useContext, useState } from "react";
import { Toaster, toast } from 'sonner'


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [alreadyadded, setalreadyAdded] = useState(false);

    const addToCart = (item) => {

        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            setalreadyAdded(true);
            toast.warning("item is already added to the cart")
            console.log("This item is already in your cart.");
            return;
        }

        setCartItems([...cartItems, item]);
    };


    const removeFromCart = (item) => {
        setCartItems(cartItems.filter((cartitem) => cartitem !== item));
    };

    const ClearCart = () => {
        setCartItems([]);
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, ClearCart }}>
            {children}
            {alreadyadded && <Toaster />}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);

};
