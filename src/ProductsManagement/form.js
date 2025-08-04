import React, { useEffect, useState } from 'react';
import { useProduct } from '../contextAPI/FuncContext';

const OrderForm = () => {
    const { productAll, sProduct,
        getSingleProduct,
        quantity,
        handleOrderSubmit,

        setProductAll,
        getProducts, } = useProduct();



    useEffect(() => {
        const fetchAndSet = async () => {

            const stored = localStorage.getItem("singleProduct")
            let parsed = JSON.parse(stored)

            // Wrap in array if it's a single object
            if (parsed && !Array.isArray(parsed)) {
                parsed = [parsed]
                console.log(parsed)
                setProducts(parsed || [])
            }
            else {
                await getProducts();
            }
        };

        fetchAndSet();
    }, [])





    useEffect(() => {
        if (productAll.length > 0) {
            setProducts(productAll);
        }
    }, [productAll]);


    const [products, setProducts] = useState([])


    const [form, setForm] = useState({
        fullName: '',
        email: '',
        mobile: '',
        address: '',
        city: '',
        zipCode: '',
        paymentMethod: '',
        orderNotes: '',
    });




    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const orderData = {
        userInfo: form,
        cartItems: products,
        total: products.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0),
    };



    // Calculate total

    return (
        <div className="container" style={{
            maxWidth: '800px',
            margin: '30px auto',
            padding: '30px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <div className="form-header" style={{ marginBottom: '30px' }}>
                <h1 style={{
                    color: '#2c3e50',
                    marginBottom: '10px',
                    fontSize: '28px',
                    fontWeight: '600'
                }}>Complete Your Order</h1>
                <p style={{
                    color: '#7f8c8d',
                    fontSize: '16px'
                }}>Please fill in your details to place your order</p>
            </div>

            <form id="orderForm" onSubmit={(e)=>{handleOrderSubmit(e, orderData)}
            } style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <input type="hidden" name="cartItems" />

                <div style={{ flex: '1 1 100%' }}>
                    <h3 style={{
                        color: '#2c3e50',
                        marginBottom: '20px',
                        paddingBottom: '10px',
                        borderBottom: '1px solid #ecf0f1'
                    }}>Billing Details</h3>
                </div>

                <div className="form-group" style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#34495e'
                    }}>Full Name</label>
                    <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div className="form-group" style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#34495e'
                    }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div className="form-group" style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#34495e'
                    }}>Mobile Number</label>
                    <input
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="03XX-XXXXXXX"
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div className="form-group" style={{ flex: '1 1 100%' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#34495e'
                    }}>Address</label>
                    <textarea
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s',
                            boxSizing: 'border-box',
                            minHeight: '100px',
                            resize: 'vertical'
                        }}
                    />
                </div>

                <div className="form-group" style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#34495e'
                    }}>City</label>
                    <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s',
                            boxSizing: 'border-box',
                            backgroundColor: 'white',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 10px center',
                            backgroundSize: '12px'
                        }}
                    >
                        <option value="">Select City</option>
                        <option value="karachi">Karachi</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="multan">Multan</option>
                    </select>
                </div>

                <div className="form-group" style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#34495e'
                    }}>Zip Code</label>
                    <input
                        type="number"
                        name="zipCode"
                        value={form.zipCode}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div className="form-group" style={{ flex: '1 1 100%', margin: '20px 0' }}>
                    <h3 style={{
                        color: '#2c3e50',
                        marginBottom: '20px',
                        paddingBottom: '10px',
                        borderBottom: '1px solid #ecf0f1'
                    }}>Payment Method</h3>

                    <div style={{ display: 'flex', gap: '30px' }}>
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#34495e'
                        }}>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                onChange={handleChange}
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    accentColor: '#3498db'
                                }}
                            />
                            <div>
                                <div style={{ fontWeight: '500' }}>Cash on Delivery</div>
                                <div style={{ fontSize: '14px', color: '#7f8c8d' }}>Pay with cash upon delivery</div>
                            </div>
                        </label>

                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#34495e'
                        }}>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="bank"
                                onChange={handleChange}
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    accentColor: '#3498db'
                                }}
                            />
                            <div>
                                <div style={{ fontWeight: '500' }}>Bank Transfer</div>
                                <div style={{ fontSize: '14px', color: '#7f8c8d' }}>Make your payment directly into our bank account</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="form-group" style={{ flex: '1 1 100%' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#34495e'
                    }}>Order Notes (Optional)</label>
                    <textarea
                        name="orderNotes"
                        value={form.orderNotes}
                        onChange={handleChange}
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s',
                            boxSizing: 'border-box',
                            minHeight: '100px',
                            resize: 'vertical'
                        }}
                    />
                </div>
                <div id="cartItemsContainer" style={{ marginBottom: '20px', width: '100%' }}>
                    {products.length === 0 ? (
                        <p style={{ color: '#7f8c8d' }}>No items in cart</p>
                    ) : (
                        <div>
                            {/* Dynamic cart items using map */}
                            {products.map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '15px 0',
                                    borderBottom: '1px solid #eee',
                                    alignItems: 'center'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <img
                                            src={item.image || "https://via.placeholder.com/60x60?text=Product"}
                                            alt={item.name}
                                            style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                                        />
                                        <div>
                                            <div style={{ fontWeight: '500', marginBottom: '5px' }}>{item.name}</div>
                                            <div style={{ fontSize: '14px', color: '#7f8c8d' }}>{item.category || 'General'}</div>
                                            <div style={{ fontSize: '14px', color: '#7f8c8d' }}>{item.subCategory} </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '500' }}>${(item.originalPrice * item.quantity).toFixed(2)} {item.quantity}</div>
                                        <div style={{ fontSize: '14px', color: '#7f8c8d' }}>Qty: {item.quantity}</div>
                                    </div>
                                </div>
                            ))}

                            {/* Total Calculation */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '15px 0',
                                fontWeight: '600',
                                fontSize: '18px',
                                borderTop: '1px solid #ddd',
                                marginTop: '10px'
                            }}>
                                <span>Total:</span>
                                <span>
                                    ${products.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    )}
                </div>


                <button
                    type="submit"
                    className="submit-btn"
                    style={{
                        width: '100%',
                        padding: '15px',
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        marginTop: '20px'
                    }}

                    onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default OrderForm;