// pages/service-detail.js
import { services } from '../data/services.js';

export function renderServiceDetail(params) {
    const service = services.find(s => s.slug === params.slug);
    if (!service) return `<section class="page-hero"><div class="container"><h1>Service Not Found</h1><p class="hero-description"><a href="#/services">Back to Services</a></p></div></section>`;

    const otherServices = services.filter(s => s.slug !== params.slug).slice(0, 3);
    const statEntries = Object.entries(service.stats);

    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">${service.title}</span>
          <h1>${service.title}</h1>
          <p class="hero-description">${service.shortDesc}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="max-width:800px;margin:0 auto">
          <p style="color:var(--text-secondary);font-size:1.1rem;line-height:1.8;margin-bottom:48px">${service.fullDesc}</p>

          <div class="stats-grid" style="margin-bottom:64px" data-animate>
            ${statEntries.map(([k, v]) => `
              <div class="stat-item">
                <div class="stat-value">${v}</div>
                <div class="stat-label">${k.charAt(0).toUpperCase() + k.slice(1)}</div>
              </div>
            `).join('')}
          </div>

          <h3 style="margin-bottom:24px">Key Features</h3>
          <div class="grid grid-2" style="gap:16px">
            ${service.features.map(f => `
              <div style="display:flex;align-items:flex-start;gap:12px;padding:16px;border-radius:var(--radius-sm);background:var(--bg-surface);border:1px solid var(--border-color)">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" stroke-width="2" style="width:20px;height:20px;flex-shrink:0;margin-top:2px"><polyline points="20 6 9 17 4 12"/></svg>
                <span style="color:var(--text-secondary);font-size:0.95rem">${f}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg-surface)">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Explore More</span>
          <h2>Other Services</h2>
        </div>
        <div class="grid grid-3">
          ${otherServices.map(s => `
            <a href="#/services/${s.slug}" class="card" style="text-decoration:none">
              <div class="card-icon">${s.icon}</div>
              <h4>${s.title}</h4>
              <p class="text-muted text-small" style="margin-top:8px">${s.shortDesc}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
