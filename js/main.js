// chatbox
function chatBox() {
  const chatBtn = document.querySelector(".contact-massage");

  if (!chatBtn) return;

  function toggle() {
    const chatBox = document.querySelector(".contact-popup-area");

    this.classList.toggle("active");
    chatBox.classList.toggle("active");
  }

  chatBtn.addEventListener("click", toggle);
};

// mobile menu
function mobileMenu() {
  const menuBtn = document.getElementById("nav-icon4");

  if (!menuBtn) return;

  function toggle() {
    const menu = document.querySelector(".menu-toggler");

    this.classList.toggle("open");
    menu.classList.toggle("active");
  }

  menuBtn.addEventListener("click", toggle);
};

// sticky header
function stickyHeader() {
  const header = document.getElementById("headerMain");

  function toggleSticky() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add("sticky");
      return;
    }

    header.classList.remove("sticky");
  }

  toggleSticky();
  window.addEventListener("scroll", toggleSticky);
};

// document on load
document.addEventListener("DOMContentLoaded", function () {
  THEME_TOGGLE.InitToggleTheme()
  // chatbox
  chatBox();
  // mobile menu
  mobileMenu();
  // sticky header
  stickyHeader();
});

// document on resize
document.addEventListener("resize", function () { });

// document on scroll
document.addEventListener("scroll", function () { });

