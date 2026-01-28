const pageContent = document.getElementById("page-content");

// Map of page snippets
const pages = {
  home: "pages/home.html",
  about: "pages/about.html",
  services: "pages/services.html",
  contact: "pages/contact.html"
};

// Load page content dynamically
function loadPage(page) {
  fetch(pages[page])
    .then(res => res.text())
    .then(html => {
      pageContent.innerHTML = html;
      window.scrollTo(0,0);

      // Re-run scroll animations for services page
      if (page === "services") initScrollReveal();
    });
}

// Initialize scroll animations
function initScrollReveal() {
  if (window.ScrollReveal) {
    ScrollReveal().reveal('.service-card', { interval: 200, distance: '20px', origin: 'bottom', opacity: 0 });
  }
}

// Navbar links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    loadPage(page);
    setActiveLink(page);
  });
});

// Highlight active link
function setActiveLink(activePage) {
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("data-page") === activePage) {
      link.classList.add("text-blue-600");
    } else {
      link.classList.remove("text-blue-600");
    }
  });
}

// Load default page
window.addEventListener("DOMContentLoaded", () => loadPage("home"));
