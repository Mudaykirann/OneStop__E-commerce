import { useParams } from "react-router-dom";
import { womanData } from "../data/woman";
import { TrendingUp } from 'lucide-react'
import { IoMdStar } from "react-icons/io";
import { useState } from "react";
import { Toaster, toast } from 'sonner'
import Navbar from './Navbar'
import { useCart } from "../context/CartContext";
function WomenProduct() {
    const [isadded, setisadded] = useState(false);
    const [isadding, setisadding] = useState(false);
    const { addToCart } = useCart()
    const { id } = useParams();
    const product = womanData.find((product) => product.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleaddCart = () => {
        addToCart(product)
        setisadding(true);
        setisadded(true);

        toast.success('Item is Added to Cart', {
            position: 'top-right',
        });
        setisadded(false);
    }



    return (
        <>
            <div>
                <Navbar />
                <div className="container px-[5%] ">
                    <h2 className="text-center text-3xl py-4 text-green-800">👗 Your Product Details</h2>
                    <div className="mini-container flex gap-x-12">
                        <div className="left pt-4 w-[50%]">
                            <img src={product.image} className="w-[75%] h-[85%]" alt="product-image" />
                            <div className="sizes flex gap-x-4 pl-4 pt-[20px]">
                                <div className="box border rounded-[3px] border-green-900 h-8 w-10 text-[13px] cursor-pointer flex items-center justify-center transition hover:bg-slate-300 hover:text-red-900">S</div>
                                <div className="box border rounded-[3px] border-green-900 h-8 w-10 text-[13px] cursor-pointer flex items-center justify-center transition hover:bg-slate-300 hover:text-red-900">M</div>
                                <div className="box border rounded-[3px] border-green-900 h-8 w-10 text-[13px] cursor-pointer flex items-center justify-center transition hover:bg-slate-300 hover:text-red-900">XL</div>
                                <div className="box border rounded-[3px] border-green-900 h-8 w-10 text-[13px] cursor-pointer flex items-center justify-center transition hover:bg-slate-300 hover:text-red-900">XXL</div>
                            </div>
                        </div>
                        <div className="right pt-4 w-[50%]">
                            <p className="py-[2px] text-sm">{product.product}</p>
                            <h2 className="name text-5xl py-2">{product.brand} {product.model}</h2>
                            <div className="name text-[15px] flex items-center gap-x-2 py-2"><IoMdStar size={22} /><p className="text-gray-700">8.5/10 . 15 reviews</p></div>
                            <p className="py-[5px] flex items-center gap-x-2"><TrendingUp size={18} /> <span className="text-xl">{product.type}</span></p>
                            <p className="desc">{product.description}</p>
                            <p className="text-2xl py-2">${product.price}</p>
                            <div className="cart flex gap-x-4 mt-8">
                                <button className="btn button-6 bg-black text-white" role="button" onClick={handleaddCart}>{isadding ? "Added to Cart" : isadded ? "Adding to Cart...." : "ADD TO CART"}</button>
                                <button className="btn-2 button-6 " role="button">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                {isadded && <Toaster />}
            </div>
        </>
    );
}

export default WomenProduct
