import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const BestUsedFurnitureCompany = () => {
  return (
    <main
      className="max-w-5xl mx-auto px-4 py-12 text-gray-800 leading-relaxed"
      dir="rtl"
    >
      <article className="bg-white rounded-2xl shadow-md p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          أفضل شركة شراء أثاث مستعمل بالرياض
        </h1>

        <img
          src="/assets/images/image-21.webp"
          alt="شراء أثاث مستعمل بالرياض"
          className="w-full rounded-xl mb-6 shadow-sm"
        />

        <p className="text-lg mb-6">
          إذا كنت تبحث عن أفضل شركة{" "}
          <strong>شراء أثاث مستعمل بالرياض</strong> فأنت في المكان الصحيح.
          نحن في <strong>لقايا</strong> نقدم لك خدمة مميزة تشمل تقييم الأثاث
          بدقة، تقديم أسعار عادلة، ونقل مجاني وسريع إلى باب منزلك.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          خدماتنا في شراء الأثاث المستعمل
        </h2>
        <p className="text-lg mb-6">
          تشمل خدماتنا شراء جميع أنواع الأثاث مثل غرف النوم، المطابخ، الكنب،
          المكاتب، والأثاث الفندقي والمكتبي. كما نشتري الأجهزة الكهربائية
          المستعملة مثل المكيفات، الثلاجات، الغسالات، والشاشات.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          لماذا تختار لقايا؟
        </h2>
        <ul className="list-disc pr-6 space-y-2 mb-6 text-lg">
          <li>أسعار عادلة ومنافسة في السوق.</li>
          <li>خدمة نقل مجانية وسريعة.</li>
          <li>فريق متخصص في تقييم الأثاث.</li>
          <li>التعامل مع جميع الكميات من القطع الفردية حتى الأثاث الكامل.</li>
        </ul>

        <p className="text-lg">
          اتصل بنا اليوم على{" "}
          <a
            href="tel:+966531229390"
            className="text-orange-600 hover:underline font-semibold"
          >
            0531229390
          </a>{" "}
          أو عبر{" "}
          <a
            href="https://wa.me/966531229390"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-semibold"
          >
            واتساب
          </a>{" "}
          للحصول على عرض سعر فوري.
        </p>
      </article>
    </main>
  );
};

export default BestUsedFurnitureCompany;
