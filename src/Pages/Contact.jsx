import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const Contact = () => {
  return (
    <div dir="rtl" className="text-right">
      {/* 🌟 Page Banner */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">اتصل بنا</h1>
          <p className="text-lg">يسعدنا تواصلكم معنا في أي وقت، نحن هنا لمساعدتكم</p>
        </div>
      </section>

      {/* 📩 Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          
          {/* 📝 Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">أرسل رسالة</h2>
            <form
              action="https://formspree.io/f/mnngdygd"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="الاسم"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="البريد الإلكتروني"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="رقم الهاتف"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="اكتب رسالتك هنا"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                إرسال
              </button>
            </form>
          </div>

          {/* 📞 Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">معلومات التواصل</h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaEnvelope className="text-blue-600 text-xl" />
                <p className="text-gray-700">laqayacompany@gmail.com</p>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse">
                <FaPhone className="text-blue-600 text-xl" />
                <p className="text-gray-700">0531229390</p>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <p className="text-gray-700">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="flex space-x-4 space-x-reverse mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61581618261479"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/laqay_a5/"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@laqaya_riyadh?lang=en"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">موقعنا</h2>
          <div className="w-full h-96 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="laqaya map"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36236.238861184245!2d46.67231536994124!3d24.713674038700854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1688398123456!5m2!1sen!2s"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
