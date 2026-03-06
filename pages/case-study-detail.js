// pages/case-study-detail.js
import { caseStudies } from '../data/case-studies.js';

export function renderCaseStudyDetail(params) {
    const cs = caseStudies.find(c => c.slug === params.slug);
    if (!cs) return `<section class="page-hero"><div class="container"><h1>Case Study Not Found</h1><p class="hero-description"><a href="#/case-studies">Back to Case Studies</a></p></div></section>`;

    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">${cs.badge}</span>
          <h1>${cs.title}</h1>
          <p class="hero-description">${cs.summary}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="stats-grid" style="margin-bottom:80px" data-animate>
          ${cs.results.map(r => `
            <div class="stat-item">
              <div class="stat-value">${r.value}</div>
              <div class="stat-label">${r.label}</div>
            </div>
          `).join('')}
        </div>

        <div style="max-width:800px;margin:0 auto">
          <div style="margin-bottom:48px" data-animate>
            <span class="section-label">The Challenge</span>
            <h3 style="margin:12px 0 16px">Challenge</h3>
            <p style="color:var(--text-secondary);line-height:1.8;font-size:1.05rem">${cs.challenge}</p>
          </div>

          <div style="margin-bottom:48px" data-animate>
            <span class="section-label">Our Approach</span>
            <h3 style="margin:12px 0 16px">Solution</h3>
            <p style="color:var(--text-secondary);line-height:1.8;font-size:1.05rem">${cs.solution}</p>
          </div>

          <div class="testimonial" data-animate>
            <p class="testimonial-quote">"${cs.testimonial.quote}"</p>
            <p class="testimonial-author">${cs.testimonial.author}</p>
            <p class="testimonial-role">${cs.testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section" data-animate>
      <div class="container">
        <div class="cta-content">
          <h2>Want similar results?</h2>
          <p>Let us design a sovereign AI solution tailored to your industry and requirements.</p>
          <a href="#/contact" class="btn btn-primary btn-lg">Talk to Our Team</a>
        </div>
      </div>
    </section>
  `;
}
