import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Card from "../components/Card";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
const faqsData = [
  {
    question: "ما هي خدمة لقايا لشراء الأثاث المستعمل؟",
    answer:
      "نحن نوفر خدمة شراء الأثاث المستعمل بجميع أنواعه (غرف نوم، صالونات، مطابخ، أجهزة كهربائية) بأسعار عادلة مع توفير تقييم سريع للأثاث.",
  },
  {
    question: "كيف يمكنني بيع أثاثي المستعمل؟",
    answer:
      "يمكنك التواصل معنا عبر الهاتف أو الواتساب، وإرسال صور الأثاث، وسيقوم فريقنا بتقييم السعر والاتفاق على المعاينة والشراء.",
  },
  {
    question: "هل توفرون خدمة نقل الأثاث بعد الشراء؟",
    answer:
      "نعم، نوفر خدمة نقل الأثاث بعد الاتفاق. حسب سياسة العرض قد تكون مجانية أو بتكلفة متفق عليها، وسيتم توضيح ذلك أثناء التواصل.",
  },
  {
    question: "هل أستطيع بيع جزء من الأثاث فقط وليس المنزل كامل؟",
    answer:
      "بالطبع، يمكنك بيع أي قطعة أثاث أو جهاز بشكل منفصل دون الحاجة لبيع كل الأثاث.",
  },
  {
    question: "ما هي المناطق التي تغطونها؟",
    answer:
      "نغطي جميع مناطق الرياض والمناطق القريبة، ويمكننا التنسيق لأحياء أخرى حسب الاتفاق والطلب.",
  },
];
const Home = () => {
  return (
    <>
      <Slider />

      {/* Cards Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-10">مقالات ومعلومات مفيدة</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "أفضل أماكن شراء الأثاث المستعمل بالرياض",
              description:
                "دليل شامل لأماكن شراء الأثاث المستعمل بجودة عالية وأسعار مناسبة في الرياض.",
              img: "/assets/images/image-12.webp",
              link: "./about/3",
            },
            {
              title: "خدمة نقل الأثاث المستعمل",
              description:
                "نقل آمن وسريع لجميع أنواع الأثاث مع فريق محترف وخدمة مضمونة.",
              img: "/assets/images/image-13.webp",
              link: "./about/4",
            },
            {
              title: "نشتري جميع أنواع الأثاث",
              description:
                "نشتري غرف نوم، مجالس، مطابخ، مكاتب وأجهزة كهربائية بأسعار ممتازة.",
              img: "/assets/images/image-14.webp",
              link: "./about/5",
            },
            {
              title: "نصائح للحفاظ على أثاثك المستعمل",
              description:
                "تعرف على أفضل طرق العناية بالأثاث ليدوم أطول ويحافظ على مظهره.",
              img: "/assets/images/image-15.webp",
              link: "./about/6",
            },
            {
              title: "كيف نقيّم الأثاث قبل الشراء؟",
              description:
                "آلية تقييم الأثاث لدينا تضمن لك سعرًا عادلًا وجودة عالية في الخدمة.",
              img: "/assets/images/image-16.webp",
              link: "./about/7",
            },
            {
              title: "أثاث مستعمل كالجديد!",
              description:
                "استفد من عروضنا على الأثاث المستعمل بحالة ممتازة وكأنه جديد تمامًا.",
              img: "/assets/images/image-17.webp",
              link: "./about/8",
            },
            {
              title: "خدمة شراء الأثاث من المنازل مباشرة",
              description:
                "نوفر زيارة منزلية لشراء الأثاث وتقييمه فورًا بدون عناء النقل.",
              img: "/assets/images/image-18.webp",
              link: "./about/10",
            },
            {
              title: "إعادة تدوير الأثاث القديم",
              description:
                "ندعم الاستدامة من خلال إعادة استخدام الأثاث أو تدويره بدل التخلص منه.",
              img: "/assets/images/image-19.webp",
              link: "./about/10",
            },
          ].map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              img={item.img}
            />
          ))}
        </div>
      </section>


      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">الأسئلة الشائعة</h2>
        <div className="max-w-6xl mx-auto">
          {faqsData.map((f, idx) => (
            <FAQ key={idx} question={f.question} answer={f.answer} />
          ))}
        </div>
      </section>
       <Articles />
    </>
  );
};

export default Home;
