import { Link } from 'react-router-dom'
function Five_Productpage({ product, route }) {

    const FirstFiveImages = product.slice(0, 4);
    return (
        <>
            <div className="products-section">
                {
                    FirstFiveImages.map((item) => {
                        return (
                            <Link to={`/${route}`} key={item.id}>
                                <div className="product-box">
                                    <img src={item.image} alt="product-image" />
                                    <div className='product-content'>
                                        <p className='product-name px-[10px] py-[7px] text-center border-t border-slate-300'>{item.brand ? item.brand : item.model}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Five_Productpage
