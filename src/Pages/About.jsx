import React from "react";
// استخدام أيقونات FaPhoneAlt و FaWhatsapp
import { FaCouch, FaBolt, FaClipboardList, FaStore, FaBed, FaTools, FaRecycle, FaLightbulb, FaTv, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

// بيانات المقالات (بدون تغيير)

const posts = [
  {
    id: 1,
    title: "المدونة",
    desc: "لقايا | 0531229390 توفر خدمات متميزة في الرياض. نقدم خدمات شراء اثاث مستعمل بالرياض والشقق والفلل والقصور مثل شراء أجهزة كهربائية، مكيفات، ثلاجات، شاشات، وأثاث الغرف والمطابخ.",
    icon: <FaCouch className="text-blue-600 text-3xl" />,
    link: "/about/1",
  },
  {
    id: 2,
    title: "أفضل شركة شراء أثاث مستعمل بالرياض",
    desc: "لماذا تعد شركة لقايا الخيار الأفضل لشراء الأثاث المستعمل؟ تعرف على ميزاتنا وخدماتنا المتميزة.",
    icon: <FaClipboardList className="text-orange-500 text-3xl" />,
    link: "/about/13",
  },
  {
    id: 3,
    title: "شراء اثاث مستعمل بالرياض",
    desc: "تعرف على الفرق بين الأثاث المستعمل والجديد من حيث الجودة والسعر والقيمة الجمالية.",
    icon: <FaCouch className="text-green-600 text-3xl" />,
    link: "/about/2",
  },
  {
    id: 4,
    title: "كيفية تقييم جودة الأثاث المستعمل قبل الشراء",
    desc: "نساعدك على تقييم جودة الأثاث من خلال فحص المواد وحالة الخشب والقماش لضمان أفضل اختيار.",
    icon: <FaTools className="text-yellow-600 text-3xl" />,
    link: "/about/3",
  },
  {
    id: 5,
    title: "مميزات شراء الأثاث المستعمل عبر لقايا",
    desc: "خدماتنا تشمل التوصيل، الفحص الفني، والإصلاحات المجانية لجعل تجربتك آمنة ومريحة.",
    icon: <FaStore className="text-purple-600 text-3xl" />,
    link: "/about/4",
  },
  {
    id: 6,
    title: "المقارنة بين الأثاث المستعمل والجديد: أيهما أفضل لك؟",
    desc: "لقايا تساعدك على اتخاذ القرار الأفضل حسب ميزانيتك واحتياجاتك.",
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
    link: "/about/5",
  },
  {
    id: 7,
    title: "شراء غرف نوم مستعملة بالرياض",
    desc: "نشتري غرف نوم كاملة أو جزئية بجميع حالاتها مع خدمة نقل فورية وسعر مناسب.",
    icon: <FaBed className="text-pink-600 text-3xl" />,
    link: "/about/6",
  },
  {
    id: 8,
    title: "بيع وشراء معدات المطاعم المستعملة بالرياض",
    desc: "نقدم خدمات بيع وشراء جميع معدات المطاعم المستعملة بأفضل الأسعار.",
    icon: <FaTools className="text-red-600 text-3xl" />,
    link: "/about/7",
  },
  {
    id: 9,
    title: "أفضل طرق الاستفادة من الأثاث المستعمل",
    desc: "بدلاً من التخلص من الأثاث، يمكنك بيعه للقايا والاستفادة من قيمته.",
    icon: <FaRecycle className="text-green-700 text-3xl" />,
    link: "/about/8",
  },
  {
    id: 10,
    title: "شراء اجهزة كهربائية بالرياض",
    desc: "نقوم بشراء جميع أنواع الأجهزة الكهربائية المستعملة بأفضل الأسعار.",
    icon: <FaBolt className="text-blue-700 text-3xl" />,
    link: "/about/10",
  },
  {
    id: 11,
    title: "مزايا شراء الأثاث المستعمل",
    desc: "الأسباب التي تجعل شراء الأثاث المستعمل خيارًا اقتصاديًا وذكياً.",
    icon: <FaCouch className="text-indigo-500 text-3xl" />,
    link: "/about/11",
  },
  {
    id: 12,
    title: "أفكار لتجديد ديكور منزلك باستخدام الأثاث المستعمل",
    desc: "أفكار ملهمة لتجديد منزلك بلمسات عصرية باستخدام الأثاث المستعمل.",
    icon: <FaTv className="text-teal-600 text-3xl" />,
    link: "/about/12",
  },
];


const About = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-8 lg:px-20 relative" dir="rtl">
      
      {/* عنوان الصفحة */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
          مدونة لقايا للمقالات والنصائح
        </h1>
        <p className="text-center text-gray-600 text-lg">
          اكتشف نصائحنا وأحدث المقالات حول شراء وبيع الأثاث والأجهزة المستعملة في الرياض.
        </p>
      </div>

      {/* البوستات (الكروت) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-blue-600 rounded-xl shadow-2xl 
                       hover:shadow-blue-200 transition-all duration-300 transform hover:translate-y-[-4px] 
                       p-6 flex flex-col justify-between"
          >
            <div>
              {/* العنوان */}
              <h2 className="text-xl font-bold text-gray-800 mb-3 leading-snug">
                {post.title}
              </h2>
              {/* الوصف */}
              <p className="text-gray-700 leading-relaxed mb-5 text-base line-clamp-3">
                {post.desc}
              </p>
            </div>
            
            {/* زر الإجراء (اقرأ المزيد) */}
            <Link
              to={post.link}
              className="mt-auto inline-flex items-center justify-center gap-2
                         bg-blue-600 text-white font-semibold text-sm 
                         px-4 py-2 rounded-lg shadow-md 
                         hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.03]"
            >
              <span>اقرأ المزيد</span>
              <FaArrowLeft className="text-xs" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;