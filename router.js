// router.js — Hash-based client-side router

export class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener('hashchange', () => this.resolve());
  }

  on(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  resolve() {
    const hash = window.location.hash.slice(1) || '/';
    let matched = false;

    for (const [pattern, handler] of Object.entries(this.routes)) {
      const params = this.matchRoute(pattern, hash);
      if (params !== null) {
        this.currentRoute = { path: hash, pattern, params };
        handler(params);
        matched = true;
        break;
      }
    }

    if (!matched && this.routes['*']) {
      this.routes['*']({});
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
    this.updateActiveLinks();
  }

  matchRoute(pattern, path) {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);

    if (patternParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        params[patternParts[i].slice(1)] = pathParts[i];
      } else if (patternParts[i] !== pathParts[i]) {
        return null;
      }
    }
    return params;
  }

  updateActiveLinks() {
    const hash = window.location.hash.slice(1) || '/';
    document.querySelectorAll('[data-link]').forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '') || '/';
      link.classList.toggle('active', href === hash || (hash.startsWith(href) && href !== '/'));
    });
  }

  navigate(path) {
    window.location.hash = path;
  }
}

export function navigateTo(path) {
  window.location.hash = path;
}
