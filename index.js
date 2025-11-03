// --- Active link on scroll ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove('active'));
      document
        .querySelector(`header nav a[href*=${id}]`)
        .classList.add('active');
    }
  });
});

// --- Mobile menu toggle ---
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// --- Initialize EmailJS ---
(function () {
  emailjs.init("HCIAalnZMj6077xxl"); // ✅ Your Public Key
})();

// --- Handle contact form submission ---
const contactForm = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_3y1zzf2", "template_bewli8d", this)
      .then(() => {
        statusMsg.textContent = "✅ Your message has been sent successfully!";
        statusMsg.style.color = "green";
        contactForm.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        statusMsg.textContent = "❌ Failed to send message. Please try again later.";
        statusMsg.style.color = "red";
      });
  });
}
