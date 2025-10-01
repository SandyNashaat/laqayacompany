document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contactForm"); // تأكد إن الـ form عندك واخد id="contactForm"
  const status = document.querySelector("#form-status"); // مكان تظهر فيه الرسالة

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // جمع البيانات
    const formData = new FormData(form);

    // إرسال البيانات بالـ fetch
    fetch("backend/contact.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        status.textContent = data; // عرض رسالة النجاح أو الخطأ
        status.style.color = "green";
        form.reset(); // تفريغ النموذج بعد الإرسال
      })
      .catch((error) => {
        status.textContent = "حدث خطأ أثناء إرسال الرسالة.";
        status.style.color = "red";
      });
  });
});
