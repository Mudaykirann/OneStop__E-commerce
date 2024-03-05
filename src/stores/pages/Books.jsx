import Category_Bar from "../components/Category_Bar"
import Navbar from "../components/Navbar"
import { booksData } from '../data/books'
import AllProductsPage from "../components/AllProductsPage"
import Footer from "../components/Footer"
import bookimg from '/public/assets/banners/books.jpg'

function Books() {
    return (
        <div>
            <Navbar />
            <section className="home-container px-[6%] py-[3%]  w-[100%]">
                <Category_Bar />
                <div className="products">
                    <div className="bg-pic">
                        <img src={bookimg} className="rounded-[10px]" alt="book-img" />
                        <h2 className="title">Books</h2>
                    </div>
                    <div className="men box">
                        <AllProductsPage product_item={booksData} route="books" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Books
