import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { mobileData } from '../data/mobiles'
import { computerData } from '../data/computers'
import { mobileProData } from '../data/proData'

import { fridgeData } from '../data/fridge'
import { tvData } from '../data/tv'
import { kitchenData } from '../data/kitchen'
import AllProductsPage from "../components/AllProductsPage"



function Electronics() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="box">
                        <h2 className="title">Mobiles</h2>
                        <AllProductsPage product_item={mobileData} />
                        <AllProductsPage product_item={mobileProData} />
                    </div>
                    <div className="box">
                        <h2 className="title">Computers</h2>
                        <AllProductsPage product_item={computerData} />
                    </div>
                    <div className="box">
                        <h2 className="title">Fridges</h2>
                        <AllProductsPage product_item={fridgeData} />
                    </div>
                    <div className="box">
                        <h2 className="title">Tv's</h2>
                        <AllProductsPage product_item={tvData} />
                    </div>
                    <div className="box">
                        <h2 className="title">Kitchen Appliances</h2>
                        <AllProductsPage product_item={kitchenData} />
                    </div>



                </div>
            </section>
        </div>
    )
}

export default Electronics
