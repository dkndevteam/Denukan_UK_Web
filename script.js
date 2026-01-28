const pageContent = document.getElementById("page-content");

// Define page HTML files
const pages = {
  home: "pages/home.html",
  about: "pages/about.html",
  services: "pages/services.html",
  contact: "pages/contact.html"
};

// Function to load page
function loadPage(page) {
  fetch(pages[page])
    .then(res => res.text())
    .then(html => {
      pageContent.innerHTML = html;
      window.scrollTo(0, 0); // scroll to top
      // Re-run any JS needed for the loaded content, e.g., animations
      if (page === "services") initScrollReveal();
    });
}

// Initialize scroll animations for Services page
function initScrollReveal() {
  if (window.ScrollReveal) {
    ScrollReveal().reveal('.service-card', { interval: 200, distance: '20px', origin: 'bottom', opacity: 0 });
  }
}

// Navbar click events
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    loadPage(page);
    setActiveLink(page);
  });
});

// Highlight active nav link
function setActiveLink(activePage) {
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("data-page") === activePage) {
      link.classList.add("text-blue-600");
    } else {
      link.classList.remove("text-blue-600");
    }
  });
}

// Load default page on start
window.addEventListener("DOMContentLoaded", () => loadPage("home"));
