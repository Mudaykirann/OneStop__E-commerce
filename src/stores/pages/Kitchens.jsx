import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { kitchenData } from '../data/kitchen'

import AllProductsPage from "../components/AllProductsPage"

function Kitchens() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <AllProductsPage product_item={kitchenData} route='electronics' type="Kitchen" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Kitchens
