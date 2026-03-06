// pages/blog-detail.js
import { blogPosts } from '../data/blog-posts.js';

export function renderBlogDetail(params) {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) return `<section class="page-hero"><div class="container"><h1>Post Not Found</h1><p class="hero-description"><a href="#/blog">Back to Blog</a></p></div></section>`;

    const relatedPosts = blogPosts.filter(p => p.slug !== params.slug);

    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">${post.category}</span>
          <h1>${post.title}</h1>
          <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:16px;color:var(--text-secondary);font-size:0.9rem">
            <span>${post.author.name}</span>
            <span style="opacity:0.3">|</span>
            <span>${post.date}</span>
            <span style="opacity:0.3">|</span>
            <span>${post.readTime}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="article-content" data-animate>
          ${post.content}
        </div>
      </div>
    </section>

    ${relatedPosts.length > 0 ? `
      <section class="section" style="background:var(--bg-surface)">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Keep Reading</span>
            <h2>Related Articles</h2>
          </div>
          <div class="grid grid-2">
            ${relatedPosts.map(p => `
              <a href="#/blog/${p.slug}" class="blog-card" style="text-decoration:none">
                <div class="blog-card-body">
                  <div class="blog-card-meta">
                    <span class="badge badge-outline">${p.category}</span>
                    <span>${p.date}</span>
                  </div>
                  <h4 class="blog-card-title">${p.title}</h4>
                  <p class="blog-card-excerpt">${p.excerpt}</p>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>
    ` : ''}
  `;
}
