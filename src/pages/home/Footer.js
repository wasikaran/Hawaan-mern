import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contextAPI/LanguageContext';
import translations from '../../languageData/langData'


const Footer = () => {

    const {
        language,

    } = useLanguage();

    const content = translations[language]
    const { footer } = content
    const { heading, CatHeading, menCollection, womenCollection, contact, jewllery, kidsCollection, perfumes, electronics, subHeadings, MainCategories, PopularCollections, CompanyInfo, CustomerService, copyRight } = footer

    return (
        <div>

            <footer>
                <div className="footer-category">
                    <div className="container">
                        <h2 className="footer-category-title">{heading} </h2>

                        <div className="footer-category-box">
                            <h3 className="category-box-title">{CatHeading[0]} :</h3>
                            <Link to="/earring" className="footer-category-link">{jewllery[0]} </Link>
                            <Link to="/couplerings" className="footer-category-link"> {jewllery[1]}</Link>
                            <Link to="/necklace" className="footer-category-link">{jewllery[2]}</Link>
                            <Link to="/bracelet" className="footer-category-link">{jewllery[3]}</Link>
                        </div>

                        <div className="footer-category-box">
                            <h3 className="category-box-title">{CatHeading[1]} :</h3>
                            <Link to="/floral" className="footer-category-link">{perfumes[0]} </Link>
                            <Link to="/oriental" className="footer-category-link">{perfumes[1]}</Link>
                            <Link to="/woody" className="footer-category-link">{perfumes[2]}</Link>
                            <Link to="/fougere" className="footer-category-link">{perfumes[3]}</Link>
                        </div>

                        <div className="footer-category-box">
                            <h3 className="category-box-title">{CatHeading[2]}  :</h3>
                            <Link to="/men/formal" className="footer-category-link">{menCollection[0]} </Link>
                            <Link to="/men/casual" className="footer-category-link">{menCollection[1]}</Link>
                            <Link to="/men/tshirts" className="footer-category-link">{menCollection[2]}</Link>
                            <Link to="/jackets" className="footer-category-link">{menCollection[3]}</Link>
                            <Link to="/men/shorts" className="footer-category-link">{menCollection[4]}</Link>
                            <Link to="/sunglasses" className="footer-category-link">{menCollection[5]}</Link>
                            <Link to="/watches.htm" className="footer-category-link">{menCollection[6]}</Link>
                            <Link to="/wallets" className="footer-category-link">{menCollection[7]}</Link>
                            <Link to="/shoes" className="footer-category-link">{menCollection[8]}</Link>
                        </div>

                        <div className="footer-category-box">
                            <h3 className="category-box-title">{CatHeading[3]} :</h3>
                            <Link to="/women/formal" className="footer-category-link">{womenCollection[0]} </Link>
                            <Link to="/kurtas&suits" className="footer-category-link"> {womenCollection[1]}  </Link>
                            <Link to="/saree" className="footer-category-link">{womenCollection[2]} </Link>
                            <Link to="/lehenga&cholis" className="footer-category-link"> {womenCollection[3]} </Link>
                            <Link to="/dupattas&shawls" className="footer-category-link"> {womenCollection[4]} </Link>
                            <Link to="/lipstick" className="footer-category-link">{womenCollection[5]} </Link>
                            <Link to="/eyeliner" className="footer-category-link">{womenCollection[6]} </Link>
                            <Link to="/primer" className="footer-category-link">{womenCollection[7]} </Link>
                            <Link to="/mascara" className="footer-category-link">{womenCollection[8]} </Link>
                        </div>

                        <div className="footer-category-box">
                            <h3 className="category-box-title">{CatHeading[4]}  :</h3>
                            <Link to="/kids/formal" className="footer-category-link">{kidsCollection[0]} </Link>
                            <Link to="/kids/casual" className="footer-category-link">{kidsCollection[1]} </Link>
                            <Link to="/kids/shorts" className="footer-category-link">{kidsCollection[2]} </Link>
                            <Link to="/trousers" className="footer-category-link">{kidsCollection[3]} </Link>
                            <Link to="/kids/tshirts" className="footer-category-link">{kidsCollection[4]} </Link>
                        </div>

                        <div className="footer-category-box">
                            <h3 className="category-box-title">{CatHeading[5]} :</h3>
                            <Link to="/sw" className="footer-category-link">{electronics[0]} </Link>
                            <Link to="/stv" className="footer-category-link"> {electronics[1]}</Link>
                            <Link to="/mouse" className="footer-category-link">{electronics[2]}</Link>
                            <Link to="/microphone" className="footer-category-link">{electronics[3]}</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-nav">
                    <div className="container">
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">{subHeadings[0]} </h2>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/" className="footer-nav-link"> {MainCategories[0]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/earring" className="footer-nav-link">{MainCategories[1]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/floral" className="footer-nav-link">{MainCategories[2]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="formal" className="footer-nav-link">{MainCategories[3]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/formal" className="footer-nav-link"> {MainCategories[4]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/formal" className="footer-nav-link"> {MainCategories[5]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/sw" className="footer-nav-link">{MainCategories[6]}</Link>
                            </li>
                        </ul>

                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">{subHeadings[1]} </h2>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/earrings" className="footer-nav-link">{PopularCollections[0]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/floral" className="footer-nav-link">{PopularCollections[1]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/men/formal" className="footer-nav-link">  {PopularCollections[2]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/saree" className="footer-nav-link">{PopularCollections[3]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/sw" className="footer-nav-link">{PopularCollections[4]} </Link>
                            </li>
                        </ul>

                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title"> {subHeadings[2]}</h2>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/about" className="footer-nav-link">{CompanyInfo[0]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/blogs" className="footer-nav-link">{CompanyInfo[1]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/privacypolicy" className="footer-nav-link"> {CompanyInfo[2]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/terms&conditions" className="footer-nav-link"> {CompanyInfo[3]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/Returnpolicy" className="footer-nav-link"> {CompanyInfo[4]}</Link>
                            </li>
                        </ul>

                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title"> {subHeadings[3]}</h2>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/contact" className="footer-nav-link">{CustomerService[0]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/Helpcenter" className="footer-nav-link">{CompanyInfo[1]} </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/ordersupport" className="footer-nav-link"> {CompanyInfo[2]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/sizeguide" className="footer-nav-link"> {CompanyInfo[3]}</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/faq" className="footer-nav-link">{CompanyInfo[4]}</Link>
                            </li>
                        </ul>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">{subHeadings[4]}</h2>
                            </li>

                            <li className="footer-nav-item flex">
                                <div className="icon-box">📍</div>
                                <address className="content"> {contact[0]}
                                </address>
                            </li>

                            <li className="footer-nav-item flex">
                                <div className="icon-box">✉️</div>
                                <Link to="/" className="footer-nav-link">{contact[1]}
                                </Link>
                            </li>

                            <li className="footer-nav-item flex">
                                <div className="icon-box">📞</div>
                                <Link to="/" className="footer-nav-link">{contact[2]}
                                </Link>
                            </li>
                        </ul>


                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title"> {subHeadings[5]}</h2>
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
                        <img src="/images/payment.png" alt="payment methods" className="payment-img" />
                        <p className="copyright"> {copyRight}
                        </p>
                    </div>
                </div>

            </footer>


            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        </div>
    )
}

export default Footer
