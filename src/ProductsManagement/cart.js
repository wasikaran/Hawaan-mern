
import React, { useEffect } from 'react';
import { useProduct } from '../contextAPI/FuncContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const {
    quantity,
    setQuantity,
    fetchProduct,
    productAll,
    getSingleProduct,
    getProducts,
    deleteAllProductsFromCart,
    removeProductFromCart,
    updateProductQuantity // You'll need to add this function to your context
  } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  const shipping = 60.0;
  const tax = 40.0;

  // Calculate subtotal based on productAll
  const subtotal = productAll.reduce(
    (total, product) => total + product.originalPrice * (product.quantity || 1),
    0
  );

  const total = subtotal + shipping + tax;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    // Update the quantity in your context
    updateProductQuantity(id, newQuantity);
  };

  const handleInputChange = (id, e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      updateProductQuantity(id, value);
    }
  };

  const proceedToCheckout = () => {
    localStorage.removeItem('singleProduct')
    navigate('/checkout'); 

  };
  const handleSingleProductCheckout = (id) => {
    getSingleProduct(id)
    navigate('/checkout'); 

  };

 

  return (
    <div className="cart-page">
      <main>
        <div className="cart-container">
          <div className="container">
            {productAll.length > 0 ? (
              <>
                <div className="cart-header">
                  <h1 className="cart-title">Shopping Cart</h1>
                  <button 
                    className="back-btn"
                    onClick={() => navigate(-1)}
                    
                  >
                                              <i className="bi bi-bag"></i>

                    Continue Shopping
                  </button>
                </div>

                <div className="cart-content">
                  <div className="cart-items">
                    {productAll.map((product) => (
                      <div key={product._id} className="cart-item">
                        <div className="item-image">
                          <img 
                            src={product.image || 'https://via.placeholder.com/100'} 
                            alt={product.name} 
                          />
                        </div>
                        <div className="item-details">
                          <h3 className="item-name">{product.name}</h3>
                          <p className="item-description">{product.description}</p>
                          <div className="item-price">${product.originalPrice.toFixed(2)}</div>
                        </div>
                        <div className="item-quantity">
                          <button 
                            className="quantity-btn minus"
                            onClick={() => handleQuantityChange(product._id, (product.quantity || 1) - 1)}
                            disabled={(product.quantity || 1) <= 1}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            value={product.quantity || 1}
                            min="1"
                            onChange={(e) => handleInputChange(product._id, e)}
                          />
                          <button 
                            className="quantity-btn plus"
                            onClick={() => handleQuantityChange(product._id, (product.quantity || 1) + 1)}
                          >
                            +
                          </button>
                        </div>
                        <div className="item-total">
                          ${(product.originalPrice * (product.quantity || 1)).toFixed(2)}
                        </div>
                        <button 
                          className="item-remove"
                          onClick={() => removeProductFromCart(product._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        <button 
                          className="item-remove"
                          onClick={()=> {handleSingleProductCheckout(product.id)}}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="cart-summary">
                    <div className="summary-card">
                      <h3 className="summary-title">Order Summary</h3>
                      
                      <div className="summary-row">
                        <span>Subtotal ({productAll.length} items):</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      
                      <div className="summary-row">
                        <span>Shipping:</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      
                      <div className="summary-row">
                        <span>Tax:</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      
                      <hr className="summary-divider"/>
                      
                      <div className="summary-row total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      
                      <button 
                        className="checkout-btn"
                        onClick={proceedToCheckout}
                      >
                        Proceed to Checkout
                      </button>
                      
                      <button 
                        className="clear-cart-btn"
                        onClick={()=>{deleteAllProductsFromCart()}}
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <div className="empty-cart-content">
                  <h2>Your cart is empty</h2>
                  <p>Looks like you haven't added anything to your cart yet.</p>
                  <button 
                    className="shop-now-btn"
                    onClick={() => navigate(-1)}
                  >
                    Start Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <style>{`
        .cart-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          background-color: #f8f9fa;
          min-height: 100vh;
        }
        
        .cart-container {
          padding: 2rem 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .cart-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2c3e50;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #3498db;
          font-size: 1rem;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        
        .back-btn:hover {
          background-color: #f0f0f0;
        }
        
        .cart-content {
          display: flex;
          gap: 2rem;
        }
        
        .cart-items {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .cart-item {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        
        .cart-item:hover {
          transform: translateY(-2px);
        }
        
        .item-image {
          width: 100px;
          height: 100px;
          margin-right: 1.5rem;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 4px;
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-name {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }
        
        .item-description {
          color: #7f8c8d;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .item-price {
          font-weight: 600;
          color: #e74c3c;
        }
        
        .item-quantity {
          display: flex;
          align-items: center;
          margin: 0 1.5rem;
        }
        
        .quantity-btn {
          width: 30px;
          height: 30px;
          border: 1px solid #ddd;
          background: #f8f9fa;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .quantity-btn:hover {
          background: #e9ecef;
        }
        
        .item-quantity input {
          width: 50px;
          height: 30px;
          text-align: center;
          border: 1px solid #ddd;
          border-left: none;
          border-right: none;
          -moz-appearance: textfield;
        }
        
        .item-quantity input::-webkit-outer-spin-button,
        .item-quantity input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        .item-total {
          font-weight: 600;
          margin: 0 1.5rem;
          min-width: 80px;
          text-align: right;
        }
        
        .item-remove {
          background: none;
          border: none;
          color: #e74c3c;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        
        .item-remove:hover {
          background-color: #fdecea;
        }
        
        .cart-summary {
          flex: 1;
        }
        
        .summary-card {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          position: sticky;
          top: 1rem;
        }
        
        .summary-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .summary-row.total {
          font-weight: 600;
          font-size: 1.2rem;
          margin-top: 1rem;
        }
        
        .summary-divider {
          border: none;
          border-top: 1px solid #eee;
          margin: 1.5rem 0;
        }
        
        .checkout-btn {
          width: 100%;
          padding: 1rem;
          background-color: #2ecc71;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 1rem;
          transition: background-color 0.2s;
        }
        
        .checkout-btn:hover {
          background-color: #27ae60;
        }
        
        .clear-cart-btn {
          width: 100%;
          padding: 1rem;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 1rem;
          transition: background-color 0.2s;
        }
        
        .clear-cart-btn:hover {
          background-color: #c0392b;
        }
        
        .empty-cart {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50vh;
          text-align: center;
        }
        
        .empty-cart-content {
          max-width: 400px;
        }
        
        .empty-cart-icon {
          font-size: 4rem;
          color: #bdc3c7;
          margin-bottom: 1rem;
        }
        
        .empty-cart h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        
        .empty-cart p {
          color: #7f8c8d;
          margin-bottom: 1.5rem;
        }
        
        .shop-now-btn {
          padding: 0.8rem 2rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .shop-now-btn:hover {
          background-color: #2980b9;
        }
        
        @media (max-width: 768px) {
          .cart-content {
            flex-direction: column;
          }
          
          .cart-item {
            flex-wrap: wrap;
            gap: 1rem;
          }
          
          .item-details {
            order: 1;
            flex: 1 1 100%;
          }
          
          .item-quantity {
            order: 2;
            margin: 0;
          }
          
          .item-total {
            order: 3;
            text-align: left;
            margin: 0;
          }
          
          .item-remove {
            order: 4;
            margin-left: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;