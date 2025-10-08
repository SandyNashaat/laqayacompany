import React from "react";

const RestaurantEquipmentArticle = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <article className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          بيع وشراء معدات المطاعم المستعملة بالرياض
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <img
            alt="معدات مطاعم مستعملة للبيع بالرياض - لقايا"
            src="/assets/images/image-21.webp"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
          <img
            alt="معدات مطاعم مستعملة للبيع بالرياض - لقايا"
            src="/assets/images/image-20.webp"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
        </div>

        <p className="text-lg mb-4">
          نحن في <strong className="text-orange-600">لقايا</strong> نوفر خدمات شراء معدات
          المطاعم المستعملة بالرياض سواء بكميات كبيرة أو صغيرة. كل عملية شراء تتم بتقييم شامل
          لضمان الجودة والأسعار المناسبة لك.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">مميزات التعامل معنا</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>تقييم دقيق لحالة المعدات قبل الشراء.</li>
          <li>خدمة نقل احترافية وسريعة لجميع الكميات.</li>
          <li>أسعار عادلة تتوافق مع جودة المعدات وسوق الرياض.</li>
          <li>تقديم استشارات حول أفضل طرق الاستفادة من المعدات المستعملة.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">خطوات البيع معنا</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>تواصل معنا عبر الهاتف أو واتساب لتحديد الكمية والموعد.</li>
          <li>فريقنا يقوم بتقييم المعدات بشكل شامل ومهني.</li>
          <li>ندفع السعر المتفق عليه فورًا.</li>
          <li>نقوم بنقل المعدات بكفاءة وأمان حتى باب المكان المطلوب.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">لماذا لقايا؟</h2>
        <p className="text-lg mb-4">
          خبرتنا الطويلة في شراء المعدات المستعملة تجعلنا الخيار الأمثل لك. نضمن لك خدمة سريعة،
          تقييم دقيق، وأفضل الأسعار في الرياض.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">الخلاصة</h2>
        <p className="text-lg">
          سواء كنت تريد بيع معدات مطاعم مستعملة بكميات كبيرة أو صغيرة، تواصل مع{" "}
          <strong className="text-orange-600">لقايا</strong> الآن لتجربة بيع مريحة وموثوقة.
        </p>
      </article>
    </main>
  );
};

export default RestaurantEquipmentArticle;
