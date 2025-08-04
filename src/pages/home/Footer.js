import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
    <footer>
        <div className="footer-category">
            <div className="container">
                <h2 className="footer-category-title">Product Directory</h2>

                <div className="footer-category-box">
                    <h3 className="category-box-title">Jewellery :</h3>
                    <Link to="/earring" className="footer-category-link">Earrings</Link>
                    <Link to="/couplerings" className="footer-category-link">Couple Rings</Link>
                    <Link to="/necklace" className="footer-category-link">Necklace</Link>
                    <Link to="/bracelet" className="footer-category-link">Bracelets</Link>
                </div>

                <div className="footer-category-box">
                    <h3 className="category-box-title">Perfumes :</h3>
                    <Link to="/floral" className="footer-category-link">Floral</Link>
                    <Link to="/oriental" className="footer-category-link">Oriental</Link>
                    <Link to="/woody" className="footer-category-link">Woody</Link>
                    <Link to="/fougere" className="footer-category-link">Fougère</Link>
                </div>

                <div className="footer-category-box">
                    <h3 className="category-box-title">Men's Collection :</h3>
                    <Link to="/men/formal" className="footer-category-link">Formal</Link>
                    <Link to="/men/casual" className="footer-category-link">Casual</Link>
                    <Link to="/men/tshirts" className="footer-category-link">T-shirts</Link>
                    <Link to="/jackets" className="footer-category-link">Jackets</Link>
                    <Link to="/men/shorts" className="footer-category-link">Shorts</Link>
                    <Link to="/sunglasses" className="footer-category-link">Sunglasses</Link>
                    <Link to="/watches.htm" className="footer-category-link">Watches</Link>
                    <Link to="/wallets" className="footer-category-link">Wallets</Link>
                    <Link to="/shoes" className="footer-category-link">Shoes</Link>
                </div>

                <div className="footer-category-box">
                    <h3 className="category-box-title">Women's Collection :</h3>
                    <Link to="/women/formal" className="footer-category-link">Formal</Link>
                    <Link to="/kurtas&suits" className="footer-category-link">Kurtas & Suits</Link>
                    <Link to="/saree" className="footer-category-link">Saree</Link>
                    <Link to="/lehenga&cholis" className="footer-category-link">Lehenga Cholis</Link>
                    <Link to="/dupattas&shawls" className="footer-category-link">Dupattas & Shawls</Link>
                    <Link to="/lipstick" className="footer-category-link">Lipstick</Link>
                    <Link to="/eyeliner" className="footer-category-link">Eyeliner</Link>
                    <Link to="/primer" className="footer-category-link">Primer</Link>
                    <Link to="/mascara" className="footer-category-link">Mascara</Link>
                </div>

                <div className="footer-category-box">
                    <h3 className="category-box-title">Kids Collection :</h3>
                    <Link to="/kids/formal" className="footer-category-link">Formal</Link>
                    <Link to="/kids/casual" className="footer-category-link">Casual</Link>
                    <Link to="/kids/shorts" className="footer-category-link">Shorts</Link>
                    <Link to="/trousers" className="footer-category-link">Trousers</Link>
                    <Link to="/kids/tshirts" className="footer-category-link">T-shirts</Link>
                </div>

                <div className="footer-category-box">
                    <h3 className="category-box-title">Electronics :</h3>
                    <Link to="/sw" className="footer-category-link">Smart Watch</Link>
                    <Link to="/stv" className="footer-category-link">Smart TV</Link>
                    <Link to="/mouse" className="footer-category-link">Mouse</Link>
                    <Link to="/microphone" className="footer-category-link">Microphone</Link>
                </div>
            </div>
        </div>

        <div className="footer-nav">
            <div className="container">
                <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                        <h2 className="nav-title">Main Categories</h2>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/" className="footer-nav-link">Home</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/earring" className="footer-nav-link">Jewellery</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/floral" className="footer-nav-link">Perfumes</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="formal" className="footer-nav-link">Men's Collection</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/formal" className="footer-nav-link">Women's Collection</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/formal" className="footer-nav-link">Kids Collection</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/sw" className="footer-nav-link">Electronics</Link>
                    </li>
                </ul>

                <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                        <h2 className="nav-title">Popular Collections</h2>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/earrings" className="footer-nav-link">Trending Earrings</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/floral" className="footer-nav-link">Premium Perfumes</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/men/formal" className="footer-nav-link">Men's Formal Wear</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/saree" className="footer-nav-link">Designer Sarees</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/sw" className="footer-nav-link">Smart Watches</Link>
                    </li>
                </ul>

                <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                        <h2 className="nav-title">Company Info</h2>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/about" className="footer-nav-link">About Us</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/blogs" className="footer-nav-link">Blog</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/privacypolicy" className="footer-nav-link">Privacy Policy</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/terms&conditions" className="footer-nav-link">Terms & Conditions</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/Returnpolicy" className="footer-nav-link">Return Policy</Link>
                    </li>
                </ul>

                <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                        <h2 className="nav-title">Customer Service</h2>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/contact" className="footer-nav-link">Contact Us</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/Helpcenter" className="footer-nav-link">Help Center</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/ordersupport" className="footer-nav-link">Order Support</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/sizeguide" className="footer-nav-link">Size Guide</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="/faq" className="footer-nav-link">FAQ</Link>
                    </li>
                </ul>
<ul className="footer-nav-list">
    <li className="footer-nav-item">
        <h2 className="nav-title">Contact</h2>
    </li>

    <li className="footer-nav-item flex">
        <div className="icon-box">📍</div>
        <address className="content">
        </address>
    </li>

    <li className="footer-nav-item flex">
        <div className="icon-box">✉️</div>
        <Link to="mailto:<?= htmlspecialchars($footer['contact_email']) ?>" className="footer-nav-link">
        </Link>
    </li>

    <li className="footer-nav-item flex">
        <div className="icon-box">📞</div>
        <Link to="tel:>" className="footer-nav-link">
        </Link>
    </li>
</ul>


                <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                        <h2 className="nav-title">Follow Us</h2>
                    </li>
                    <li>
                        <ul className="social-link">
                            <li className="footer-nav-item">
                                <Link to="#" className="footer-nav-link">📘</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="#" className="footer-nav-link">🐦</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="#" className="footer-nav-link">💼</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="#" className="footer-nav-link">📷</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

<div className="footer-bottom">
    <div className="container">
        <img src="/images/payment.png" alt="payment methods" className="payment-img"/>
        <p className="copyright">
        </p>
    </div>
</div>

    </footer>

    <script src="assets/js/main.js" ></script>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    </div>
  )
}

export default Footer
