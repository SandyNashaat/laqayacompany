import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const HomeDecorIdeas = () => {
  const phoneNumber = "966531229390"; // رقم الهاتف لسهولة التعديل

  return (
    <div dir="rtl" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* 1. العمود الرئيسي للمقال */}
        <div className="lg:w-3/4 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-600">
          <article className="max-w-none text-gray-800 leading-relaxed">
            
            {/* عنوان المقال */}
            <h1 className="text-3xl font-extrabold mb-6 text-gray-900 text-center border-b-2 pb-3 border-gray-100">
              أفكار مبتكرة لتجديد ديكور منزلك باستخدام الأثاث المستعمل
            </h1>

            {/* الصورة مع تأثير (Hover Effect) */}
            <div className="my-8 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.01] group">
              <img 
                src="/assets/images/image-37.webp" 
                alt="غرف نوم مستعملة للبيع بالرياض - لقايا" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                width="900" 
              />
            </div>

            <p className="text-lg font-medium text-gray-700 mb-8 border-r-4 border-orange-500 pr-3">
              هل ترغب في تجديد ديكور منزلك بطرق مبتكرة وذكية؟ في <strong>لقايا</strong> نقدم لك أفكار ملهمة لاستخدام
              الأثاث المستعمل وتحويله إلى قطع عصرية تضيف لمسة جمالية لمنزلك بأقل التكاليف.
            </p>

            {/* الأقسام الفرعية المُحسَّنة */}
            
            {/* 1. إعادة طلائه وتجديده */}
            <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800 border-r-4 border-blue-600 pr-3">
                1. إعادة طلائه وتجديده
            </h2>
            <p className="mb-6 text-base">
              يمكن إعادة طلاء الأثاث القديم بألوان عصرية أو دهانات متخصصة لتجديد مظهره بالكامل وإعطائه حياة جديدة. فكر في الألوان الجريئة أو الألوان الهادئة مثل الرمادي والأبيض لتناسب الديكور الحديث.
            </p>

            {/* 2. تغيير الأقمشة والوسائد */}
            <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800 border-r-4 border-blue-600 pr-3">
                2. تغيير الأقمشة والوسائد
            </h2>
            <p className="mb-6 text-base">
              تجديد القماش أو الوسائد على الأرائك والكراسي يمنح القطع القديمة مظهراً عصرياً وجذاباً. اختر أقمشة ذات جودة عالية ونقوش متناسقة مع ألوان الغرفة لإحداث فرق كبير.
            </p>

            {/* 3. إعادة ترتيب القطع */}
            <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800 border-r-4 border-blue-600 pr-3">
                3. إعادة ترتيب القطع
            </h2>
            <p className="mb-6 text-base">
              تغيير موقع الأثاث داخل الغرف أو تعديل ترتيب القطع يخلق تأثيراً جديداً على ديكور المنزل دون الحاجة لشراء جديد. جرب دمج قطع من غرف مختلفة لخلق مظهر فريد.
            </p>

            {/* 4. إضافة لمسات زخرفية */}
            <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800 border-r-4 border-blue-600 pr-3">
                4. إضافة لمسات زخرفية
            </h2>
            <p className="mb-6 text-base">
              استخدام الملحقات الصغيرة مثل المرايا، الصور، والسجاد يمكن أن يبرز جمال الأثاث المستعمل ويجعله جزءاً من تصميم عصري متكامل. الإضاءة أيضاً تلعب دوراً كبيراً في إبراز جمال القطع.
            </p>

            {/* الخلاصة */}
            <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800 border-r-4 border-orange-500 pr-3">
                الخلاصة: ابدأ التجديد الآن!
            </h2>
            <p className="text-base">
              مع <strong>لقايا</strong>، يمكنك تحويل الأثاث المستعمل إلى قطع ديكور عصرية ومميزة بسهولة وبتكلفة منخفضة، مع
              الحفاظ على البيئة والاستفادة القصوى من أثاثك القديم. **نشتري أثاثك المستعمل ونوفر لك أفضل القطع المجددة.**
            </p>

          </article>
        </div>

        {/* 2. العمود الجانبي (مكانه ثابت على الشاشات الكبيرة) */}
        <aside className="lg:w-1/4">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                    هل لديك أثاث قديم للبيع؟
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                    تواصل معنا فوراً للحصول على أفضل تقييم لأثاثك المستعمل في الرياض.
                </p>

                {/* زر الاتصال */}
                <a
                    href={`tel:+${phoneNumber}`}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold 
                               px-4 py-3 mb-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                >
                    <Phone size={20} />
                    اتصال سريع
                </a>

                {/* زر الواتساب */}
                <a
                    href={`https://wa.me/${phoneNumber}?text=مرحبا،%20أرغب%20في%20بيع%20أثاث%20مستعمل%20كما%20ورد%20في%20المقالة.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold 
                               px-4 py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-md"
                >
                    <MessageSquare size={20} />
                    تواصل عبر الواتساب
                </a>
                
                <div className="mt-4 border-t pt-4">
                    <Link to="/services" className="text-blue-600 font-semibold hover:underline text-sm">
                        استكشف مناطق خدمتنا »
                    </Link>
                </div>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default HomeDecorIdeas;