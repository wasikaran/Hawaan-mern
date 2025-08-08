import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../contextAPI/FuncContext';

const OrdersContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  `;

const OrdersHeader = styled.h2`
font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  `;

const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1);
`;

const TableHeader = styled.thead`
background-color: #3498db;
  color: white;
`;

const CustomerInfoHeader = styled.thead`
  background-color: #2ecc71;
  color: white;
`;

const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
`;

const TableRow = styled.tr`
border-bottom: 1px solid #dddddd;
&:nth-child(even) {
    background-color: #f8f9fa;
    }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  vertical-align: top;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #eee;
`;

const ProductImagePreview = styled.img`
width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-right: 5px;
`;

const StatusBadge = styled.span`
display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${props => {
    switch (props.status) {
      case 'completed': return '#2ecc71';
      case 'shipped': return '#3498db';
      case 'processing': return '#f39c12';
      case 'pending': return '#95a5a6';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  }};
  color: white;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #c0392b;
  }
`;

const OrderDetails = styled.div`
margin-top: 1rem;
padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  `;

const ImagePreviewContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MoreImagesBadge = styled.span`
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  margin-left: 5px;
  `;


const Orders = () => {
  const {
    getOrders,
    deleteOrder,
    orders

  } = useProduct();
  const navigate = useNavigate()
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleLogout = async () => {
    await localStorage.removeItem('token')
    const token = localStorage.getItem('token')
    console.log(token)

    navigate('/auth')
  }

  return (
    <>
      <OrdersContainer>
        <OrdersHeader>Order Management</OrdersHeader>

        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <OrdersTable>
            <TableHeader>
              <tr>
                <TableHeaderCell>S.No</TableHeaderCell>
                <TableHeaderCell>Order ID</TableHeaderCell>
                <TableHeaderCell>Product Image</TableHeaderCell>
                <TableHeaderCell>Customer</TableHeaderCell>
                <TableHeaderCell>Products</TableHeaderCell>
                <TableHeaderCell>Total</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Payment</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </tr>
            </TableHeader>
            <tbody>
              {orders.map((order, index) => (
                <React.Fragment key={order._id}>
                  <TableRow onClick={() => toggleOrderDetails(order._id)} style={{ cursor: 'pointer' }}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>#{order._id.slice(-6).toUpperCase()}</TableCell>
                    <TableCell>
                      <ImagePreviewContainer>
                        {order.cartItems.length > 0 && (
                          <>
                            <ProductImagePreview
                              src={order.cartItems[0].image || '/images/placeholder-product.png'}
                              alt={order.cartItems[0].name}
                            />
                            {order.cartItems.length > 1 && (
                              <MoreImagesBadge>+{order.cartItems.length - 1}</MoreImagesBadge>
                            )}
                          </>
                        )}
                      </ImagePreviewContainer>
                    </TableCell>
                    <TableCell>
                      <div>{order.userInfo.fullName}</div>
                      <div style={{ fontSize: '0.8rem', color: '#7f8c8d' }}>{order.userInfo.email}</div>
                    </TableCell>
                    <TableCell>
                      {order.cartItems.length} item{order.cartItems.length !== 1 ? 's' : ''}
                    </TableCell>
                    <TableCell>${order.total}</TableCell>
                    <TableCell>
                      <StatusBadge status={order.status || 'pending'}>
                        {order.status || 'pending'}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>{order.userInfo.paymentMethod}</TableCell>
                    <TableCell>
                      <DeleteButton onClick={(e) => {
                        e.stopPropagation();
                        deleteOrder(order._id);
                      }}>
                        Delete
                      </DeleteButton>
                    </TableCell>
                  </TableRow>

                  {expandedOrder === order._id && (
                    <TableRow>
                      <TableCell colSpan="9">
                        <OrderDetails>
                          <h3 style={{ marginTop: 0 }}>Order Details</h3>

                          <div style={{ marginBottom: '1.5rem' }}>
                            <h4>Customer Information</h4>
                            <OrdersTable>
                              <CustomerInfoHeader>
                                <tr>
                                  <TableHeaderCell>Field</TableHeaderCell>
                                  <TableHeaderCell>Value</TableHeaderCell>
                                </tr>
                              </CustomerInfoHeader>
                              <tbody>
                                <TableRow>
                                  <TableCell><strong>Full Name</strong></TableCell>
                                  <TableCell>{order.userInfo.fullName}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Email</strong></TableCell>
                                  <TableCell>{order.userInfo.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Mobile</strong></TableCell>
                                  <TableCell>{order.userInfo.mobile}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Address</strong></TableCell>
                                  <TableCell>{order.userInfo.address}, {order.userInfo.city}, {order.userInfo.zipCode}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Payment Method</strong></TableCell>
                                  <TableCell>{order.userInfo.paymentMethod}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell><strong>Order Notes</strong></TableCell>
                                  <TableCell>{order.userInfo.orderNotes || 'None'}</TableCell>
                                </TableRow>
                              </tbody>
                            </OrdersTable>
                          </div>

                          <div>
                            <h4>Products</h4>
                            <OrdersTable>
                              <TableHeader>
                                <tr>
                                  <TableHeaderCell>#</TableHeaderCell>
                                  <TableHeaderCell>Image</TableHeaderCell>
                                  <TableHeaderCell>Product</TableHeaderCell>
                                  <TableHeaderCell>Category</TableHeaderCell>
                                  <TableHeaderCell>Price</TableHeaderCell>
                                  <TableHeaderCell>Qty</TableHeaderCell>
                                  <TableHeaderCell>Subtotal</TableHeaderCell>
                                </tr>
                              </TableHeader>
                              <tbody>
                                {order.cartItems.map((item, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell>{idx + 1}</TableCell>
                                    <TableCell>
                                      <ProductImage
                                        src={item.image || '/images/placeholder-product.png'}
                                        alt={item.name}
                                      />
                                    </TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.category} / {item.subCategory}</TableCell>
                                    <TableCell>${item.price}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>${item.price * item.quantity}</TableCell>
                                  </TableRow>
                                ))}
                              </tbody>
                            </OrdersTable>
                          </div>
                        </OrderDetails>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </OrdersTable>
        )}
      </OrdersContainer>
      <div>
        <button onClick={() => { handleLogout() }} style={{ height: '50px', color: 'white', width: '100px', marginBottom: '20px', margin: 'auto', backgroundColor: 'blue', borderRadius: '20px' }}>log out</button>

      </div>
    </>

  );
};

export default Orders;