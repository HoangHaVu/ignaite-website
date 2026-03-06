// pages/case-studies.js
import { caseStudies } from '../data/case-studies.js';

export function renderCaseStudies() {
    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">Success Stories</span>
          <h1>Case <span class="text-gradient">Studies</span></h1>
          <p class="hero-description">See how leading enterprises achieved total sovereignty over their AI infrastructure with Ignaite.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          ${caseStudies.map(cs => `
            <a href="#/case-studies/${cs.slug}" class="card" data-animate style="text-decoration:none">
              <span class="badge badge-primary" style="margin-bottom:16px">${cs.badge}</span>
              <h3 style="margin-bottom:12px">${cs.title}</h3>
              <p class="text-muted" style="line-height:1.7;margin-bottom:16px">${cs.summary}</p>
              <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:16px">
                ${cs.results.slice(0, 2).map(r => `
                  <div>
                    <div style="font-size:1.25rem;font-weight:700;color:var(--primary-light)">${r.value}</div>
                    <div class="text-xs text-muted">${r.label}</div>
                  </div>
                `).join('')}
              </div>
              <span class="text-small" style="color:var(--primary-light)">Read full case study →</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
