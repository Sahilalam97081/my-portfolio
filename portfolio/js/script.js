// // 🔥 Page Load Message
// console.log("Portfolio Loaded Successfully 🚀");


// // 🔥 Smooth Scroll (ONLY for same-page anchors)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {

//     const target = document.querySelector(this.getAttribute('href'));

//     // Only apply if section exists on same page
//     if (target) {
//       e.preventDefault();
//       target.scrollIntoView({
//         behavior: 'smooth'
//       });
//     }

//   });
// });


// // 🔥 Active Navbar Highlight (only visual, no navigation break)
// const links = document.querySelectorAll(".nav-link");

// links.forEach(link => {
//   link.addEventListener("click", function () {

//     // Remove active from all
//     links.forEach(l => l.classList.remove("active"));

//     // Add active to clicked one
//     this.classList.add("active");

//   });
// });


// // 🔥 Typing Effect (Home Page)
// const text = "I am Python Developer";
// let i = 0;

// function typingEffect() {
//   const el = document.getElementById("typing");

//   if (el && i < text.length) {
//     el.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typingEffect, 100);
//   }
// }

// // Run only if element exists
// if (document.getElementById("typing")) {
//   typingEffect();
// }


// // 🔥 Form Submit Alert (Contact Page)
// const form = document.querySelector("form");

// if (form) {
//   form.addEventListener("submit", function () {
//     alert("Message Sent Successfully ✅");
//   });
// }


// // 🔥 Scroll Animation (Cards fade in)
// const elements = document.querySelectorAll(".card");

// // Initial state
// elements.forEach(el => {
//   el.style.opacity = "0";
//   el.style.transform = "translateY(50px)";
//   el.style.transition = "0.6s ease";
// });

// window.addEventListener("scroll", () => {
//   elements.forEach(el => {
//     const position = el.getBoundingClientRect().top;
//     const screenPosition = window.innerHeight / 1.2;

//     if (position < screenPosition) {
//       el.style.opacity = "1";
//       el.style.transform = "translateY(0)";
//     }
//   });
// });

// 🔥 Page Load Message
console.log("Portfolio Loaded Successfully 🚀");


// 🔥 Smooth Scroll (ONLY same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });
});


// 🔥 Typing Effect (SAFE - Home Page only)
const text = "I am Python Developer";
let i = 0;

function typingEffect() {
  const el = document.getElementById("typing");

  if (!el) return; // ✅ prevent crash

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}

if (document.getElementById("typing")) {
  typingEffect();
}


// 🔥 Contact Form Alert (SAFE - only if form exists)
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    form.reset();
  });
}


// 🔥 Scroll Animation (SAFE CARDS)
const elements = document.querySelectorAll(".card");

if (elements.length > 0) {

  // initial state
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.6s ease";
  });

  window.addEventListener("scroll", () => {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (position < screenPosition) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  });
}