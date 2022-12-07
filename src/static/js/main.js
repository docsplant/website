// chatbox
function chatBox() {
  const chatBtn = document.querySelector(".contact-message");

  if (!chatBtn) return;

  function toggle() {
    const chatBox = document.querySelector(".contact-popup-area");

    this.classList.toggle("active");
    chatBox.classList.toggle("active");
  }

  chatBtn.addEventListener("click", toggle);
};

function stackRibbon() {
  const stackBtn = document.querySelector(".stack-top");

  if (!stackBtn) return;

  function openChat() {
    document.querySelector(".contact-message").classList.add("active");
    document.querySelector(".contact-popup-area").classList.add("active");
  }

  stackBtn.addEventListener("click", openChat);
};

// submit
function SubmitForm() {
  const subBtn = document.querySelector(".submit-form");
  if (!subBtn) return;

  function submitted() {
    const chatBox = document.querySelector(".contact-popup-area");

    this.classList.toggle("active");
    chatBox.classList.toggle("active");
  }

  subBtn.addEventListener("click", submitted);
}


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

  SubmitForm();
  // chatbox
  chatBox();
  stackRibbon();
  // mobile menu
  mobileMenu();
  // sticky header
  stickyHeader();
});

// document on resize
document.addEventListener("resize", function () { });

// document on scroll
document.addEventListener("scroll", function () { });

