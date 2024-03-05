import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { computerData } from '../data/computers'

import AllProductsPage from "../components/AllProductsPage"

function Computers() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <AllProductsPage product_item={computerData} route='electronics' type="Computer" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Computers
