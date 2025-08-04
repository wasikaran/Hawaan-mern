import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div>
        <div className="banner">

      <div className="container">

        <div className="slider-container has-scrollbar">

          <div className="slider-item">

            <img src="/images/banner-1.jpg" alt="women's latest fashion sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women's latest fashion sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <Link to="#" className="banner-btn">Shop now</Link>

            </div>

          </div>

          <div className="slider-item">

            <img src="/images/banner-2.jpg" alt="modern sunglasses" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <Link to="#" className="banner-btn">Shop now</Link>

            </div>

          </div>

          <div className="slider-item">

            <img src="/images/banner-3.jpg" alt="new fashion summer sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <Link to="#" className="banner-btn">Shop now</Link>

            </div>

          </div>

        </div>

      </div>

    </div>
    </div>
  )
}

export default Slider
