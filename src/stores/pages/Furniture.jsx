import { furnitureData } from '../data/furniture'
import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import AllProductsPage from "../components/AllProductsPage"
import Footer from '../components/Footer'
import furniture from '/public/assets/banners/bannerfurniture.jpg'


function Furniture() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className='bg-pic'>
                        <img src={furniture} alt='fur-img' />
                        <h2 className='p-heading'>Furnitures</h2>
                    </div>
                    <div className='box'>
                        <AllProductsPage product_item={furnitureData} route="furniture" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Furniture
