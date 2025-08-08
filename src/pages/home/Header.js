import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  {useLanguage } from '../../contextAPI/LanguageContext';
import { useProduct } from '../../contextAPI/FuncContext';
import translations from '../../languageData/langData'

const Header = () => {


  const navigate = useNavigate()
  const [modal, setModal] = useState(true);
  const [cart, setCart] = useState([]);
  const {
      getProducts,
      productAll,
      setNotif
    } = useProduct();
  const {
      language,
       toggleLanguage

    } = useLanguage();

      const content = translations[language]
      const { header} = content
      const { home, blog, categories, navlinks, jewllery,perfumes,electronics, men, women, menCollection, womenCollection , kidsCollection, icon} = header

  const token = localStorage.getItem('token')

useEffect(() => {
  
  console.log(translations)
  console.log(content)
  const fetchData = async () => {
    await getProducts(); // yeh context ko update karega
    
  };
  fetchData();
}, []);

useEffect(() => {
  if (productAll && productAll.length > 0) {
    setCart(productAll);
  }
}, [productAll]);

const ToggleLang = async ()=>{
   await setNotif({
  message: "this is a simple language change feature ",
  type: "success"
}); 
toggleLanguage()
}





  return (
    <>
      <div className="overlay" data-overlay></div>

      {modal ? (
        <div className="modal" data-modal>
          <div
            className="modal-close-overlay"
            data-modal-overlay
            onClick={() => setModal(false)}
          ></div>

          <div className="modal-content">
            <button
              onClick={() => setModal(false)}
              className="modal-close-btn"
              data-modal-close
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="newsletter-img">
              <img
                src="/images/newsletter.png"
                alt="subscribe newsletter"
                width="400"
                height="400"
              />
            </div>

            <div className="newsletter">
              <form action="#">
                <div className="newsletter-header">
                  <h3 className="newsletter-title">Subscribe Newsletter.</h3>
                  <p className="newsletter-desc">
                    Subscribe the <b>hawaan</b> to get latest products and discount update.
                  </p>
                </div>

                <input
                  type="email"
                  name="email"
                  className="email-field"
                  placeholder="Email Address"
                  required
                />

                <button type="submit" className="btn-newsletter">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}


      {/* 

  <!--
    - NOTIFICATION TOAST
  --> */}

      <div className="notification-toast" data-toast>

        <button className="toast-close-btn" data-toast-close>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="toast-banner">
          <img src="/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70" />
        </div>

        <div className="toast-detail">

          <p className="toast-message">
            Someone in new just bought
          </p>

          <p className="toast-title">
            Rose Gold Earrings
          </p>

          <p className="toast-meta">
            <time dateTime="PT2M">2 Minutes</time> ago
          </p>

        </div>

      </div>




      {/* 
  <!--
    - HEADER
  --> */}


      <header>


        <div className="header-main">

          <nav className="desktop-navigation-menu">

            <div className="container">

              <Link to="/" className="header-logo">
                <img src="./images/logo/hawaan-stlogo.png" alt="" height="100px" />
              </Link>


              <ul className="desktop-menu-category-list">

                <li className="menu-category">
                  <Link to="/" className="menu-title">{home} </Link>
                </li>

                <li className="menu-category">
                  <Link to="#" className="menu-title">{navlinks[0]} </Link>

                  <div className="dropdown-panel">

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <Link to="#">{categories[0]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/earrings">{jewllery[0]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/couplerings">{jewllery[1]}</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/necklace">{jewllery[2]}</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/bracelet">{jewllery[3]}</Link>
                      </li>



                      <li className="panel-list-item">
                        <Link to="#">
                          <img src="/images/electronics-banner-1.jpg" alt="headphone collection" width="250" height="119" />
                        </Link>
                      </li>

                    </ul>

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <Link to="#">{categories[1]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/floral">{perfumes[0]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/oriental">{perfumes[1]}  </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/woody">{perfumes[2]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/fougere">{perfumes[3]} </Link>
                      </li>



                      <li className="panel-list-item">
                        <Link to="#">
                          <img src="/images/electronics-banner-1.jpg" alt="headphone collection" width="250" height="119" />
                        </Link>
                      </li>

                    </ul><ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <Link to="#">{categories[2]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/sunglasses">{men[0]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/watches">{men[1]}</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/wallets">{men[2]}</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/shoes">{men[3]}</Link>
                      </li>



                      <li className="panel-list-item">
                        <Link to="#">
                          <img src="/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                        </Link>
                      </li>

                    </ul>

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <Link to="#">{categories[3]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/lipstick">{women[0]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/eyeliner">{women[1]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/primer">{women[2]} </Link>
                      </li>



                      <li className="panel-list-item">
                        <Link to="/mascara">{women[3]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="#">
                          <img src="/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" />
                        </Link>
                      </li>

                    </ul>

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <Link to="#">{categories[4]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/smartwatch">{electronics[0]} </Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/smartTV">{electronics[1]}</Link>
                      </li>



                      <li className="panel-list-item">
                        <Link to="/mouse">{electronics[2]}</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="/microphone">{electronics[3]}</Link>
                      </li>

                      <li className="panel-list-item">
                        <Link to="#">
                          <img src="/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" />
                        </Link>
                      </li>

                    </ul>

                  </div>
                </li>

                <li className="menu-category">
                  <Link to="#" className="menu-title">{navlinks[1]} </Link>

                  <ul className="dropdown-list">

                    <li className="dropdown-item">
                      <Link to="/men/formal">{menCollection[0]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/men/casual">{menCollection[1]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/men/tshirts">{menCollection[2]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/jackets">{menCollection[3]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/men/shorts">{menCollection[4]} </Link>
                    </li></ul>
                </li>

                <li className="menu-category">
                  <Link to="#" className="menu-title">{navlinks[2]} </Link>

                  <ul className="dropdown-list">

                    <li className="dropdown-item">
                      <Link to="/women/formal">{womenCollection[0]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/kurtas&suits">{womenCollection[1]} </Link>
                    </li><li className="dropdown-item">
                      <Link to="/saree">{womenCollection[2]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/lehenga&cholis">{womenCollection[3]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/dupattas&shawls"> {womenCollection[4]}  </Link>
                    </li>

                  </ul>
                </li>

                <li className="menu-category">
                  <Link to="#" className="menu-title">{navlinks[3]} </Link>

                  <ul className="dropdown-list">

                    <li className="dropdown-item">
                      <Link to="/kids/formal">{kidsCollection[0]} </Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/kids/casual">{kidsCollection[1]}</Link>
                    </li><li className="dropdown-item">
                      <Link to="/kids/shorts">{kidsCollection[2]}</Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/trousers">{kidsCollection[3]}</Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/kids/tshirts">{kidsCollection[4]}</Link>
                    </li>

                  </ul>
                </li>



                <li className="menu-category">
                  <Link to="/blog" className="menu-title">{blog} </Link>
                </li>

              </ul>






              <div className="header-user-actions">

<button className="action-btn">
  <div className="dropdown" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {token ? (
      <Link to="/orders" className="dropdown-toggle" data-bs-toggle="dropdown" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <i className="bi bi-person-check" style={{ fontSize: '1.4rem' }}></i>
        <span style={{ fontSize: '13px', marginTop: '2px' }}>{icon[1]} </span>
      </Link>
    ) : (
      <Link to="/auth" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <i className="bi bi-person-x" style={{ fontSize: '1.4rem' }}></i>
        <span style={{ fontSize: '13px', marginTop: '2px' }}>{icon[2]} </span>
      </Link>
    )}
  </div>
</button>

<button className="action-btn">
  <Link to="/cart" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
    <i className="bi bi-bag" style={{ fontSize: '1.4rem' }}></i>
    <span style={{ fontSize: '13px', marginTop: '2px' }}>{icon[2]} </span>
                     <span className="count" id="cart-count">{cart ? cart.length : cart}</span>

  </Link>
</button>
<button className="action-btn">
  <div onClick={()=>{ToggleLang()}}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
    <i className="bi bi-globe" style={{ fontSize: '1.4rem' }}></i>
    <span style={{ fontSize: '13px', marginTop: '2px' }}>{language}</span>

  </div>
</button>
              </div>


            </div>
          </nav>

        </div>


        <div className="mobile-bottom-navigation">

          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <button className="action-btn" >
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count" id="mobile-cart-count">0</span>
          </button>

          <button className="action-btn" >
            <ion-icon name="home-outline"></ion-icon>
          </button>



          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline"></ion-icon>
          </button>

        </div>

        <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu="">

          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <button className="menu-close-btn" data-mobile-menu-close-btn="">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="mobile-menu-category-list">

            <li className="menu-category">
              <Link to="/" className="menu-title">Home</Link>
            </li>

            <li className="menu-category">
              <button className="accordion-menu active" data-accordion-btn="">
                <p className="menu-title">Men's</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className="submenu-category-list active" data-accordion="">
                <li className="submenu-category"><Link to="/men/formal" className="submenu-title">Formal</Link></li>
                <li className="submenu-category"><Link to="/casual" className="submenu-title">Casual</Link></li>
                <li className="submenu-category"><Link to="/tshirts" className="submenu-title">Tshirts</Link></li>
                <li className="submenu-category"><Link to="/jackets" className="submenu-title">Jackets</Link></li>
                <li className="submenu-category"><Link to="/shorts" className="submenu-title">Shorts</Link></li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn="">
                <p className="menu-title">Women's</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category"><Link to="/women/formal" className="submenu-title">Formal</Link></li>
                <li className="submenu-category"><Link to="/kurtas&suits" className="submenu-title">Kurtas & Suits</Link></li>
                <li className="submenu-category"><Link to="/saree" className="submenu-title">Saree</Link></li>
                <li className="submenu-category"><Link to="/lehenga&cholis" className="submenu-title">Lehenga Cholis</Link></li>
                <li className="submenu-category"><Link to="/dupattas&shawls" className="submenu-title">Dupattas & Shawls</Link></li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn="">
                <p className="menu-title">Kid's</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion="">
                <li className="submenu-category"><Link to="/kids/formal" className="submenu-title">Formal</Link></li>
                <li className="submenu-category"><Link to="/casual" className="submenu-title">Casual</Link></li>
                <li className="submenu-category"><Link to="/shorts" className="submenu-title">Shorts</Link></li>
                <li className="submenu-category"><Link to="/trousers" className="submenu-title">Trousers</Link></li>
                <li className="submenu-category"><Link to="/tshirts" className="submenu-title">Tshirts</Link></li>
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/blogs" className="menu-title">Blog</Link>
            </li>

          </ul>

          <div className="menu-bottom">

            <ul className="menu-social-container">
              <li><Link to="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></Link></li>
              <li><Link to="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></Link></li>
              <li><Link to="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></Link></li>
              <li><Link to="#" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></Link></li>
            </ul>

          </div>

        </nav>





      </header >
    </>

  )
}

export default Header
