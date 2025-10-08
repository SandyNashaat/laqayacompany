import React from "react";
import { ArrowLeft } from "lucide-react"; // استخدام أيقونة السهم من Lucide

const Card = ({ title, description, link, img }) => {
  return (
    <div
      dir="rtl" // لضمان العرض الصحيح للنص العربي
      className="bg-white border-b-4 border-orange-500 rounded-xl shadow-2xl overflow-hidden 
                 transform transition-all duration-500 ease-in-out
                 hover:shadow-orange-200 hover:scale-[1.01]"
    >
      {/* قسم الصورة مع تأثير التكبير */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover 
                     transition-transform duration-500 ease-in-out
                     group-hover:scale-105" // تأثير التكبير عند التمرير على الكارد
        />
      </div>

      {/* قسم المحتوى */}
      <div className="p-5 flex flex-col justify-between h-[230px]">
        <div>
          {/* العنوان الرئيسي */}
          <h3 className="text-xl font-extrabold mb-3 text-gray-900 border-r-4 border-orange-500 pr-2">
            {title}
          </h3>
          {/* الوصف */}
          <p className="text-base text-gray-700 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* زر الإجراء (CTA) - اقرأ المزيد */}
        <a
          href={link}
          className="mt-4 inline-flex items-center justify-center gap-2 
                     bg-orange-500 text-white font-bold text-sm 
                     px-5 py-2 rounded-lg shadow-md 
                     hover:bg-orange-600 hover:shadow-lg
                     transition-all duration-300 transform hover:translate-x-1"
        >
          <span>عرض التفاصيل</span>
          <ArrowLeft size={16} />
        </a>
      </div>
    </div>
  );
};

export default Card;