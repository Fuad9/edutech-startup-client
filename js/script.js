// /* ========== show menu ========== */
// const showMenu = (toggleId, navId) => {
//    const toggle = document.getElementById(toggleId),
//       nav = document.getElementById(navId);

//    if (toggle && nav) {
//       toggle.addEventListener("click", () => {
//          nav.classList.toggle("show-menu");
//       });
//    }
// };
// showMenu("nav-toggle-menu", "nav-menu-items");

// /* ========== Remove Menu ========== */
// const navLink = document.querySelectorAll(".nav-link");

// const linkAction = () => {
//    const navMenu = document.getElementById("nav-menu-items");
//    navMenu.forEach((n) => n.addEventListener("click", linkAction));
// };

// /* ========== Scroll active link ========== */
// const sections = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//    const scrollY = window.pageYOffset;

//    sections.forEach((curr) => {
//       const sectionHeight = current.offsetHeight;
//       const sectionTop = current.offsetTop - 50;
//       sectionId = curr.getAttribute("id");

//       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//          document
//             .querySelector(".nav-items a[href*=' + sectionId + ']")
//             .classList.add("active-link");
//       } else {
//          document
//             .querySelector(".nav-items a[href*=' + sectionId + ']")
//             .classList.remove("active-link");
//       }
//    });
// };

// window.addEventListener("scroll", scrollActive);

// /* ========== Header Background change ========== */
// const scrollHeader = () => {
//    const header = document.getElementById("header");
//    if (this.scrollY >= 200) {
//       header.classList.add("scroll-header");
//    } else {
//       header.classList.remove("scroll-header");
//    }
// };

// window.addEventListener("scroll", scrollHeader);

// /* ========== Show Scroll top ========== */
// const scrollTop = () => {
//    const scrollTop = document.getElementById("scroll-top");
//    if (this.scrollY >= 560) {
//       scrollTop.classList.add("show-scroll");
//    } else {
//       scrollTop.classList.remove("show-scroll");
//    }
// };

// window.addEventListener("scroll", scrollTop);
