// pages/job-detail.js
import { jobs } from '../data/careers.js';

export function renderJobDetail(params) {
    const job = jobs.find(j => j.slug === params.slug);
    if (!job) return `<section class="page-hero"><div class="container"><h1>Job Not Found</h1><p class="hero-description"><a href="#/careers">Back to Careers</a></p></div></section>`;

    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">${job.department}</span>
          <h1>${job.title}</h1>
          <div style="display:flex;gap:12px;justify-content:center;margin-top:16px;flex-wrap:wrap">
            <span class="badge badge-outline">${job.location}</span>
            <span class="badge badge-outline">${job.type}</span>
            <span class="badge badge-outline">${job.level}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="max-width:800px;margin:0 auto">
          <div style="margin-bottom:48px" data-animate>
            <h3 style="margin-bottom:16px">About the Role</h3>
            <p style="color:var(--text-secondary);line-height:1.8;font-size:1.05rem">${job.description}</p>
          </div>

          <div style="margin-bottom:48px" data-animate>
            <h3 style="margin-bottom:20px">Requirements</h3>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${job.requirements.map(r => `
                <div style="display:flex;align-items:flex-start;gap:12px">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;margin-top:3px"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style="color:var(--text-secondary);line-height:1.6">${r}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom:48px" data-animate>
            <h3 style="margin-bottom:20px">Benefits</h3>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${job.benefits.map(b => `
                <div style="display:flex;align-items:flex-start;gap:12px">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;margin-top:3px"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  <span style="color:var(--text-secondary);line-height:1.6">${b}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="text-align:center;padding:48px;background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-lg)" data-animate>
            <h3 style="margin-bottom:12px">Ready to apply?</h3>
            <p class="text-muted" style="margin-bottom:24px">Send us your resume and tell us why you're passionate about sovereign AI.</p>
            <a href="#/contact" class="btn btn-primary btn-lg">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
