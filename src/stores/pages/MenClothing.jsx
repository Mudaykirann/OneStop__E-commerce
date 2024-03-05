import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { menData } from "../data/men"
import menimg from '/public/assets/banners/men.jpg'

import AllProductsPage from "../components/AllProductsPage"
import Footer from "../components/Footer"

const MenClothing = () => {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="bg-pic">
                        <img src={menimg} className="rounded-[10px]" alt="men-img" />
                        <h2 className="p-heading">Men Clothings</h2>
                    </div>
                    <div className="men box">
                        <AllProductsPage product_item={menData} route='clothes' type="men" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MenClothing
