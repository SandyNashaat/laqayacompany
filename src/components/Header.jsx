import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // استخدام أيقونات القائمة

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // قائمة الروابط لسهولة إدارتها
  const navLinks = [
    { to: "/", label: "الرئيسية" },
    { to: "/about", label: "المدونة" },
    { to: "/services", label: "خدماتنا" },
    { to: "/portfolio", label: "أعمالنا" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" dir="ltr">
          
          {/* 1. شعار الموقع */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/assets/images/image-24.webp" 
              alt="لقايا" 
              className="w-28 h-auto object-contain" 
            />
          </Link>

          {/* 2. روابط التنقل (شاشات كبيرة) */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-6 space-x-reverse font-medium" dir="rtl">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-gray-700 transition-colors duration-200 
                     hover:text-blue-600 pb-1 ${
                      isActive 
                        ? "text-blue-600 font-bold border-b-2 border-blue-600" // النمط النشط
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* 3. زر قائمة الهامبرغر (شاشات صغيرة) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition"
              aria-label="قائمة التنقل"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. القائمة المنسدلة لشاشات الجوال */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } border-t border-gray-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)} // إغلاق القائمة عند النقر
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 
                 ${
                  isActive
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;