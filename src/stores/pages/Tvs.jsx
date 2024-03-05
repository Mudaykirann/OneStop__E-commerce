import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { tvData } from '../data/tv'
import AllProductsPage from "../components/AllProductsPage"

function Tvs() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <AllProductsPage product_item={tvData} route='electronics' type="TV" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tvs
