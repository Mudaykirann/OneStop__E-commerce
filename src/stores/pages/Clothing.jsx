import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { menData } from "../data/men"
import { womanData } from '../data/woman'
import AllProductsPage from "../components/AllProductsPage"


function Clothing() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <h2 className="title">Men Clothings</h2>
                        <AllProductsPage product_item={menData} route='clothings' type="Menswear" />
                    </div>
                    <div className="women box">
                        <h2 className="title">Women Clothings</h2>
                        <AllProductsPage product_item={womanData} route='clothings' type="Womanwear" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Clothing
