import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FurnitureServices = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800" dir="rtl">
      {/* العنوان الرئيسي */}
      <article className="bg-white rounded-2xl shadow-md p-6 md:p-10 leading-relaxed">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          خدمات شراء أثاث مستعمل بالرياض
        </h1>

        {/* الصورة */}
        <img
          src="/assets/images/image-25.webp"
          alt="غرف نوم مستعملة للبيع بالرياض - لقايا"
          className="w-full rounded-xl shadow-sm mb-8 object-cover max-h-[450px]"
        />

        {/* الفقرة الأولى */}
        <p className="text-lg mb-6">
          تقدم <strong>لقايا</strong> خدمات متميزة في الرياض لشراء الأثاث المستعمل
          بمختلف أنواعه، بما في ذلك الشقق، الفلل، والقصور. تشمل خدماتنا شراء
          الأجهزة الكهربائية المستعملة مثل المكيفات، الثلاجات، شاشات التلفزيون،
          وغسالات الملابس، بالإضافة إلى أثاث الغرف، المطابخ، الأثاث الفندقي،
          ومعدات المطاعم وثلاجات البقالات.
        </p>

        {/* مميزات الخدمات */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          مميزات خدمات لقايا
        </h2>
        <ul className="list-disc pr-6 space-y-2 mb-8 text-lg">
          <li>تقييم سريع ودقيق للأثاث المستعمل قبل الشراء.</li>
          <li>خدمة نقل احترافية حتى باب المنزل.</li>
          <li>أسعار منافسة وعادلة لجميع أنواع الأثاث.</li>
          <li>تسهيل عملية البيع بطريقة سهلة وسريعة.</li>
        </ul>

        {/* خطوات البيع */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          خطوات البيع معنا
        </h2>
        <ol className="list-decimal pr-6 space-y-2 mb-8 text-lg">
          <li>تواصل معنا عبر الهاتف أو واتساب لتحديد نوع الأثاث والموعد.</li>
          <li>يتم تقييم الأثاث فوراً لتحديد السعر المناسب.</li>
          <li>الدفع فور الاتفاق على السعر.</li>
          <li>نقوم بنقل الأثاث بكل أمان واحترافية إلى مكاننا أو المكان المطلوب.</li>
        </ol>

        {/* الخلاصة */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">الخلاصة</h2>
        <p className="text-lg">
          مع <strong>لقايا</strong>، يمكنك بيع أثاثك المستعمل في الرياض بسهولة وأمان
          مع أفضل الأسعار وخدمة احترافية.
        </p>
      </article>

    </main>
  );
};

export default FurnitureServices;
