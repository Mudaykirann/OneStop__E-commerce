import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import AllProductsPage from "../components/AllProductsPage"
import { acData } from '../data/ac'
function Ac() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <h2 className="title">AC's</h2>
                        <AllProductsPage product_item={acData} route='electronics' type="AirConditioner" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ac
