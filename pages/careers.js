// pages/careers.js
import { jobs, culture } from '../data/careers.js';

export function renderCareers() {
    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">Join Us</span>
          <h1>Build the Future of <span class="text-gradient">Sovereign AI</span></h1>
          <p class="hero-description">${culture.mission}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Values</span>
          <h2>What We Stand For</h2>
        </div>
        <div class="grid grid-4" data-animate>
          ${culture.values.map(v => `
            <div class="card-glass">
              <h5 style="margin-bottom:8px;color:var(--primary-light)">${v.title}</h5>
              <p class="text-muted text-small" style="line-height:1.6">${v.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg-surface)">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Opportunities</span>
          <h2>Open Positions</h2>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px">
          ${jobs.map(j => `
            <a href="#/careers/${j.slug}" class="job-card" data-animate style="text-decoration:none">
              <div class="job-card-info">
                <h4>${j.title}</h4>
                <div class="job-card-tags">
                  <span class="badge badge-outline">${j.department}</span>
                  <span class="badge badge-outline">${j.location}</span>
                  <span class="badge badge-outline">${j.type}</span>
                </div>
              </div>
              <span class="btn btn-outline btn-sm">View Role →</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
