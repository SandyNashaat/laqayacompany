import React from "react";

const BuyElectronicsArticle = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <article className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          شراء أجهزة كهربائية بالرياض
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
          <img
            alt="شراء أجهزة كهربائية مستعملة بالرياض - لقايا"
            src="/assets/images/image-16.webp"
            className="rounded-xl w-full md:w-1/2 object-cover"
          />
          <img
            alt="شراء أجهزة كهربائية مستعملة بالرياض - لقايا"
            src="/assets/images/image-19.webp"
            className="rounded-xl w-full md:w-1/2 object-cover"
          />
        </div>

        <p className="text-lg mb-4">
          نحن في <strong className="text-orange-600">لقايا</strong> نشتري جميع أنواع الأجهزة الكهربائية المستعملة في الرياض بأسعار ممتازة، مع توفير
          خدمة فورية من باب المنزل. تشمل خدماتنا الثلاجات، الغسالات، الأفران، المكيفات، وغيرها من الأجهزة الكهربائية.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">مميزات خدماتنا</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>تقييم سريع ودقيق للأجهزة الكهربائية المستعملة.</li>
          <li>خدمة نقل فورية وآمنة حتى باب منزلك.</li>
          <li>أسعار منافسة تتناسب مع حالة الجهاز وسوق الرياض.</li>
          <li>خدمة عملاء متاحة للإجابة على جميع استفساراتك.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">خطوات البيع معنا</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>تواصل معنا عبر الهاتف أو واتساب لتحديد نوع الجهاز والموعد.</li>
          <li>نقوم بتقييم الجهاز فورًا مع تقديم السعر المناسب.</li>
          <li>الدفع يتم فورًا بعد الاتفاق.</li>
          <li>نقوم بنقل الأجهزة بكل أمان واحترافية إلى المكان المطلوب.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">لماذا لقايا؟</h2>
        <p className="text-lg mb-4">
          خبرتنا الطويلة في شراء الأجهزة الكهربائية المستعملة بالرياض تجعلنا الخيار الأمثل لك.
          نقدم لك تقييمًا عادلاً، خدمة سريعة، وأسعار ممتازة دون أي متاعب.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">الخلاصة</h2>
        <p className="text-lg">
          إذا كنت تبحث عن بيع أجهزتك الكهربائية المستعملة بالرياض بسهولة وسرعة، تواصل مع{" "}
          <strong className="text-orange-600">لقايا</strong> الآن للحصول على أفضل عرض.
        </p>
      </article>
    </main>
  );
};

export default BuyElectronicsArticle;
