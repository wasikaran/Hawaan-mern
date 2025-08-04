import React from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

const main = () => {
    return (
        <>

 <Slider/>
        <div>



            <div className="category">

                <div className="container">

                    <div className="category-item-container has-scrollbar">

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/dress.svg" alt="Kurtas & Suits" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Kurtas & Suits</h3>

                                    <p className="category-item-amount">(50)</p>
                                </div>

                                <Link to="/women/formal" className="category-btn">Show all</Link>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/coat.svg" alt="Winter Wear" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Winter Wear</h3>

                                    <p className="category-item-amount">(58)</p>
                                </div>

                                <Link to="/men/casual" className="category-btn">Show all</Link>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/glasses.svg" alt="glasses & lens" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Glasses & lens</h3>

                                    <p className="category-item-amount">(68)</p>
                                </div>

                                <Link to="/sunglasses" className="category-btn">Show all</Link>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/shorts.svg" alt="shorts" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Shorts</h3>

                                    <p className="category-item-amount">(14)</p>
                                </div>

                                <Link to="/men/shorts" className="category-btn">Show all</Link>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/tee.svg" alt="t-shirts" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">T-shirts</h3>

                                    <p className="category-item-amount">(35)</p>
                                </div>

                                <Link to="/men/tshirts" className="category-btn">Show all</Link>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/jacket.svg" alt="jacket" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Jacket</h3>

                                    <p className="category-item-amount">(16)</p>
                                </div>

                                <Link to="/jackets" className="category-btn">Show all</Link>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/watch.svg" alt="watch" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Watch</h3>

                                    <p className="category-item-amount">(27)</p>
                                </div>

                                <Link to="/watches" className="category-btn">Show all</Link>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="/images/icons/shoes.svg" alt="Shoes" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Shoes</h3>

                                    <p className="category-item-amount">(39)</p>
                                </div>

                                <Link to="/shoes" className="category-btn">Show all</Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>







            <div className="product-container">

                <div className="container">




                    <div className="sidebar  has-scrollbar" data-mobile-menu>

                        <div className="sidebar-category">

                            <div className="sidebar-top">
                                <h2 className="sidebar-title">Category</h2>
                                <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                                    <ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline"></ion-icon>
                                </button>
                            </div>

                            <ul className="sidebar-menu-category-list">

                                <li className="sidebar-menu-category">
                                    <button className="sidebar-accordion-menu" data-accordion-btn="">
                                        <div className="menu-title-flex">
                                            <img src="/images/icons/jewelry.svg" alt="jewellery" width="20" height="20" className="menu-title-img" />
                                            <p className="menu-title">Jewellery</p>
                                        </div>
                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>
                                    </button>
                                    <ul className="sidebar-submenu-category-list" data-accordion="">
                                        <li className="sidebar-submenu-category"><Link to="/Categories/jewellery/earring" className="sidebar-submenu-title"><p className="product-name">Earrings</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/jewellery/couplerings" className="sidebar-submenu-title"><p className="product-name">Couple Rings</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/jewellery/necklace" className="sidebar-submenu-title"><p className="product-name">Necklace</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/jewellery/bracelet" className="sidebar-submenu-title"><p className="product-name">Bracelets</p></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-menu-category">
                                    <button className="sidebar-accordion-menu" data-accordion-btn="">
                                        <div className="menu-title-flex">
                                            <img src="/images/icons/perfume.svg" alt="perfumes" width="20" height="20" className="menu-title-img" />
                                            <p className="menu-title">Perfumes</p>
                                        </div>
                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>
                                    </button>
                                    <ul className="sidebar-submenu-category-list" data-accordion="">
                                        <li className="sidebar-submenu-category"><Link to="/Categories/perfumes/floral" className="sidebar-submenu-title"><p className="product-name">Floral</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/perfumes/oriental" className="sidebar-submenu-title"><p className="product-name">Oriental</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/perfumes/woody" className="sidebar-submenu-title"><p className="product-name">Woody</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/perfumes/fougere" className="sidebar-submenu-title"><p className="product-name">Fougère</p></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-menu-category">
                                    <button className="sidebar-accordion-menu" data-accordion-btn="">
                                        <div className="menu-title-flex">
                                            <img src="/images/icons/shoes.svg" alt="men's" width="20" height="20" className="menu-title-img" />
                                            <p className="menu-title">Men's</p>
                                        </div>
                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>
                                    </button>
                                    <ul className="sidebar-submenu-category-list" data-accordion="">
                                        <li className="sidebar-submenu-category"><Link to="/Categories/mens/sunglasses" className="sidebar-submenu-title"><p className="product-name">Sun Glasses</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/mens/watches.htm" className="sidebar-submenu-title"><p className="product-name">Watches</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/mens/wallets" className="sidebar-submenu-title"><p className="product-name">Wallets</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/mens/shoes" className="sidebar-submenu-title"><p className="product-name">Shoes</p></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-menu-category">
                                    <button className="sidebar-accordion-menu" data-accordion-btn="">
                                        <div className="menu-title-flex">
                                            <img src="/images/icons/jewelry.svg" alt="women's" width="20" height="20" className="menu-title-img" />
                                            <p className="menu-title">Women's</p>
                                        </div>
                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>
                                    </button>
                                    <ul className="sidebar-submenu-category-list" data-accordion="">
                                        <li className="sidebar-submenu-category"><Link to="/Categories/womens/lipstick" className="sidebar-submenu-title"><p className="product-name">Lipstick</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/womens/eyeliner" className="sidebar-submenu-title"><p className="product-name">Eyeliner</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/womens/primer" className="sidebar-submenu-title"><p className="product-name">Primer</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/womens/mascara" className="sidebar-submenu-title"><p className="product-name">Mascara</p></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-menu-category">
                                    <button className="sidebar-accordion-menu" data-accordion-btn="">
                                        <div className="menu-title-flex">
                                            <img src="/images/icons/electronics.svg" alt="electronics" width="20" height="20" className="menu-title-img" />
                                            <p className="menu-title">Electronics</p>
                                        </div>
                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>
                                    </button>
                                    <ul className="sidebar-submenu-category-list" data-accordion="">
                                        <li className="sidebar-submenu-category"><Link to="/Categories/electronics/sw" className="sidebar-submenu-title"><p className="product-name">Smart Watch</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/electronics/stv" className="sidebar-submenu-title"><p className="product-name">Smart TV</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/electronics/mouse" className="sidebar-submenu-title"><p className="product-name">Mouse</p></Link></li>
                                        <li className="sidebar-submenu-category"><Link to="/Categories/electronics/microphone" className="sidebar-submenu-title"><p className="product-name">Microphone</p></Link></li>
                                    </ul>
                                </li>

                            </ul>

                        </div>


                        <div className="product-showcase">

                            <h3 className="showcase-heading">best sellers</h3>

                            <div className="showcase-wrapper">

                                <div className="showcase-container">

                                    <div className="showcase">

                                        <Link to="/Categories/mens-accessories/wallets" className="showcase-img-box">
                                            <img src="/images/products/wallet.png" alt="Men's Leather Wallet" width="75" height="75"
                                                className="showcase-img" />
                                        </Link>

                                        <div className="showcase-content">

                                            <Link to="/Categories/mens-accessories/wallets">
                                                <h4 className="showcase-title">Men's Leather Wallet</h4>
                                            </Link>

                                            <div className="showcase-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                            </div>

                                            <div className="price-box">
                                                <del>$24.00</del>
                                                <p className="price">$10.00</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="showcase">

                                        <Link to="/Categories/mens-collection/jackets" className="showcase-img-box">
                                            <img src="/images/products/2.jpg" alt="men's hoodies t-shirt" className="showcase-img"
                                                width="75" height="75" />
                                        </Link>

                                        <div className="showcase-content">

                                            <Link to="/Categories/mens-collection/jackets">
                                                <h4 className="showcase-title">men's hoodies t-shirt</h4>
                                            </Link>
                                            <div className="showcase-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star-half-outline"></ion-icon>
                                            </div>

                                            <div className="price-box">
                                                <del>$17.00</del>
                                                <p className="price">$7.00</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="showcase">

                                        <Link to="/Categories/womens-collection/formal" className="showcase-img-box">
                                            <img src="/images/products/3.jpg" alt="girls t-shirt" className="showcase-img" width="75"
                                                height="75" />
                                        </Link>

                                        <div className="showcase-content">

                                            <Link to="/Categories/womens-collection/formal">
                                                <h4 className="showcase-title">girls t-shirt</h4>
                                            </Link>
                                            <div className="showcase-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star-half-outline"></ion-icon>
                                            </div>

                                            <div className="price-box">
                                                <del>$5.00</del>
                                                <p className="price">$3.00</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="showcase">

                                        <Link to="/Categories/mens-accessories/watches.htm" className="showcase-img-box">
                                            <img src="/images/products/watch-2.jpg" alt="Smart Watch for men" className="showcase-img" width="75"
                                                height="75" />
                                        </Link>

                                        <div className="showcase-content">

                                            <Link to="/Categories/mens-accessories/watches.htm">
                                                <h4 className="showcase-title">Smart Watch for men</h4>
                                            </Link>
                                            <div className="showcase-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                            </div>

                                            <div className="price-box">
                                                <del>$15.00</del>
                                                <p className="price">$12.00</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="product-box">



                        <div className="product-minimal">

                            <div className="product-showcase">

                                <h2 className="title">New Arrivals</h2>

                                <div className="showcase-wrapper has-scrollbar">

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <Link to="/Categories/mens-collection/formal" className="showcase-img-box">
                                                <img src="/images/products/jacket-1.jpg" alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">Classic Black Suit</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Clothes</Link>

                                                <div className="price-box">
                                                    <p className="price">$45.00</p>
                                                    <del>$12.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-collection/formal" className="showcase-img-box">
                                                <img src="/images/products/jacket-2.jpg" alt="girls pink embro design top" className="showcase-img" width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">Goochi Gang Hoodie</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Clothes</Link>

                                                <div className="price-box">
                                                    <p className="price">$61.00</p>
                                                    <del>$9.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="#" className="showcase-img-box">
                                                <img src="/images/products/jacket-4.jpg" alt="black floral wrap midi skirt" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">Backstreet Boys Collection Jacket</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Clothes</Link>

                                                <div className="price-box">
                                                    <p className="price">$76.00</p>
                                                    <del>$25.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-collection/formal" className="showcase-img-box">
                                                <img src="/images/products/shirt-1.jpg" alt="pure garment dyed cotton shirt" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Mens Fashion</Link>

                                                <div className="price-box">
                                                    <p className="price">$68.00</p>
                                                    <del>$31.00</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <Link to="/Categories/mens-collection/formal" className="showcase-img-box">
                                                <img src="/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Winter wear</Link>

                                                <div className="price-box">
                                                    <p className="price">$61.00</p>
                                                    <del>$11.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-collection/formal" className="showcase-img-box">
                                                <img src="/images/products/jacket-1.jpg" alt="mens winter leathers jackets" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Winter wear</Link>

                                                <div className="price-box">
                                                    <p className="price">$32.00</p>
                                                    <del>$20.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-collection/formal" className="showcase-img-box">
                                                <img src="/images/products/jacket-3.jpg" alt="mens winter leathers jackets" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Jackets</Link>

                                                <div className="price-box">
                                                    <p className="price">$50.00</p>
                                                    <del>$25.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-collection/formal" className="showcase-img-box">
                                                <img src="/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-collection/formal">
                                                    <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                                                </Link>

                                                <Link to="/Categories/mens-collection/formal" className="showcase-brand">Shorts</Link>

                                                <div className="price-box">
                                                    <p className="price">$20.00</p>
                                                    <del>$10.00</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="product-showcase">

                                <h2 className="title">Trending</h2>

                                <div className="showcase-wrapper  has-scrollbar">

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/sports-1.jpg" alt="running & trekking shoes - white" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Running & Trekking Shoes - White</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">Sports</Link>

                                                <div className="price-box">
                                                    <p className="price">$49.00</p>
                                                    <del>$15.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/sports-2.jpg" alt="trekking & running shoes - black" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Trekking & Running Shoes - black</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">Sports</Link>

                                                <div className="price-box">
                                                    <p className="price">$78.00</p>
                                                    <del>$36.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/party-wear-1.jpg" alt="womens party wear shoes" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">Party wear</Link>

                                                <div className="price-box">
                                                    <p className="price">$94.00</p>
                                                    <del>$42.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/sports-3.jpg" alt="sports claw women's shoes" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Sports Claw Women's Shoes</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">Sports</Link>

                                                <div className="price-box">
                                                    <p className="price">$54.00</p>
                                                    <del>$65.00</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/sports-6.jpg" alt="air tekking shoes - white" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">Sports</Link>

                                                <div className="price-box">
                                                    <p className="price">$52.00</p>
                                                    <del>$55.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/shoe-3.jpg" alt="Boot With Suede Detail" className="showcase-img" width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Boot With Suede Detail</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">boots</Link>

                                                <div className="price-box">
                                                    <p className="price">$20.00</p>
                                                    <del>$30.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">formal</Link>

                                                <div className="price-box">
                                                    <p className="price">$56.00</p>
                                                    <del>$78.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/shoes" className="showcase-img-box">
                                                <img src="/images/products/shoe-2.jpg" alt="casual men's brown shoes" className="showcase-img" width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/shoes">
                                                    <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/shoes" className="showcase-brand">Casual</Link>

                                                <div className="price-box">
                                                    <p className="price">$50.00</p>
                                                    <del>$55.00</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="product-showcase">

                                <h2 className="title">Top Rated</h2>

                                <div className="showcase-wrapper  has-scrollbar">

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/watches.htm" className="showcase-img-box">
                                                <img src="/images/products/watch-3.jpg" alt="pocket watch leather pouch" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/watches.htm">
                                                    <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/watches.htm" className="showcase-brand">Watches</Link>

                                                <div className="price-box">
                                                    <p className="price">$50.00</p>
                                                    <del>$34.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/jewellery/necklace" className="showcase-img-box">
                                                <img src="/images/products/jewellery-3.jpg" alt="silver deer heart necklace" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/jewellery/necklace">
                                                    <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                                                </Link>

                                                <Link to="/Categories/jewellery/necklace" className="showcase-brand">Jewellery</Link>

                                                <div className="price-box">
                                                    <p className="price">$84.00</p>
                                                    <del>$30.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/perfumes/oriental" className="showcase-img-box">
                                                <img src="/images/products/perfume.jpg" alt="titan 100 ml womens perfume" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/perfumes/oriental">
                                                    <h4 className="showcase-title">Oriental 100 Ml Womens Perfume</h4>
                                                </Link>

                                                <Link to="/Categories/perfumes/oriental" className="showcase-brand">Perfume</Link>

                                                <div className="price-box">
                                                    <p className="price">$42.00</p>
                                                    <del>$10.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/wallets" className="showcase-img-box">
                                                <img src="/images/products/wallet.png" alt="men's leather wallet" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/wallets">
                                                    <h4 className="showcase-title">Men's Leather wallet</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/wallets" className="showcase-brand">Wallet</Link>

                                                <div className="price-box">
                                                    <p className="price">$24.00</p>
                                                    <del>$10.00</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <Link to="/Categories/jewellery/couplerings" className="showcase-img-box">
                                                <img src="/images/products/jewellery-2.jpg" alt="platinum zircon classic ring" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/jewellery/couplerings">
                                                    <h4 className="showcase-title">platinum Zircon Classic Ring</h4>
                                                </Link>

                                                <Link to="/Categories/jewellery/couplerings" className="showcase-brand">jewellery</Link>

                                                <div className="price-box">
                                                    <p className="price">$62.00</p>
                                                    <del>$65.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/mens-accessories/watches.htm" className="showcase-img-box">
                                                <img src="/images/products/watch-1.jpg" alt="smart watche vital plus" className="showcase-img" width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/mens-accessories/watches.htm">
                                                    <h4 className="showcase-title">Smart watche Vital Plus</h4>
                                                </Link>

                                                <Link to="/Categories/mens-accessories/watches.htm" className="showcase-brand">Watches</Link>

                                                <div className="price-box">
                                                    <p className="price">$56.00</p>
                                                    <del>$78.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/makeup/primer" className="showcase-img-box">
                                                <img src="/images/products/shampoo.jpg" alt="Primer & Facewash" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/makeup/primer">
                                                    <h4 className="showcase-title">Primer & Facewash</h4>
                                                </Link>

                                                <Link to="/Categories/makeup/primer" className="showcase-brand">cosmetics</Link>

                                                <div className="price-box">
                                                    <p className="price">$20.00</p>
                                                    <del>$30.00</del>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <Link to="/Categories/jewellery/earring" className="showcase-img-box">
                                                <img src="/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" className="showcase-img"
                                                    width="70" />
                                            </Link>

                                            <div className="showcase-content">

                                                <Link to="/Categories/jewellery/earring">
                                                    <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                                                </Link>

                                                <Link to="/Categories/jewellery/earring" className="showcase-brand">jewellery</Link>

                                                <div className="price-box">
                                                    <p className="price">$20.00</p>
                                                    <del>$30.00</del>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>





                        <div className="product-featured">

                            <h2 className="title">Deal of the day</h2>

                            <div className="showcase-wrapper has-scrollbar">

                                <div className="showcase-container">

                                    <div className="showcase">

                                        <div className="showcase-banner">
                                            <img src="/images/products/shampoo.jpg" alt="shampoo, conditioner & facewash packs" className="showcase-img" />
                                        </div>

                                        <div className="showcase-content">

                                            <div className="showcase-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star-outline"></ion-icon>
                                                <ion-icon name="star-outline"></ion-icon>
                                            </div>

                                            <Link to="#">
                                                <h3 className="showcase-title">shampoo, conditioner & facewash packs</h3>
                                            </Link>

                                            <p className="showcase-desc">
                                                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                dolor dolor sit amet consectetur Lorem ipsum dolor
                                            </p>

                                            <div className="price-box">
                                                <p className="price">$150.00</p>

                                                <del>$200.00</del>
                                            </div>

                                            <button className="add-cart-btn">add to cart</button>

                                            <div className="showcase-status">
                                                <div className="wrapper">
                                                    <p>
                                                        already sold: <b>20</b>
                                                    </p>

                                                    <p>
                                                        available: <b>40</b>
                                                    </p>
                                                </div>

                                                <div className="showcase-status-bar"></div>
                                            </div>

                                            <div className="countdown-box">

                                                <p className="countdown-desc">
                                                    Hurry Up! Offer ends in:
                                                </p>

                                                <div className="countdown">

                                                    <div className="countdown-content">

                                                        <p className="display-number">360</p>

                                                        <p className="display-text">Days</p>

                                                    </div>

                                                    <div className="countdown-content">
                                                        <p className="display-number">24</p>
                                                        <p className="display-text">Hours</p>
                                                    </div>

                                                    <div className="countdown-content">
                                                        <p className="display-number">59</p>
                                                        <p className="display-text">Min</p>
                                                    </div>

                                                    <div className="countdown-content">
                                                        <p className="display-number">00</p>
                                                        <p className="display-text">Sec</p>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="showcase-container">

                                    <div className="showcase">

                                        <div className="showcase-banner">
                                            <img src="/images/products/jewellery-1.jpg" alt="Rose Gold diamonds Earring" className="showcase-img" />
                                        </div>

                                        <div className="showcase-content">

                                            <div className="showcase-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star-outline"></ion-icon>
                                                <ion-icon name="star-outline"></ion-icon>
                                            </div>

                                            <h3 className="showcase-title">
                                                <Link to="#" className="showcase-title">Rose Gold diamonds Earring</Link>
                                            </h3>

                                            <p className="showcase-desc">
                                                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                dolor dolor sit amet consectetur Lorem ipsum dolor
                                            </p>

                                            <div className="price-box">
                                                <p className="price">$1990.00</p>
                                                <del>$2000.00</del>
                                            </div>

                                            <button className="add-cart-btn">add to cart</button>

                                            <div className="showcase-status">
                                                <div className="wrapper">
                                                    <p> already sold: <b>15</b> </p>

                                                    <p> available: <b>40</b> </p>
                                                </div>

                                                <div className="showcase-status-bar"></div>
                                            </div>

                                            <div className="countdown-box">

                                                <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                                                <div className="countdown">
                                                    <div className="countdown-content">
                                                        <p className="display-number">360</p>
                                                        <p className="display-text">Days</p>
                                                    </div>

                                                    <div className="countdown-content">
                                                        <p className="display-number">24</p>
                                                        <p className="display-text">Hours</p>
                                                    </div>

                                                    <div className="countdown-content">
                                                        <p className="display-number">59</p>
                                                        <p className="display-text">Min</p>
                                                    </div>

                                                    <div className="countdown-content">
                                                        <p className="display-number">00</p>
                                                        <p className="display-text">Sec</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>




                        <div className="product-main">

                            <h2 className="title">New Products</h2>

                            <div
                                className="product-grid"
                                data-category="mens-collection"
                                data-subcategory="formal"
                            >
                            </div>
                        </div>

                    </div>

                </div>

            </div>






            <div>

                <div className="container">

                    <div className="testimonials-box">



                        <div className="testimonial">

                            <h2 className="title">testimonial</h2>

                            <div className="testimonial-card">

                                <img src="/images/testimonial-1.jpg" alt="alan doe" className="testimonial-banner" width="80" height="80" />

                                <p className="testimonial-name">Sarah Khan</p>

                                <p className="testimonial-title">Founder of StyleVerse</p>

                                <img src="/images/icons/quotes.svg" alt="quotation" className="quotation-img" width="26" />

                                <p className="testimonial-desc">
                                    This platform completely changed the way I shop online. The user experience is smooth, and the product quality exceeded my expectations
                                </p>

                            </div>

                        </div>




                        <div className="cta-container">

                            <img src="/images/cta-banner.jpg" alt="summer collection" className="cta-banner" />

                            <Link to="#" className="cta-content">

                                <p className="discount">25% Discount</p>

                                <h2 className="cta-title">Summer collection</h2>

                                <p className="cta-text">Starting @ $10</p>

                                <button className="cta-btn">Shop now</button>

                            </Link>

                        </div>



                        <div className="service">

                            <h2 className="title">Our Services</h2>

                            <div className="service-container">

                                <Link to="#" className="service-item">

                                    <div className="service-icon">
                                        <ion-icon name="boat-outline"></ion-icon>
                                    </div>

                                    <div className="service-content">

                                        <h3 className="service-title">Worldwide Delivery</h3>
                                        <p className="service-desc">For Order Over $100</p>

                                    </div>

                                </Link>

                                <Link to="#" className="service-item">

                                    <div className="service-icon">
                                        <ion-icon name="rocket-outline"></ion-icon>
                                    </div>

                                    <div className="service-content">

                                        <h3 className="service-title">Next Day delivery</h3>
                                        <p className="service-desc">UK Orders Only</p>

                                    </div>

                                </Link>

                                <Link to="#" className="service-item">

                                    <div className="service-icon">
                                        <ion-icon name="call-outline"></ion-icon>
                                    </div>

                                    <div className="service-content">

                                        <h3 className="service-title">Best Online Support</h3>
                                        <p className="service-desc">Hours: 8AM - 11PM</p>

                                    </div>

                                </Link>

                                <Link to="#" className="service-item">

                                    <div className="service-icon">
                                        <ion-icon name="arrow-undo-outline"></ion-icon>
                                    </div>

                                    <div className="service-content">

                                        <h3 className="service-title">Return Policy</h3>
                                        <p className="service-desc">Easy & Free Return</p>

                                    </div>

                                </Link>

                                <Link to="#" className="service-item">

                                    <div className="service-icon">
                                        <ion-icon name="ticket-outline"></ion-icon>
                                    </div>

                                    <div className="service-content">

                                        <h3 className="service-title">30% money back</h3>
                                        <p className="service-desc">For Order Over $100</p>

                                    </div>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>






            <div className="blog">

                <div className="container">

                    <div className="blog-container has-scrollbar">

                        <div className="blog-card">

                            <Link to="/blogs">
                                <img src="/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" className="blog-banner" />
                            </Link>

                            <div className="blog-content">

                                <Link to="/blogs" className="blog-category">Fashion</Link>

                                <Link to="/blogs">
                                    <h3 className="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                                </Link>

                                <p className="blog-meta">
                                    By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
                                </p>

                            </div>

                        </div>

                        <div className="blog-card">

                            <Link to="/blogs">
                                <img src="/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                                    className="blog-banner" width="300" />
                            </Link>

                            <div className="blog-content">

                                <Link to="/blogs" className="blog-category">Clothes</Link>

                                <h3>
                                    <Link to="/blogs" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</Link>
                                </h3>

                                <p className="blog-meta">
                                    By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
                                </p>

                            </div>

                        </div>

                        <div className="blog-card">

                            <Link to="/blogs">
                                <img src="/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                                    className="blog-banner" width="300" />
                            </Link>

                            <div className="blog-content">

                                <Link to="/blogs" className="blog-category">Shoes</Link>

                                <h3>
                                    <Link to="/blogs" className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</Link>
                                </h3>

                                <p className="blog-meta">
                                    By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
                                </p>

                            </div>

                        </div>

                        <div className="blog-card">

                            <Link to="/blogs">
                                <img src="/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                                    className="blog-banner" width="300" />
                            </Link>

                            <div className="blog-content">

                                <Link to="/blogs" className="blog-category">Electronics</Link>

                                <h3>
                                    <Link to="/blogs" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</Link>
                                </h3>

                                <p className="blog-meta">
                                    By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            </div>


</>

            )
}

            export default main
