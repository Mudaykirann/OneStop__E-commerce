import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { speakerData } from "../data/speaker"
import AllProductsPage from "../components/AllProductsPage"


const Speaker = () => {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="men box">
                        <AllProductsPage product_item={speakerData} route='electronics' type="Speaker" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Speaker
