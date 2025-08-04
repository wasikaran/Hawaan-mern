import './App.css';
import Footer from './pages/home/Footer';
import Header from './pages/home/Header';
import Slider from './pages/home/Slider';
import Main from './pages/home/main';
import Products from './ProductsManagement/Products';
import { ProductProvider } from './contextAPI/FuncContext';
import ProductDetails from './ProductsManagement/ProductDetails';
import AboutMain from './pages/about/aboutMain'
import Blog from './pages/blogs/blog'
import Contact from './pages/contact/contact'
import Faq from './pages/faq/faq'
import PP from './pages/privacypolicy/PP'
import RP from './pages/returnpolicy/RP'
import SizeGuide from './pages/size&guide/sizeGuide'
import Terms from './pages/terms&condition/Terms'
import Cart from './ProductsManagement/cart'
import Form from './ProductsManagement/form'
import Auth from './ProductsManagement/Auth'
import Orders from './ProductsManagement/orders'
import Chatbot from './chatbotAI/Chatbot'
import Notification from './ProductsManagement/Notification';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './contextAPI/LanguageContext';

function App() {
  return (

    <>
     <ProductProvider>
      <LanguageProvider>
      <Router>
        <Header/>
        <Chatbot/>

            <Notification/>

        
        <Routes>
          
          <Route exact path="/" element={<Main />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/checkout" element={<Form />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<AboutMain />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/privacy" element={<PP />} />
          <Route exact path="/return" element={<RP />} />
          <Route exact path="/size" element={<SizeGuide />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/men/formal" element={<Products ChildCategory="mens-collection" ChildSubCategory="formal" />} />
          <Route exact path="/men/casual" element={<Products ChildCategory="mens-collection" ChildSubCategory="casual" />} />
          <Route exact path="/men/tshirts" element={<Products ChildCategory="mens-collection" ChildSubCategory="tshirts" />} />
          <Route exact path="/jackets" element={<Products ChildCategory="mens-collection" ChildSubCategory="jackets" />} />
          <Route exact path="/men/shorts" element={<Products ChildCategory="mens-collection" ChildSubCategory="shorts" />} />
          <Route exact path="/women/formal" element={<Products ChildCategory="womens-collection" ChildSubCategory="formal" />} />
          <Route exact path="/kurtas&suits" element={<Products ChildCategory="womens-collection" ChildSubCategory="kurtas&suits" />} />
          <Route exact path="/saree" element={<Products ChildCategory="womens-collection" ChildSubCategory="saree" />} />
          <Route exact path="/lehenga&cholis" element={<Products ChildCategory="womens-collection" ChildSubCategory="lehenga&cholis" />} />
          <Route exact path="/dupatta&shawls" element={<Products ChildCategory="womens-collection" ChildSubCategory="dupattas&shawls" />} />
          <Route exact path="/kids/formal" element={<Products ChildCategory="kids-collection" ChildSubCategory="formal" />} />
          <Route exact path="/kids/casual" element={<Products ChildCategory="kids-collection" ChildSubCategory="casual" />} />
          <Route exact path="/kids/shorts" element={<Products ChildCategory="kids-collection" ChildSubCategory="shorts" />} />
          <Route exact path="/kids/tshirts" element={<Products ChildCategory="kids-collection" ChildSubCategory="tshirts" />} />
          <Route exact path="/trousers" element={<Products ChildCategory="kids-collection" ChildSubCategory="trousers" />} />
          <Route exact path="/earrings" element={<Products ChildCategory="jewellery" ChildSubCategory="earrings" />} />
          <Route exact path="/couplerings" element={<Products ChildCategory="jewellery" ChildSubCategory="couplerings" />} />
          <Route exact path="/necklace" element={<Products ChildCategory="jewellery" ChildSubCategory="necklace" />} />
          <Route exact path="/bracelet" element={<Products ChildCategory="jewellery" ChildSubCategory="bracelet" />} />
          <Route exact path="/floral" element={<Products ChildCategory="perfumes" ChildSubCategory="floral" />} />
          <Route exact path="/oriental" element={<Products ChildCategory="perfumes" ChildSubCategory="oriental" />} />
          <Route exact path="/woody" element={<Products ChildCategory="perfumes" ChildSubCategory="woody" />} />
          <Route exact path="/fougere" element={<Products ChildCategory="perfumes" ChildSubCategory="fougere" />} />
          <Route exact path="/sunglasses" element={<Products ChildCategory="mens-accessories" ChildSubCategory="sunglasses" />} />
          <Route exact path="/watches" element={<Products ChildCategory="mens-accessories" ChildSubCategory="watches" />} />
          <Route exact path="/shoes" element={<Products ChildCategory="mens-accessories" ChildSubCategory="shoes" />} />
          <Route exact path="/wallets" element={<Products ChildCategory="mens-accessories" ChildSubCategory="wallets" />} />
          <Route exact path="/lipstick" element={<Products ChildCategory="makeup" ChildSubCategory="lipstick" />} />
          <Route exact path="/eyeliner" element={<Products ChildCategory="makeup" ChildSubCategory="eyeliner" />} />
          <Route exact path="/mascara" element={<Products ChildCategory="makeup" ChildSubCategory="mascara" />} />
          <Route exact path="/primer" element={<Products ChildCategory="makeup" ChildSubCategory="primer" />} />
          <Route exact path="/mouse" element={<Products ChildCategory="electronics" ChildSubCategory="mouse" />} />
          <Route exact path="/microphone" element={<Products ChildCategory="electronics" ChildSubCategory="microphone" />} />
          <Route exact path="/smartwatch" element={<Products ChildCategory="electronics" ChildSubCategory="sw" />} />
          <Route exact path="/smartTV" element={<Products ChildCategory="electronics" ChildSubCategory="stv" />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>

      <Footer/>
      </Router>
      </LanguageProvider>
    </ProductProvider>

    
    </>

  );
}


export default App;
