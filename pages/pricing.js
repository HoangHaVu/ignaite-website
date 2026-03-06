// pages/pricing.js
import { plans, faq } from '../data/pricing.js';

export function renderPricing() {
    const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;

    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">Pricing</span>
          <h1>Infrastructure <span class="text-gradient">Plans</span></h1>
          <p class="hero-description">Transparent, scalable pricing designed for enterprises of every size. Start with a free trial and scale as you grow.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          ${plans.map(plan => `
            <div class="pricing-card ${plan.featured ? 'featured' : ''}" data-animate>
              <div class="pricing-name">${plan.name}</div>
              <div class="pricing-price">${plan.price}<span>${plan.period}</span></div>
              <div class="pricing-description">${plan.description}</div>
              <div class="pricing-features">
                ${plan.features.map(f => `
                  <div class="pricing-feature">
                    ${checkIcon}
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
              <a href="#/contact" class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'}" style="width:100%">${plan.cta}</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg-surface)">
      <div class="container">
        <div class="section-header">
          <span class="section-label">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div style="max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:24px">
          ${faq.map(item => `
            <div class="card-glass" data-animate style="cursor:default">
              <h4 style="margin-bottom:12px">${item.q}</h4>
              <p class="text-muted" style="line-height:1.7">${item.a}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
