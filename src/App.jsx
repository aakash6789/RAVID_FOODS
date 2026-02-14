import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import DemoProduct from './pages/DemoProduct.jsx';
import ProductDetail from './pages/ProductDetails.jsx';
import {useDocTitle} from './components/CustomHook';
import ProductPage from './pages/ProductPage.jsx';
import AllProducts from './pages/AllProducts.jsx';
import Blogs from './pages/Blogs.jsx';
import ScrollToTop from './helper/ScrollToTop.js';
function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("RAVID FOODS");

  return (
    <>
      <Router>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:slug" element={<ProductPage/>} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
          </Routes>
        {/* </ScrollToTop> */}
      </Router>
    </>
  );
}


export default App;
