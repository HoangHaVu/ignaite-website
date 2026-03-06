// pages/home.js

export function renderHome() {
    return `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">Powering Next-Gen Computing</span>
          <h1>Sovereign AI for the <span class="text-gradient">Enterprise.</span></h1>
          <p class="hero-description">Experience the next generation of Ignaite. Secure, scalable, and autonomous AI infrastructure designed for premium performance without compromise.</p>
          <div class="hero-actions">
            <a href="#/contact" class="btn btn-primary btn-lg">Request Access</a>
            <a href="#/case-studies" class="btn btn-outline btn-lg">View Case Studies</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Statement -->
    <section class="section" data-animate>
      <div class="container">
        <div class="section-header">
          <span class="section-label">The Challenge</span>
          <h2>The Problem with Legacy AI</h2>
          <p>Traditional AI models compromise data sovereignty, security, and performance for ease of use. We fixed that.</p>
        </div>
        <div class="grid grid-3">
          <div class="card" data-animate>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h4>Data Leakage</h4>
            <p class="text-muted" style="margin-top:12px;line-height:1.7">Sensitive proprietary data is often exposed to third-party providers during model training and inference.</p>
          </div>
          <div class="card" data-animate>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h4>Latency Bottlenecks</h4>
            <p class="text-muted" style="margin-top:12px;line-height:1.7">Public cloud AI services suffer from inconsistent latency, hindering real-time mission-critical applications.</p>
          </div>
          <div class="card" data-animate>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h4>Vendor Lock-in</h4>
            <p class="text-muted" style="margin-top:12px;line-height:1.7">Restricted ecosystem environments make it impossible to port your intelligence across different cloud providers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="section" style="background:var(--bg-surface)" data-animate>
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Approach</span>
          <h2>Architecture of Total <span class="text-gradient">Sovereignty.</span></h2>
        </div>
        <div class="grid grid-2" style="gap:40px">
          <div class="card-glass" data-animate>
            <h4 style="margin-bottom:12px">Private Instance Isolation</h4>
            <p class="text-muted" style="line-height:1.7">Dedicated hardware clusters ensure your models never share compute cycles with other entities.</p>
          </div>
          <div class="card-glass" data-animate>
            <h4 style="margin-bottom:12px">Zero-Trust Intelligence</h4>
            <p class="text-muted" style="line-height:1.7">End-to-end encrypted weights and training data managed entirely through your internal keys.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section" data-animate>
      <div class="container">
        <div class="section-header">
          <span class="section-label">Capabilities</span>
          <h2>Engineered for Extremes</h2>
          <p>Designed for the most demanding workloads in finance, defense, and biotechnology.</p>
        </div>
        <div class="grid grid-4">
          <div class="card" data-animate>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h5>Sub-ms Latency</h5>
            <p class="text-muted text-small" style="margin-top:8px">Direct hardware acceleration protocols for near-instant inference.</p>
          </div>
          <div class="card" data-animate>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <h5>Hybrid Elasticity</h5>
            <p class="text-muted text-small" style="margin-top:8px">Seamlessly bridge on-prem clusters with private cloud capacity.</p>
          </div>
          <div class="card" data-animate>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h5>Model Auditing</h5>
            <p class="text-muted text-small" style="margin-top:8px">Full traceability of every decision for regulatory compliance.</p>
          </div>
          <div class="card" data-animate>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h5>Custom Kernels</h5>
            <p class="text-muted text-small" style="margin-top:8px">Direct API access to underlying GPU compute for optimization.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategic Domains -->
    <section class="section" style="background:var(--bg-surface)" data-animate>
      <div class="container">
        <div class="section-header">
          <span class="section-label">Industries</span>
          <h2>Strategic Domains</h2>
        </div>
        <div class="grid grid-3">
          <div class="card-highlight" data-animate>
            <span class="badge badge-primary" style="margin-bottom:16px">Finance</span>
            <h4>Algorithmic Trading</h4>
            <p class="text-muted" style="margin-top:12px;line-height:1.7">Fraud detection & predictive analytics. Deploy high-frequency models with dedicated bandwidth and zero outside interference.</p>
          </div>
          <div class="card-highlight" data-animate>
            <span class="badge badge-primary" style="margin-bottom:16px">Logistics</span>
            <h4>Supply Chain Intelligence</h4>
            <p class="text-muted" style="margin-top:12px;line-height:1.7">Dynamic routing & supply chain intelligence for global fleet operations and distribution networks.</p>
          </div>
          <div class="card-highlight" data-animate>
            <span class="badge badge-primary" style="margin-bottom:16px">Biotech</span>
            <h4>Drug Discovery</h4>
            <p class="text-muted" style="margin-top:12px;line-height:1.7">Drug discovery & protein folding acceleration. Air-gapped AI deployments for critical research operations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section" data-animate>
      <div class="container">
        <div class="testimonial">
          <p class="testimonial-quote">"Ignaite reduced our model training cycle by 40% while ensuring 100% data residency within our borders."</p>
          <p class="testimonial-author">Marcus Thorne</p>
          <p class="testimonial-role">CTO, Global Quantum Systems</p>
        </div>
      </div>
    </section>

    <!-- About Teaser -->
    <section class="section" style="background:var(--bg-surface)" data-animate>
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Mission</span>
          <h2>Built by Minds. For the Future.</h2>
          <p>Ignaite is a collective of scientists, engineers, and philosophers dedicated to the mission of democratizing sovereign intelligence. We believe the future belongs to those who own their AI.</p>
        </div>
        <div class="stats-grid" data-animate>
          <div class="stat-item">
            <div class="stat-value">10K<span>+</span></div>
            <div class="stat-label">GPU Instances</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">99.99<span>%</span></div>
            <div class="stat-label">Uptime SLA</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">12<span>+</span></div>
            <div class="stat-label">Sovereign Regions</div>
          </div>
          <div class="stat-item">
            <div class="stat-value"><span><</span>1ms</div>
            <div class="stat-label">Inference Latency</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section" data-animate>
      <div class="container">
        <div class="cta-content">
          <h2>Ready to own your AI?</h2>
          <p>Speak with our lead architects today to design a custom environment that meets your strict security requirements.</p>
          <div class="hero-actions">
            <a href="#/contact" class="btn btn-primary btn-lg">Request a Demo</a>
            <a href="#/pricing" class="btn btn-outline btn-lg">View Pricing</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
