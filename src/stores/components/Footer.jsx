import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="contain">
                    <div className="heading">
                        <h2>OneStop</h2>
                    </div>
                    <div className="col">
                        <h1>Clothes</h1>
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Electronics</h1>
                        <ul>
                            <li>AC</li>
                            <li>Fridge</li>
                            <li>Moniles</li>
                            <li>Kitchens</li>
                            <li>Tvs</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Books</h1>
                        <ul>
                            <li>Novels</li>
                            <li>E-books</li>
                            <li>PDF's</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Watches</h1>
                        <ul>
                            <li>Fastrack</li>
                            <li>Smart Watches</li>
                            <li>Casio</li>
                        </ul>
                    </div>
                    <div className="col social">
                        <h1>Social</h1>
                        <ul>
                            <li>
                                <Facebook />
                            </li>
                            <li>
                                <Instagram />
                            </li>
                            <li>
                                <Twitter />
                            </li>
                            <li>
                                <Linkedin />
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
