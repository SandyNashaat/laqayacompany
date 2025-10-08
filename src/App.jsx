import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import FurnitureServices from "./Blogs/FurnitureServices";
import UsedFurniture from "./Blogs/UsedFurniture";
import UsedFurnitureBenefits from "./Blogs/UsedFurnitureBenefits";
import BestUsedFurnitureCompany from "./Blogs/BestUsedFurnitureCompany";
import FurnitureComparison from "./Blogs/FurnitureComparison";
import BedroomArticle from "./Blogs/BedroomArticle";
import RestaurantEquipmentArticle from "./Blogs/RestaurantEquipmentArticle";
import BuyElectronicsArticle from "./Blogs/BuyElectronicsArticle";
import UsedFurnitureBenefits2 from "./Blogs/UsedFurnitureBenefits2";
import HomeDecorIdeas from "./Blogs/HomeDecorIdeas";
import BestUsedFurnitureCompany2 from "./Blogs/BestUsedFurnitureCompany2";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import ReuseFurnitureArticle from "./Blogs/ReuseFurnitureArticle";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-gray-50">
        {/* ✅ الهيدر */}
        <Header />

        {/* ✅ الصفحات */}
        <main className="flex-grow mt-6" dir="rtl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/1" element={<FurnitureServices />} />
            <Route path="/about/2" element={<UsedFurniture />} />
            <Route path="/about/3" element={<BestUsedFurnitureCompany />} />
            <Route path="/about/4" element={<UsedFurnitureBenefits />} />
            <Route path="/about/5" element={<FurnitureComparison />} />
            <Route path="/about/6" element={<BedroomArticle />} />
            <Route path="/about/7" element={<RestaurantEquipmentArticle />} />
            <Route path="/about/8" element={<ReuseFurnitureArticle />} />
            <Route path="/about/10" element={<BuyElectronicsArticle />} />
            <Route path="/about/11" element={<UsedFurnitureBenefits2 />} />
            <Route path="/about/12" element={<HomeDecorIdeas />} />
            <Route path="/about/13" element={<BestUsedFurnitureCompany2 />} />

            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* ✅ الفوتر */}
        <Footer />

        {/* ✅ أزرار الاتصال العائمة */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* زر الهاتف */}
          <a
            href="tel:+966531229390"
            className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="اتصال هاتفي"
          >
            <FaPhoneAlt className="text-xl" />
          </a>

          {/* زر الواتساب */}
          <a
            href="https://wa.me/966531229390"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="تواصل عبر واتساب"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
