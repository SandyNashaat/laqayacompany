import React from "react";
import { FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";

const Services = () => {
  // كل قسم مع الأحياء التابعة له
  const areas = [
    {
      title: "أحياء وسط الرياض",
      places: [
        "العليا",
        "السليمانية",
        "الصالحية",
        "الفاخرية",
        "الوزارات",
        "المعذر",
        "الفوطة",
        "المربع",
        "الملز",
        "البطحاء",
      ],
    },
    {
      title: "أحياء غرب الرياض",
      places: [
        "ديراب",
        "نمار",
        "سلطانة",
        "البديعة",
        "ظهرة لبن",
        "طويق",
        "العريجاء",
        "السويدي",
      ],
    },
    {
      title: "أحياء شرق الرياض",
      places: [
        "النهضة",
        "الخليج",
        "قرطبة",
        "الحمراء",
        "المعيزيلة",
        "اشبيلية",
        "اليرموك",
        "الرمال",
        "غرناطة",
        "الجزيرة",
        "السلي",
        "الروضة",
        "النسيم الغربي",
      ],
    },
    {
      title: "أحياء جنوب الرياض",
      places: [
        "السويدي الجنوبي",
        "نمار",
        "الحزم",
        "أحد",
        "طيبة",
        "الصناعية القديمة",
        "المنصورة",
        "الدار البيضاء",
        "المروة",
        "العزيزية",
        "بدر",
        "الشفا",
      ],
    },
    {
      title: "أحياء شمال الرياض",
      places: [
        "الضباط",
        "الربيع",
        "حطين",
        "العارض",
        "الغدير",
        "الوادي",
        "النفل",
        "التعاون",
        "الصحافة",
        "الملقا",
        "العقيق",
        "الياسمين",
        "النرجس",
      ],
    },
  ];

  return (
    <div dir="rtl" className="py-10 px-4">
      {/* Banner */}
      <section className="text-center bg-gradient-to-l from-blue-50 to-white rounded-2xl py-10 mb-10 shadow">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          مناطق خدماتنا <span>📍</span>
        </h1>
        <p className="text-gray-600">تعرف على جميع المناطق التي تصلها خدماتنا</p>
      </section>

      {/* Areas */}
      {areas.map((area, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-r-4 border-blue-600 pr-3">
            {area.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.places.map((place, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  شراء مكيفات مستعملة حي {place}
                </h3>
                <a
                  href={`https://www.google.com/maps/search/حي+${place}+الرياض`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 flex items-center gap-2 hover:underline"
                >
                  <FaLocationDot className="text-blue-500" /> عرض على الخريطة
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+966531229390"
          className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaPhone className="text-xl" />
        </a>
        <a
          href="https://wa.me/966531229390"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Services;
