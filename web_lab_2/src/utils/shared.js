import { toggleTheme, getTheme } from './theme.js';
import { THEME_LIGHT } from '../constants/themeConstants.js';

export const getBasePath = () => {
  const path = window.location.pathname;
  if (path.includes(`/src/`)) return `../../`;
  return ``;
};

export const renderNavbar = () => {
  const navbar = document.getElementById(`navbar`);
  if (!navbar) return;
  
  const basePath = getBasePath();
  const theme = getTheme();
  const label = theme === THEME_LIGHT ? `Dark Mode` : `Light Mode`;
  
  navbar.innerHTML = `
    <nav class="nav-bar sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="${basePath}index.html" class="text-accent text-lg font-bold">AW Finance</a>
        <div class="hidden md:flex items-center gap-8 text-sm">
          <a href="${basePath}index.html" class="text-secondary hover:text-accent">Home</a>
          <a href="${basePath}src/about/about.html" class="text-secondary hover:text-accent">About</a>
          <a href="${basePath}src/contact/contact.html" class="text-secondary hover:text-accent">Contact</a>
        </div>
        <div class="flex items-center gap-3">
          <button id="theme-toggle" class="theme-toggle px-4 py-2 rounded-lg text-sm font-medium">
            ${label}
          </button>
          <a href="${basePath}src/signin/signin.html" class="text-secondary hover:text-accent text-sm">Sign In</a>
          <a href="${basePath}src/signup/signup.html" class="btn-secondary px-4 py-2 rounded-lg text-sm">Sign Up</a>
        </div>
      </div>
    </nav>
  `;
  
  document.getElementById(`theme-toggle`)?.addEventListener(`click`, () => {
    toggleTheme();
    renderNavbar();
  });
};

export const renderFooter = () => {
  const footer = document.getElementById(`footer`);
  if (!footer) return;
  
  const basePath = getBasePath();
  
  footer.innerHTML = `
    <footer class="py-12">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p class="font-bold text-lg mb-3 text-accent">AW Finance</p>
          <p class="text-sm text-secondary">Professional finance education.</p>
        </div>
        <div>
          <p class="font-semibold text-sm mb-3">Company</p>
          <ul class="space-y-2 text-sm text-secondary">
            <li><a href="${basePath}src/about/about.html" class="hover:text-accent">About</a></li>
            <li><a href="${basePath}src/contact/contact.html" class="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-sm mb-3">Account</p>
          <ul class="space-y-2 text-sm text-secondary">
            <li><a href="${basePath}src/signin/signin.html" class="hover:text-accent">Sign In</a></li>
            <li><a href="${basePath}src/signup/signup.html" class="hover:text-accent">Sign Up</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-sm mb-3">Legal</p>
          <ul class="space-y-2 text-sm text-secondary">
            <li><a href="#" class="hover:text-accent">Privacy</a></li>
            <li><a href="#" class="hover:text-accent">Terms</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 mt-10 pt-6 text-xs text-center border-t border-color text-secondary">
        2024 AW Finance. All rights reserved.
      </div>
    </footer>
  `;
};

export const initShared = () => {
  renderNavbar();
  renderFooter();
};
