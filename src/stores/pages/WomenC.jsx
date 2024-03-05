import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { womanData } from '../data/woman'
import AllProductsPage from "../components/AllProductsPage"
import bgimag from '/public/assets/banners/women.jpg'
import Footer from "../components/Footer"

const WomenC = () => {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="bg-pic">
                        <img src={bgimag} className="rounded-[10px]" alt="bg-image" />
                        <h2 className="p-heading">Women Clothings</h2>
                    </div>
                    <div className="women box">
                        <AllProductsPage product_item={womanData} route='clothes' type="women" />
                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default WomenC
