import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const UsedFurniture = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800" dir="rtl">
      <article className="bg-white rounded-2xl shadow-md p-6 md:p-10 leading-relaxed">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          شراء أثاث مستعمل بالرياض
        </h1>

        <p className="text-lg mb-6">
          الفرق بين الأثاث المستعمل والجديد يعتمد على عدة عوامل، مثل الجودة، السعر،
          والقيمة الجمالية. الأثاث الجديد غالبًا يكون أكثر تكلفة، لكنه يوفر جودة عالية
          وضمانات، بينما الأثاث المستعمل قد يكون أرخص، لكنه قد يحتاج إلى إصلاحات
          وصيانة. كما أن الأثاث المستعمل يحمل أحيانًا تاريخًا وشخصية فريدة، بينما
          الأثاث الجديد يوفر مظهرًا عصريًا وحالة ممتازة.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          مميزات شراء الأثاث المستعمل
        </h2>
        <ul className="list-disc pr-6 space-y-2 mb-8 text-lg">
          <li>أسعار أقل مقارنة بالأثاث الجديد.</li>
          <li>إمكانية الحصول على تصميمات فريدة ونادرة.</li>
          <li>خدمة تقييم ونقل احترافية من لقايا.</li>
          <li>توفير تجربة شراء سهلة وآمنة دون متاعب.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          نصائح عند شراء الأثاث المستعمل
        </h2>
        <ol className="list-decimal pr-6 space-y-2 mb-8 text-lg">
          <li>افحص حالة الخشب أو القماش بعناية قبل الشراء.</li>
          <li>تأكد من عمل الأجهزة الكهربائية إذا كانت مرفقة مع الأثاث.</li>
          <li>استفسر عن إمكانية الصيانة أو الإصلاحات اللازمة.</li>
          <li>اختر قطع تناسب ديكور منزلك وتلبي احتياجاتك اليومية.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">الخلاصة</h2>
        <p className="text-lg">
          مع <strong>لقايا</strong>، يمكنك شراء الأثاث المستعمل بالرياض بسهولة وأمان،
          والاستفادة من أسعار مناسبة وجودة عالية مع خدمة نقل وتقييم محترفة.
        </p>
      </article>
    </main>
  );
};

export default UsedFurniture;
