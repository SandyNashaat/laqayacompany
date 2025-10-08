import React from "react";

const BedroomArticle = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <article className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          شراء غرف نوم مستعملة بالرياض
        </h1>

        <p className="text-lg mb-4">
          نحن في <strong className="text-orange-600">لقايا</strong> نقدم خدمات شراء غرف نوم مستعملة
          بكافة أنواعها، سواء كانت كاملة أو جزئية، وبجميع حالاتها، مع تقديم أفضل الأسعار
          وخدمة نقل فورية لضمان راحتك وسرعة الخدمة.
        </p>

        <img
          alt="غرف نوم مستعملة للبيع بالرياض - لقايا"
          src="/assets/images/image-13.webp"
          className="w-full rounded-xl mb-6 shadow-md"
        />

        <h2 className="text-xl font-semibold text-gray-900 mb-3">مميزات خدماتنا</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>شراء غرف نوم كاملة أو جزئية حسب رغبتك.</li>
          <li>تقييم دقيق لحالة الغرف لتحديد السعر العادل.</li>
          <li>خدمة نقل احترافية وسريعة تصل إلى باب منزلك.</li>
          <li>توفير تجربة سهلة وآمنة لبيع أثاثك المستعمل.</li>
        </ul>

        <img
          alt="غرف نوم مستعملة للبيع بالرياض - لقايا"
          src="/assets/images/image-12.webp"
          className="w-full rounded-xl mb-6 shadow-md"
        />

        <h2 className="text-xl font-semibold text-gray-900 mb-3">كيفية التعامل معنا</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>تواصل معنا عبر الهاتف أو واتساب لتحديد نوع الغرف وحالتها.</li>
          <li>نقوم بتقييم الغرف فوراً وتحديد السعر المناسب.</li>
          <li>الدفع مباشرة بعد الاتفاق.</li>
          <li>نقوم بنقل الغرف إلى المكان المطلوب بأمان واحترافية.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">الخلاصة</h2>
        <p className="text-lg">
          مع <strong className="text-orange-600">لقايا</strong>، يمكنك بيع غرف نوم مستعملة بالرياض
          بسهولة وأمان مع الحصول على أفضل الأسعار وخدمة نقل احترافية.
        </p>
      </article>

    </main>
  );
};

export default BedroomArticle;
