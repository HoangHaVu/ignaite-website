// components/footer.js

export function renderFooter() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#/" class="navbar-logo" style="font-size:1.4rem;font-weight:800;letter-spacing:0.05em">IGNAI<span style="color:var(--primary-light)">TE</span></a>
            <p>Premium AI infrastructure for the sovereign enterprise. Built for speed, security, and total control.</p>
            <div class="footer-newsletter" style="margin-top:24px">
              <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:12px">Stay informed about sovereign AI developments.</p>
              <form class="newsletter-form" onsubmit="event.preventDefault()">
                <input type="email" class="form-input" placeholder="Enter your email" />
                <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
              </form>
            </div>
          </div>

          <div>
            <h5 class="footer-heading">Infrastructure</h5>
            <div class="footer-links">
              <a href="#/services">Compute Engine</a>
              <a href="#/services">Sovereign Cloud</a>
              <a href="#/services">Private Training</a>
              <a href="#/services">Edge Deployment</a>
            </div>
          </div>

          <div>
            <h5 class="footer-heading">Resources</h5>
            <div class="footer-links">
              <a href="#/blog">Documentation</a>
              <a href="#/blog">API Reference</a>
              <a href="#/case-studies">Case Studies</a>
              <a href="#/blog">Blog</a>
            </div>
          </div>

          <div>
            <h5 class="footer-heading">Company</h5>
            <div class="footer-links">
              <a href="#/">About Us</a>
              <a href="#/careers">Careers</a>
              <a href="#/contact">Contact Support</a>
              <a href="#/">Legal & Privacy</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2024 Ignaite Technologies Inc. All rights reserved.</span>
          <div class="footer-bottom-links">
            <a href="#/">Privacy Policy</a>
            <a href="#/">Terms of Service</a>
            <a href="#/">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
