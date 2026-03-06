// components/navbar.js

export function renderNavbar() {
    return `
    <nav class="navbar" id="navbar">
      <a href="#/" class="navbar-logo">IGNAI<span>TE</span></a>
      <div class="navbar-links">
        <a href="#/services" data-link>Services</a>
        <a href="#/case-studies" data-link>Case Studies</a>
        <a href="#/blog" data-link>Blog</a>
        <a href="#/careers" data-link>Careers</a>
        <a href="#/pricing" data-link>Pricing</a>
        <a href="#/contact" data-link>Contact</a>
      </div>
      <a href="#/contact" class="btn btn-primary btn-sm navbar-cta">Get Started</a>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" id="mobile-menu">
      <a href="#/" onclick="closeMobileMenu()">Home</a>
      <a href="#/services" onclick="closeMobileMenu()">Services</a>
      <a href="#/case-studies" onclick="closeMobileMenu()">Case Studies</a>
      <a href="#/blog" onclick="closeMobileMenu()">Blog</a>
      <a href="#/careers" onclick="closeMobileMenu()">Careers</a>
      <a href="#/pricing" onclick="closeMobileMenu()">Pricing</a>
      <a href="#/contact" onclick="closeMobileMenu()">Contact</a>
    </div>
  `;
}

export function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // Mobile toggle
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }

    // Global close function
    window.closeMobileMenu = () => {
        if (menu) menu.classList.remove('open');
    };
}
