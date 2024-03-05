import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { fridgeData } from '../data/fridge'
import AllProductsPage from "../components/AllProductsPage"


function Fridges() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <AllProductsPage product_item={fridgeData} route='electronics' type="Refrigerator" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fridges
