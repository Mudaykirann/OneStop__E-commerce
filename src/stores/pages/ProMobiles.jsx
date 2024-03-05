import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { mobileProData } from '../data/proData'
import AllProductsPage from "../components/AllProductsPage"


function ProMobiles() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <AllProductsPage product_item={mobileProData} route='electronics' type="ProMobile" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProMobiles
