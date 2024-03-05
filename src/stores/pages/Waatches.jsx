import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { watchData } from '../data/watch'
import AllProductsPage from "../components/AllProductsPage";
import Footer from "../components/Footer";

import wathimg from '/public/assets/banners/watch.jpg'




function Waatches() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="bg-pic">
                        <img src={wathimg} alt="watch-img" />
                        <h2 className="p-heading">Watches</h2>
                    </div>
                    <div className="men box">
                        <AllProductsPage product_item={watchData} route="watches" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Waatches;
