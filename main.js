// main.js — App entry point
import './style.css';
import { Router } from './router.js';
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './pages/home.js';
import { renderServices } from './pages/services.js';
import { renderServiceDetail } from './pages/service-detail.js';
import { renderCaseStudies } from './pages/case-studies.js';
import { renderCaseStudyDetail } from './pages/case-study-detail.js';
import { renderBlog } from './pages/blog.js';
import { renderBlogDetail } from './pages/blog-detail.js';
import { renderCareers } from './pages/careers.js';
import { renderJobDetail } from './pages/job-detail.js';
import { renderPricing } from './pages/pricing.js';
import { renderContact } from './pages/contact.js';

const app = document.getElementById('app');
const router = new Router();

function renderPage(html) {
    app.innerHTML = renderNavbar() + `<main id="page-content">${html}</main>` + renderFooter();
    initNavbar();
    router.updateActiveLinks();
    initScrollAnimations();
}

function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// Register routes
router
    .on('/', () => renderPage(renderHome()))
    .on('/services', () => renderPage(renderServices()))
    .on('/services/:slug', (params) => renderPage(renderServiceDetail(params)))
    .on('/case-studies', () => renderPage(renderCaseStudies()))
    .on('/case-studies/:slug', (params) => renderPage(renderCaseStudyDetail(params)))
    .on('/blog', () => renderPage(renderBlog()))
    .on('/blog/:slug', (params) => renderPage(renderBlogDetail(params)))
    .on('/careers', () => renderPage(renderCareers()))
    .on('/careers/:slug', (params) => renderPage(renderJobDetail(params)))
    .on('/pricing', () => renderPage(renderPricing()))
    .on('/contact', () => renderPage(renderContact()))
    .on('*', () => renderPage(renderHome()));

// Initial render
router.resolve();
