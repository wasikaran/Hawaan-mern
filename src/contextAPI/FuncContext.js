import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:5000/api/auth';

export const AuthAPI = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
       
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Login failed';
    }
  },

  signup: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, userData);
       
      return response.data;
     
    } catch (error) {
      throw error.response?.data?.message || 'Registration failed';
    }
  }
};

// 1. Create Context
const ProductContext = createContext();

// 2. Custom Hook for easier access
export const useProduct = () => useContext(ProductContext);

// 3. Provider Component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [productAll, setProductAll] = useState([]);
    const [notif, setNotif] = useState({message: "",
      type: ""
    });

  const token = localStorage.getItem('token')

    const fetchProduct = async (id) => {
      try {
const res = await fetch(process.env.PUBLIC_URL + '/data.json');
        const productsData = await res.json();

        for (const cat in productsData) {
          const subCats = productsData[cat];
          for (const subCat in subCats) {
            const productList = subCats[subCat];
            for (const prod of productList) {
              if (String(prod.id) === String(id)) {
                return prod;
              }
            }
          }
        }

      } catch (err) {
        console.log("Product not found");
 await setNotif({
  message: "something went wrong please try again later",
  type: "error"
});       }
    }


   const getSingleProduct = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/product/GSP/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      }
    );    

    console.log(res.data);

    // Save response in localStorage
    localStorage.setItem('singleProduct', JSON.stringify(res.data));
    
  } catch (err) {
 await setNotif({
  message: "something went wrong please try again later",
  type: "error"
});   }
};



  const getProducts = async ()=> {
    try {

      const res = await axios.get(
           'http://localhost:5000/api/product/getAllproducts',
           {
             headers: {
               'Content-Type': 'application/json',
               'auth-token': token
             }
           }
         );
 await setNotif({
  message: "see Your products in the cart Page",
  type: "success"
}); 
         setProductAll(res.data)
       } catch (error) {
         console.error(error.response?.data || error.message);
 await setNotif({
  message: "something went wrong please try again later",
  type: "error"
});     }
    }

    const updateProductQuantity = (productId, newQuantity) => {
  setProductAll(prevProducts => 
    prevProducts.map(product => 
      product._id === productId 
        ? { ...product, quantity: newQuantity } 
        : product
    )
  );
};

    const removeProductFromCart = async (productId) => {
  try {

    const res = await fetch(`http://localhost:5000/api/product/delete/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    });

    const result = await res.json();

    if (res.ok) {
 await setNotif({
  message: "product is successfully deleted from cart",
  type: "success"
});       getProducts(); 
    } else {
      alert(result.message || 'Delete failed');
    }
  } catch (error) {
    console.error('Delete error:', error);
 await setNotif({
  message: "something went wrong please try again later",
  type: "error"
});   }
};

const deleteAllProductsFromCart = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/product/deleteAll', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token  // 🔐 user ka JWT token
      }
    });

    const result = await res.json();

    if (res.ok) {
           setNotif({
    message: "Cart has been cleared successfully",
    type: "success"
  });

      
      getProducts(); // 🔄 cart refresh
    } else {
      alert(result.message || 'Failed to delete all products');
    }
  } catch (error) {
    console.error('Delete all error:', error);
 await setNotif({
  message: "something went wrong please try again later",
  type: "error"
});  }
};


 const handleOrderSubmit = async (orderData) => {

  // Basic validation can go here

  const Data = {
  userInfo: orderData.userInfo,
  cartItems: orderData.products,
  total: orderData.total
}


  try {
    const res = await axios.post("http://localhost:5000/api/order/create", Data, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token // if you're using authentication
      }
    });

    if (res.status === 200 || res.status === 201) {
      alert("Order placed successfully!");
      localStorage.removeItem("singleProduct"); // optional
       await setNotif({
  message: "order is successfully place we'll reply to you soon",
  type: "success"
});
      deleteAllProductsFromCart();
            getProducts(); 

    }
  } catch (error) {
    console.error("Order submission failed:", error);
 await setNotif({
  message: "something went wrong please try again later",
  type: "error"
});  }
};



  const handleSubmit = async (addProduct)=> {
    try {
      console.log(token

      )

      const res = await axios.post(
           'http://localhost:5000/api/product/addProduct',
           addProduct,
           {
             headers: {
               'Content-Type': 'application/json',
               'auth-token': token
             }
           }
         );
            getProducts(); 

          await setNotif({
  message: "Product is successfully added to cart",
  type: "success"
});

       
       } catch (error) {
         console.error(error.response?.data || error.message);
      await setNotif({message: "Error While Adding Product" +  error.message, type:"error"})
    }
    }




  const value = {
    getSingleProduct,
        notif,
    setNotif,
    AuthAPI,
    deleteAllProductsFromCart,
    productAll,
    setProductAll,
    getProducts,
handleSubmit,
fetchProduct,
 handleOrderSubmit,
 updateProductQuantity,
    category,
    setCategory,
    subCategory,
    setSubCategory,
    quantity,
    setQuantity,
    removeProductFromCart

  };


  

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );

};
