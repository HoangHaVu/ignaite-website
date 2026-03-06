// pages/blog.js
import { blogPosts } from '../data/blog-posts.js';

export function renderBlog() {
    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">Insights</span>
          <h1>Intellectual <span class="text-gradient">Property</span></h1>
          <p class="hero-description">Deep dives into the mechanics of sovereign AI, infrastructure engineering, and the future of enterprise computing.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          ${blogPosts.map(post => `
            <a href="#/blog/${post.slug}" class="blog-card" data-animate style="text-decoration:none">
              <div class="blog-card-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-meta">
                  <span class="badge badge-outline">${post.category}</span>
                  <span>${post.date}</span>
                  <span>${post.readTime}</span>
                </div>
                <h4 class="blog-card-title">${post.title}</h4>
                <p class="blog-card-excerpt">${post.excerpt}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
