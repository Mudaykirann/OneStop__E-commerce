import { Link } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

function AllProductsPage({ product_item, route, type }) {
    const Data = product_item
    return (
        <>
            <div className="products-section">
                {
                    Data.map((item) => {
                        return (
                            <div className="product-box" key={item.id}  >
                                <Link to={(route && type) ? `/${route}/${type}/${item.id}` : `/${route}/${item.id}`}><img src={item.image} className="m-auto" alt="product-image" /></Link>
                                <div className="product-content">
                                    <p className="product-name pt-2 border-t border-slate-400">{item.brand ? item.brand : item.model ? item.model : item.title}</p>
                                    <div className="product-subcontent py-2">
                                        <p className="product-price pb-[2px]">${item.price}</p>
                                        <p className="product-rating pb-[2px] flex items-center">
                                            {
                                                item.price > 400 ? (
                                                    <>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />

                                                    </>
                                                ) :
                                                    (item.price > 70 && item.price < 200) ? (
                                                        <>
                                                            <IoMdStar />
                                                            <IoMdStar />
                                                            <IoMdStar />
                                                            <IoMdStar />
                                                            <IoMdStarHalf />
                                                        </>
                                                    ) :
                                                        (item.price > 10 && item.price < 70) && (
                                                            <>
                                                                <IoMdStar />
                                                                <IoMdStar />
                                                                <IoMdStar />
                                                                <IoMdStarHalf />
                                                                <IoMdStarOutline />

                                                            </>
                                                        )
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AllProductsPage
