

import Category_Bar from "../components/Category_Bar"
import Five_Productpage from "../components/Five_Productpage"
import Navbar from "../components/Navbar"
import { menData } from '../data/men'
import { womanData } from '../data/woman'
import { mobileData } from '../data/mobiles'
import { computerData } from '../data/computers'
import { mobileProData } from '../data/proData'
import { acData } from '../data/ac'
import { fridgeData } from '../data/fridge'
import { tvData } from '../data/tv'
import { booksData } from '../data/books'
import { kitchenData } from '../data/kitchen'
import { speakerData } from '../data/speaker'
import { watchData } from '../data/watch'
import Footer from "../components/Footer"

import banner1 from '/public/assets/banners/cat-banner-1.jpg'
import banner2 from '/public/assets/banners/bannerfurniture.jpg'
import banner3 from '/public/assets/banners/ELECTRONICS.jpg'
import Slider from "react-slick";
import smallpic1 from '/public/assets/banners/home-banner2.jpg'
import smallpic2 from '/public/assets/banners/home-banner3.jpg'
import smallpic3 from '/public/assets/banners/NEW TRENDING.jpg'
import watch from '/public/assets/banners/watches.jpg';
import mobiels from '/public/assets/banners/mobiles.jpg';



function Landingpage() {
    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };
    return (
        <div className="relative">
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="home-grid">
                    <Slider {...settings}>
                        <div><img src={mobiels} alt="banner-img1" /></div>
                        <div><img src={watch} alt="banner-img1" /></div>
                        <div><img src={banner2} alt="banner-img1" /></div>
                        <div><img src={banner3} alt="banner-img1" /></div>
                        <div><img src={banner1} alt="banner-img1" /></div>
                    </Slider>
                </div>
                <div className="home-grid-2">
                    <div className="item"><img src={smallpic1} /></div>
                    <div className="item"><img src={smallpic2} /></div>
                    <div className="item"><img src={smallpic3} /></div>
                </div>
                <div className="products">
                    <div className="men my-[50px]"><Five_Productpage product={menData} route="clothes/men" /></div>
                    <div className="women my-[50px]"><Five_Productpage product={womanData} route="clothes/women" /></div>
                    <div className="mobiles my-[50px]"><Five_Productpage product={mobileData} route="electronics/mobiles" /></div>
                    <div className="computers my-[50px]"><Five_Productpage product={computerData} route="electronics/comps" /></div>
                    <div className="promobiles my-[50px]"><Five_Productpage product={mobileProData} route="electronics/promobiles" /></div>
                    <div className="ac my-[50px]"><Five_Productpage product={acData} route="electronics/ac" /></div>
                    <div className="fridge my-[50px]"><Five_Productpage product={fridgeData} route="electronics/fridges" /></div>
                    <div className="tv my-[50px]"><Five_Productpage product={tvData} route="electronics/tv" /></div>
                    <div className="books my-[50px]"><Five_Productpage product={booksData} route="books" /></div>
                    <div className="kitchen my-[50px]"><Five_Productpage product={kitchenData} route="electronics/kitchens" /></div>
                    <div className="speaker my-[50px]"><Five_Productpage product={speakerData} route="electronics/speakers" /></div>
                    <div className="watch my-[50px]"><Five_Productpage product={watchData} route="watches" /></div>
                </div>
            </section>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default Landingpage