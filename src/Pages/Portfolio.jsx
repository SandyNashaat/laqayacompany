import React from "react";

const services = [
  {
    id: 1,
    title: "أفضل أماكن شراء الأثاث المستعمل بالرياض",
    desc: "اكتشف أفضل الأماكن والخدمات الموثوقة لشراء الأثاث المستعمل بالرياض بأسعار مناسبة وجودة ممتازة، مع خدمة استلام مباشرة من المنزل.",
    link: "../about/13.html",
    imgClass: "image-4",
  },
  {
    id: 2,
    title: "بيع أثاثك المستعمل بسهولة وأمان",
    desc: "نوفر طرقاً سهلة وآمنة لبيع الأثاث المستعمل بالرياض، مع تقييم سريع لكل قطعة ودفع فوري عند الاستلام لتجربة سلسة ومريحة.",
    link: "../about/2.html",
    imgClass: "image-17",
  },
  {
    id: 3,
    title: "تقييم أسعار الأثاث المستعمل بالرياض",
    desc: "احصل على تقييم احترافي لأسعار الأثاث المستعمل في الرياض، وتعرف على القيمة الحقيقية لكل قطعة قبل البيع مع أفضل العروض.",
    link: "../about/7.html",
    imgClass: "image-21",
  },
  {
    id: 4,
    title: "استلام الأثاث المستعمل من منزلك",
    desc: "خدمة استلام الأثاث المستعمل من أي مكان بالرياض بسرعة وأمان، مع فريق متخصص يضمن النقل الآمن والدفع الفوري.",
    link: "../about/4.html",
    imgClass: "image-15",
  },
  {
    id: 5,
    title: "شراء أثاث مستعمل بأسعار منافسة",
    desc: "احصل على أثاث مستعمل بجودة ممتازة وأسعار منافسة بالرياض، مع خدمة شراء موثوقة وسريعة تضمن تجربة سلسة من البداية للنهاية.",
    link: "../about/10.html",
    imgClass: "image-16",
  },
  {
    id: 6,
    title: "خدمة بيع وشراء سلسة للأثاث المستعمل",
    desc: "نقدم تجربة سلسة لبيع وشراء الأثاث المستعمل بالرياض، مع تقييم دقيق وخدمة نقل احترافية لجميع القطع لتسهيل العملية.",
    link: "../about/11.html",
    imgClass: "image-14",
  },
  {
    id: 7,
    title: "أسعار عادلة لجميع أنواع الأثاث المستعمل",
    desc: "نقدم أسعار عادلة للأثاث المستعمل بالرياض، مع خدمة استلام ودفع فوري لتسهيل عملية البيع بأمان وسرعة.",
    link: "../about/13.html",
    imgClass: "image-10",
  },
  {
    id: 8,
    title: "شراء الأثاث المستعمل بسرعة وأمان",
    desc: "احصل على خدمة شراء الأثاث المستعمل بالرياض بسرعة وأمان، مع فريق متخصص يضمن أفضل الأسعار وتجربة مريحة وسلسة.",
    link: "../about/12.html",
    imgClass: "image-5",
  },
  {
    id: 9,
    title: "شراء جميع أنواع الأثاث",
    desc: "نشتري الكنب، الأسرة، المطابخ، والمكاتب المستعملة بأفضل الأسعار بالرياض.",
    link: "../about/11.html",
    imgClass: "image-9",
  },
  {
    id: 10,
    title: "شراء الأثاث المستعمل مع خدمة موثوقة",
    desc: "استمتع بخدمة شراء الأثاث المستعمل بالرياض مع فريق محترف يضمن تقييم سريع واستلام آمن ودفع فوري لتجربة بيع وشراء مريحة.",
    link: "../about/2.html",
    imgClass: "image-3",
  },
  {
    id: 11,
    title: "شراء غرف نوم مستعملة بالرياض بأسعار تنافسية",
    desc: "إذا كنت تبحث عن بيع غرف نوم مستعملة بالرياض بأسرع طريقة وبأفضل سعر، نحن نوفر لك خدمة شراء ونقل الأثاث مباشرة من منزلك. نشتري جميع أنواع غرف النوم الكاملة أو القطع المنفردة مع ضمان السعر العادل.",
    link: "../about/6.html",
    imgClass: "image-34",
  },
  {
    id: 12,
    title: "شراء أجهزة كهربائية مستعملة بالرياض",
    desc: "إذا كان لديك أجهزة كهربائية مستعملة بالرياض وتبحث عن طريقة مضمونة وسريعة لبيعها، نحن نقدم لك أفضل الأسعار مع خدمة نقل فورية من باب المنزل. نهتم بشراء جميع الأنواع مثل الثلاجات، الغسالات، المكيفات، الشاشات، الأفران، الميكروويف وغيرها.",
    link: "../about/13.html",
    imgClass: "image-32",
  },
];

const Portfolio = () => {
  return (
    <section className="container mx-auto px-4 py-10" dir="rtl">
      {/* العنوان */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">الخدمات</h2>
        <div className="relative flex justify-center items-center mt-2">
          <hr className="w-24 border-b-4 border-orange-500 rounded" />
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-orange-500"></div>
        </div>
      </div>

      {/* الكروت */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* صورة الكارت */}
            <div
              className={`h-48 bg-cover bg-center ${service.imgClass}`}
              style={{
                backgroundImage: `url(/assets/images/${service.imgClass}.webp)`,
              }}
            ></div>

            {/* المحتوى */}
            <div className="p-5 text-right">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
              <a
                href={service.link}
                className="text-orange-600 font-semibold hover:underline"
              >
                اقرأ المزيد →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Portfolio
