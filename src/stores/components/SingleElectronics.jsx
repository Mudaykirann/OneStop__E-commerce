import { useParams } from "react-router-dom";
import { acData } from "../data/ac";
import { computerData } from '../data/computers'
import { mobileData } from '../data/mobiles'
import { mobileProData } from '../data/proData'
import { fridgeData } from '../data/fridge'
import { tvData } from '../data/tv'
import { kitchenData } from '../data/kitchen'
import { speakerData } from '../data/speaker'
import { TrendingUp } from 'lucide-react'
import { IoMdStar } from "react-icons/io";
import { useState } from "react";
import { Toaster, toast } from 'sonner'
import { useCart } from "../context/CartContext";
import Navbar from './Navbar'
function SingleElectronics() {
    const { id, category } = useParams();
    const [isadded, setisadded] = useState(false);
    const [isadding, setisadding] = useState(false);
    const { addToCart } = useCart()
    var product;
    if (category == 'AirConditioner') {
        product = acData.find((product) => product.id === id);
    }
    if (category == 'Computer') {
        product = computerData.find((product) => product.id === id);
    }
    if (category == 'Refrigerator') {
        product = fridgeData.find((product) => product.id === id);
    }
    if (category == 'Kitchen') {
        product = kitchenData.find((product) => product.id === id);
    }
    if (category == 'Mobile') {
        product = mobileData.find((product) => product.id === id);
    }
    if (category == 'ProMobile') {
        product = mobileProData.find((product) => product.id === id);
    }
    if (category == 'Speaker') {
        product = speakerData.find((product) => product.id === id);
    }
    if (category == 'TV') {
        product = tvData.find((product) => product.id === id);
    }
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
            <div className="relative">
                <Navbar />
                <div className="container px-[5%] ">
                    <h2 className="text-center text-3xl py-4 text-green-800">🧩 Your Product Details</h2>
                    <div className="mini-container flex gap-x-12">
                        <div className="left pt-4 w-[50%]">
                            <img src={product.image} className="w-[75%] h-[90%]" alt="product-image" />
                        </div>
                        <div className="right pt-4 w-[50%]">
                            <p className="py-[2px] text-sm">{product.product}</p>
                            <h2 className="name text-5xl py-2">{product.brand} {product.model}</h2>
                            <div className="name text-[15px] flex items-center gap-x-2 py-2"><IoMdStar size={22} /><p className="text-gray-700">8.5/10 . 15 reviews</p></div>
                            <p className="py-[5px] flex items-center gap-x-2"><TrendingUp size={18} /> <span className="text-xl">{product.type || product.company || "Trending"}</span></p>
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

export default SingleElectronics
