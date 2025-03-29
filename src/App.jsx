import React, { use, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import Category2 from "./components/category/Category2";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import { bannerData, bannerData2 } from "./constant/bannerData";
import Products from "./components/products/Products";
import Blog from "./components/blog/Blog";
import Partners from "./components/partner/Partners";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
      offset : 0,
    },[]);
    AOS.refresh();
  });
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
      duration-200 overflow-hidden"
    >
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={bannerData} />
      <Products />
      <Banner data={bannerData2} />
      <Blog />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
