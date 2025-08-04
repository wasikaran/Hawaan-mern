import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../contextAPI/FuncContext';
import { useNavigate } from 'react-router-dom';
import Notification  from './Notification';

const ProductDetails = () => {
  const navigate = useNavigate()
  const { category, sProduct, subCategory, quantity, setQuantity, fetchProduct, handleSubmit, getSingleProduct } = useProduct();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

const addProduct = {
  id: product?.id || '',
  name: product?.name || '',
  image: product?.image || '',
  description: product?.description || '',
  originalPrice: product?.originalPrice || 0,
  brand: product?.brand || '',
  rating: product?.rating || 0,
  inStock: product?.inStock || 0,
  category: category,
  subCategory: subCategory,
  sizes: size || '',
  colors: color || '',
  quantity: quantity || ''
};
useEffect(() => {
  console.log("Fetching product with ID:", id);
  const getProduct = async () => {
    const data = await fetchProduct(id);
    console.log("Fetched data:", data);
    setProduct(data);
  };

  getProduct();
}, [id]);


  const colors = [
    { name: "#000000", color: "black" },
    { name: "#4c10f3ff", color: "blue" },
    { name: "#da3f10ff", color: "blue" }
  ];

  const sizes = [
    { name: "small", symbol: "S" },
    { name: "medium", symbol: "M" },
    { name: "large", symbol: "L" },
    { name: "Xlarge", symbol: "XL" }
  ];

const [activeTab, setActiveTab] = useState('description');

  const tabButtonStyle = (isActive) => ({
    padding: '12px 24px',
    backgroundColor: isActive ? '#111827' : '#f9fafb',
    color: isActive ? '#fff' : '#111827',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
    transform: isActive ? 'scale(1.05)' : 'scale(1)',
  });

  const tabButtonHoverStyle = {
    backgroundColor: '#374151',
    color: '#fff',
  };

  const contentStyle = {
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    marginTop: '20px',
    transition: 'opacity 0.4s ease-in-out',
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleClick = (sizeName) => {
    setActiveSize(prev => prev === sizeName ? null : sizeName);
    setSize(sizeName);
  };

  const handleColorClick = (colorName) => {
    setActiveColor(prev => prev === colorName ? null : colorName);
    setColor(colorName);
  };

  const increaseQty = () => {
    setQuantity(prev => (prev < 10 ? prev + 1 : prev));
  };

  const decreaseQty = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  if (!product) return <div>Loading product...</div>;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;


    const handleBuyNow = ()=>{
      getSingleProduct(id)
      navigate('/checkout')
    }

  return (<>
    <div className="product-details-container" style={{ display: "flex", justifyContent: "start" }}>
      <div className="container">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>{category}</span>
          <span>/</span>
          <span>{subCategory}</span>
        </div>

        <div className="product-details-content">
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt="Main" />
            </div>
            <div className="thumbnail-images">
              <img src={product.image} alt="Thumb 1" onClick={() => setProduct(prev => ({ ...prev, image: product.image }))} />
              <img src={product.hoverImage} alt="Thumb 2" onClick={() => setProduct(prev => ({ ...prev, image: product.hoverImage }))} />
            </div>
          </div>

          <div className="product-info" style={{textAlign: 'start'}}>
            <h1>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0 15px 0' }}>
              {[...Array(5)].map((_, i) => {
                const filled = product.rating >= i + 1;
                const half = product.rating > i && product.rating < i + 1;
                return (
                  <span key={i} style={{ color: filled ? '#facc15' : half ? '#facc15' : '#ccc', fontSize: '20px' }}>
                    {half ? '★' : '★'}
                  </span>
                );
              })}
              <span style={{ marginLeft: '8px', fontSize: '14px', color: '#555' }}>
                ({product.rating})
              </span>
            </div>

            <div className="product-price">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">${product.originalPrice}</span>
                  <span className="discount-badge">{discount}% Off</span>
                </>
              )}
            </div>
            <div>
              <h3 className='mx-2' style={{ marginBottom: "10px", marginTop: "10px" }}>Description

              </h3>
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              <div className="size-selector">
                <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>Size:</h3>
                <div className="size-options">
                  {sizes.map((s, i) => (
                    <button
                      key={i}
                      className={`size-btn ${activeSize === s.name ? 'active' : ''}`}
                      onClick={() => handleClick(s.name)}
                    >
                      {s.symbol}
                    </button>
                  ))}
                </div>
              </div>

              <div className="color-selector">
                <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>Color:</h3>
                <div className="color-options">
                  {colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => handleColorClick(c.name)}
                      className={`color-btn ${activeColor === c.name ? 'active' : ''}`}
                      style={{
                        backgroundColor: c.name,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: activeColor === c.name ? '2px solid hotpink' : '1px solid #ccc',
                        cursor: 'pointer',
                        marginRight: '10px'
                      }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '10px', fontWeight: '500' }}>Quantity:</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={decreaseQty}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#111827',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '20px',
                      cursor: 'pointer',
                    }}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    style={{
                      width: '60px',
                      height: '40px',
                      textAlign: 'center',
                      fontSize: '16px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      backgroundColor: '#f5f5f5',
                      outline: 'none',
                    }}
                  />

                  <button
                    onClick={increaseQty}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#111827',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '20px',
                      cursor: 'pointer',
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

            </div>


            <div className="product-actions">
<button className="add-to-cart-btn" onClick={() => handleSubmit(addProduct)}>
  Add to Cart
</button>
              <button onClick={handleBuyNow} className="buy-now-btn">Buy Now</button>
            </div>

            <div className="product-features">
              <div className="feature">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>1 Year Warranty</span>
              </div>
              <div className="feature">
                <ion-icon name="car-outline"></ion-icon>
                <span>Free Shipping</span>
              </div>
              <div className="feature">
                <ion-icon name="return-up-back-outline"></ion-icon>
                <span>30 Days Return</span>
              </div>
            </div>

          </div>
        </div>
        <div className="product-tabs" style={{ marginTop: '40px' }}>
      <div
        className="tab-buttons"
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '25px',
        }}
      >
        {['description', 'specifications', 'reviews'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            onMouseOver={(e) => {
              if (activeTab !== tab)
                Object.assign(e.target.style, tabButtonHoverStyle);
            }}
            onMouseOut={(e) => {
              if (activeTab !== tab)
                Object.assign(e.target.style, tabButtonStyle(false));
            }}
            style={tabButtonStyle(activeTab === tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="tab-content" style={contentStyle}>
        {activeTab === 'description' && (
          <div>
            <h3 style={{ marginBottom: '10px' }}>Product Description</h3>
            <p style={{ lineHeight: '1.7' }}>
              Detailed product description will be displayed here. This section provides comprehensive
              information about the product features, materials, care instructions, and other relevant
              details.
            </p>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div>
            <h3 style={{ marginBottom: '10px' }}>Specifications</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  ['Material', 'Cotton Blend'],
                  ['Care Instructions', 'Machine Wash Cold'],
                  ['Country of Origin', 'India'],
                  ['Brand', 'HAWAAN'],
                ].map(([label, value], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '10px 0', fontWeight: '500', width: '40%' }}>{label}</td>
                    <td style={{ padding: '10px 0' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 style={{ marginBottom: '10px' }}>Customer Reviews</h3>

            <div
              className="review-summary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px',
              }}
            >
              <span style={{ fontSize: '28px', fontWeight: 'bold' }}>4.5</span>
              <div style={{ fontSize: '20px', color: '#fbbf24' }}>★★★★☆</div>
              <span style={{ color: '#6b7280' }}>Based on 127 reviews</span>
            </div>

            <div className="reviews-list">
              {[
                {
                  name: 'John Doe',
                  rating: 5,
                  text: 'Great quality product! Exactly as described and fast shipping.',
                  date: '2 days ago',
                },
                {
                  name: 'Jane Smith',
                  rating: 4,
                  text: 'Good product, fits well. Would recommend to others.',
                  date: '1 week ago',
                },
              ].map((review, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  <strong>{review.name}</strong>
                  <div style={{ color: '#fbbf24', fontSize: '18px', margin: '5px 0' }}>
                    {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                  </div>
                  <p style={{ marginBottom: '5px' }}>{review.text}</p>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>{review.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
          </div>
    </div>
      </>

  );
};

export default ProductDetails;
