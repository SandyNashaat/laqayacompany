import React from "react";
// استخدام أيقونات FaCouch, FaBed, FaAward, FaPlug, FaUtensils
import { FaCouch, FaBed, FaAward, FaPlug, FaUtensils, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

// بيانات المقالات مع تعديل بسيط في الألوان لتوحيدها
const articles = [
    {
        icon: <FaCouch className="text-2xl" />,
        iconBg: "bg-indigo-100 text-indigo-700",
        title: "نشتري أثاث مستعمل وأجهزة كهربائية شمال الرياض",
        text: "للتواصل 0531229390. نحن شركة خدمات شراء أثاث مستعمل بالرياض، ونقدم لك أفضل الخدمات مثل شراء غرف نوم، وثلاجات مستعملة، ومكيفات، وشاشات تلفزيون.",
        link: "/about/1",
    },
    {
        icon: <FaBed className="text-2xl" />,
        iconBg: "bg-green-100 text-green-700",
        title: "شراء اثاث مستعمل بالرياض بأفضل الأسعار",
        text: "نحن نشتري الاثاث المستعمل والأجهزة الكهربائية بعد بيع كل ما هو قديم من منزلك، وتقديم تسهيلات وفوائد عديدة، بأسعار مناسبة وجودة عالية وضمان الخدمة.",
        link: "/about/2",
    },
    {
        icon: <FaAward className="text-2xl" />,
        iconBg: "bg-yellow-100 text-yellow-700",
        title: "لماذا نحن أفضل شركة شراء اثاث مستعمل",
        text: "نتميز بخدمات احترافية وسهلة لبيع وشراء الأثاث والأجهزة المستعملة من الشركات والمتاجر، مع ضمان أفضل الأسعار والسرعة في التنفيذ.",
        link: "/about/13",
    },
    {
        icon: <FaPlug className="text-2xl" />,
        iconBg: "bg-red-100 text-red-700",
        title: "شراء اجهزة كهربائية مستعملة في الرياض",
        text: "لدينا أفضل الأسعار ونقدم استشارات حول شراء الأجهزة المنزلية المستعملة. جميع الأجهزة متوفرة بأسعار تنافسية وجودة ممتازة.",
        link: "/about/10",
    },
    {
        icon: <FaUtensils className="text-2xl" />,
        iconBg: "bg-purple-100 text-purple-700",
        title: "بيع وشراء معدات المطاعم المستعملة بالرياض",
        text: "نقدم خدمات بيع وشراء معدات المطاعم المستعملة مثل معدات الطبخ والثلاجات والأدوات الأخرى، بأسعار منافسة وخدمة احترافية وسريعة.",
        link: "/about/7",
    },
];

const Articles = () => {
    return (
        <section className="bg-gray-50 min-h-screen py-16" dir="rtl">
            <div className="container mx-auto px-6 ">
                <div className="text-3xl font-extrabold mb-12 text-center text-gray-900 border-b-4 border-indigo-500/50 pb-4">
                    نشتري أثاث مستعمل وأجهزة كهربائية شمال الرياض مكيفات ثلاجات شاشات غرف نوم مطابخ مستعملة بأفضل الأسعار بالرياض
                </div>

                {/* عرض المقالات على شكل شبكة من الكروت */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl p-6 shadow-2xl hover:shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                        >
                            {/* أيقونة مميزة داخل دائرة */}
                            <div
                                className={`w-16 h-16 rounded-full ${article.iconBg} flex items-center justify-center mb-5 border-4 border-white shadow-md`}
                            >
                                {article.icon}
                            </div>

                            {/* العنوان */}
                            <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
                                {article.title}
                            </h3>

                            {/* الوصف */}
                            <p className="text-gray-600 mb-6 text-base flex-1 leading-relaxed">
                                {article.text}
                            </p>

                            {/* زر الإجراء (اقرأ المزيد) */}
                            <Link
                                to={article.link}
                                className="mt-auto inline-flex items-center gap-2 text-indigo-600 font-semibold border border-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
                            >
                                <span>اقرأ المزيد</span>
                                <FaArrowLeft className="text-sm" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* زر المزيد في الأسفل */}
                <div className="mt-12 text-center">
                    <Link
                        to="/about"
                        className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-200"
                    >
                        عرض جميع الخدمات
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Articles;