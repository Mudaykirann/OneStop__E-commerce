import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { mobileData } from '../data/mobiles'
import AllProductsPage from "../components/AllProductsPage"

function Mobiles() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className=" box">
                        <AllProductsPage product_item={mobileData} route='electronics' type="Mobile" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mobiles
