// pages/contact.js

export function renderContact() {
    return `
    <section class="page-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="container">
        <div class="hero-content animate-in">
          <span class="hero-subtitle">Get in Touch</span>
          <h1>Contact <span class="text-gradient">Us</span></h1>
          <p class="hero-description">Ready to take control of your AI infrastructure? Our team is standing by to help you architect the perfect solution.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="gap:64px;align-items:start">
          <!-- Form -->
          <div data-animate>
            <h3 style="margin-bottom:8px">Send Us a Message</h3>
            <p class="text-muted" style="margin-bottom:32px">Fill out the form below and our team will get back to you within 24 hours.</p>
            <form onsubmit="event.preventDefault(); this.innerHTML='<div style=\\'text-align:center;padding:48px\\' class=\\'animate-in\\'><h3>Thank you!</h3><p class=\\'text-muted\\' style=\\'margin-top:12px\\'>We\\'ll be in touch within 24 hours.</p></div>'">
              <div class="grid grid-2" style="gap:16px">
                <div class="form-group">
                  <label class="form-label" for="firstName">First Name</label>
                  <input type="text" id="firstName" class="form-input" placeholder="John" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="lastName">Last Name</label>
                  <input type="text" id="lastName" class="form-input" placeholder="Smith" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="email">Work Email</label>
                <input type="email" id="email" class="form-input" placeholder="john@company.com" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="company">Company</label>
                <input type="text" id="company" class="form-input" placeholder="Your Company" />
              </div>
              <div class="form-group">
                <label class="form-label" for="interest">Area of Interest</label>
                <select id="interest" class="form-select">
                  <option value="">Select an area</option>
                  <option value="compute">Compute Engine</option>
                  <option value="cloud">Sovereign Cloud</option>
                  <option value="training">Private Training</option>
                  <option value="edge">Edge Deployment</option>
                  <option value="security">Security Audit</option>
                  <option value="support">White-Glove Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea id="message" class="form-textarea" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Send Message</button>
            </form>
          </div>

          <!-- Contact Info -->
          <div data-animate>
            <h3 style="margin-bottom:32px">Or Reach Us Directly</h3>

            <div style="display:flex;flex-direction:column;gap:32px">
              <div class="card-glass">
                <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
                  <div class="card-icon" style="margin-bottom:0;width:40px;height:40px">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p class="text-muted text-small">enterprise@ignaite.ai</p>
                  </div>
                </div>
              </div>

              <div class="card-glass">
                <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
                  <div class="card-icon" style="margin-bottom:0;width:40px;height:40px">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h5>Headquarters</h5>
                    <p class="text-muted text-small">San Francisco, CA — United States</p>
                  </div>
                </div>
              </div>

              <div class="card-glass">
                <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
                  <div class="card-icon" style="margin-bottom:0;width:40px;height:40px">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <p class="text-muted text-small">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>

              <div class="card-glass" style="background:linear-gradient(135deg, rgba(140,37,244,0.1), rgba(99,102,241,0.05))">
                <h5 style="margin-bottom:8px;color:var(--primary-light)">Enterprise Sales</h5>
                <p class="text-muted text-small" style="line-height:1.6">For custom infrastructure requirements, speak directly with our lead architects. We offer complimentary architecture reviews for qualified enterprises.</p>
                <a href="mailto:enterprise@ignaite.ai" class="btn btn-outline btn-sm" style="margin-top:16px">Schedule a Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
