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
import ScrollToTop from './components/ScrollToTop';
import ProductPage from './pages/ProductPage.jsx';
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

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:slug" element={<ProductPage/>} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
