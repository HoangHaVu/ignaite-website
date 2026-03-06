// pages/services.js
import { services } from '../data/services.js';

export function renderServices() {
    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">Our Platform</span>
          <h1>Infrastructure Built for <span class="text-gradient">Total Sovereignty</span></h1>
          <p class="hero-description">High-performance compute and sovereign cloud solutions designed for mission-critical precision and absolute data control.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What We Offer</span>
          <h2>Core Capabilities</h2>
        </div>
        <div class="grid grid-3">
          ${services.map(s => `
            <a href="#/services/${s.slug}" class="card" data-animate style="text-decoration:none">
              <div class="card-icon">${s.icon}</div>
              <h4>${s.title}</h4>
              <p class="text-muted" style="margin-top:12px;line-height:1.7">${s.shortDesc}</p>
              <span class="text-small" style="color:var(--primary-light);margin-top:16px;display:inline-block">Learn more →</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-section" data-animate>
      <div class="container">
        <div class="cta-content">
          <h2>Ready to secure your digital sovereignty?</h2>
          <p>Speak with our lead architects today to design a custom environment that meets your strict security requirements.</p>
          <a href="#/contact" class="btn btn-primary btn-lg">Contact Our Team</a>
        </div>
      </div>
    </section>
  `;
}
