document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("../backend/send-message.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data); // الرسالة اللي بترجع من PHP
        form.reset();
      })
      .catch((err) => {
        alert("❌ حصل خطأ في الإرسال، حاول مرة تانية.");
        console.error(err);
      });
  });
});
