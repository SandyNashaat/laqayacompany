import React from "react";
import "../style/footer.css"
const Footer = () => {
  return (
     <footer>
          <div class="footer-container" dir="rtl">
            <div class="footer-content">
              <div class="footer-section">
                <div class="footer-logo">
                  <span>لقايا</span>
                </div>
                <p>نحن في لقايا متخصصون في شراء الأثاث المستعمل بأفضل الأسعار مع خدمة سريعة وموثوقة تصل لحد باب منزلك.
                </p>
              </div>
              <div class="footer-section">
                <h3>روابط سريعة</h3>
                <ul class="footer-links">
                  <li><a href="./index.html">الرئيسية</a></li>
                  <li><a href="./Pages/about.html">المدونة</a></li>
                  <li><a href="./Pages/services.html">خدماتنا</a></li>
                  <li><a href="./Pages/portfolio.html">أعمالنا</a></li>
                  <li><a href="./Pages/contact.html">اتصل بنا</a></li>
                </ul>
              </div>
              <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61581618261479" target="_blank"><i
                    class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/laqay_a5/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@laqaya_riyadh?lang=en" target="_blank"><i
                    class="fab fa-tiktok"></i></a>
              </div>
              <div class="footer-section">
                <h3>اتصل بنا</h3>
                <p>البريد الإلكتروني: laqayacompany@gmail.com</p>
                <p>الهاتف: 0531229390</p>
                <p>العنوان: الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
            <div class="footer-bottom">
              <p>
                © 2025 لقايا. جميع الحقوق محفوظة.
                | <a href="./Pages/privacy.html">سياسة الخصوصية</a>
                | <a href="./Pages/terms.html">الشروط والأحكام</a>
              </p>
            </div>
          </div>
        </footer>
  );
};

export default Footer;
