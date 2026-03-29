import { THEME_KEY, THEME_LIGHT, THEME_DARK } from '../constants/themeConstants.js';

export const applyTheme = (theme) => {
  document.documentElement.setAttribute(`data-theme`, theme);
  localStorage.setItem(THEME_KEY, theme);
};

export const toggleTheme = () => {
  const current = localStorage.getItem(THEME_KEY) || THEME_LIGHT;
  const newTheme = current === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
  applyTheme(newTheme);
  return newTheme;
};

export const getTheme = () => {
  return localStorage.getItem(THEME_KEY) || THEME_LIGHT;
};

export const initTheme = () => {
  const saved = localStorage.getItem(THEME_KEY) || THEME_LIGHT;
  applyTheme(saved);
};
