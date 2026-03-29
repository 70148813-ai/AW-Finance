import { initTheme, toggleTheme, getTheme } from './src/utils/theme.js';
import { getAllCourses, createCourse, updateCourse, deleteCourse } from './src/utils/crud.js';
import { searchCourses, filterByCategory, sortByName, sortByPrice, getCourseCategories, forEachCourse } from './src/utils/filters.js';
import { THEME_LIGHT } from './src/constants/themeConstants.js';

const renderNavbar = () => {
  const navbar = document.getElementById(`navbar`);
  if (!navbar) return;
  
  const theme = getTheme();
  const label = theme === THEME_LIGHT ? `Dark Mode` : `Light Mode`;
  
  navbar.innerHTML = `
    <nav class="nav-bar sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="index.html" class="text-accent text-lg font-bold">AW Finance</a>
        <div class="hidden md:flex items-center gap-8 text-sm">
          <a href="index.html" class="text-accent font-semibold">Home</a>
          <a href="src/about/about.html" class="text-secondary hover:text-accent">About</a>
          <a href="src/contact/contact.html" class="text-secondary hover:text-accent">Contact</a>
        </div>
        <div class="flex items-center gap-3">
          <button id="theme-toggle" class="theme-toggle px-4 py-2 rounded-lg text-sm font-medium">
            ${label}
          </button>
          <a href="src/signin/signin.html" class="text-secondary hover:text-accent text-sm">Sign In</a>
          <a href="src/signup/signup.html" class="btn-secondary px-4 py-2 rounded-lg text-sm">Sign Up</a>
        </div>
      </div>
    </nav>
  `;
  
  document.getElementById(`theme-toggle`)?.addEventListener(`click`, () => {
    toggleTheme();
    renderNavbar();
  });
};

const renderFooter = () => {
  const footer = document.getElementById(`footer`);
  if (!footer) return;
  
  footer.innerHTML = `
    <footer class="section-bg py-12">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p class="font-bold text-lg mb-3 text-accent">AW Finance</p>
          <p class="text-sm text-secondary">Professional finance education.</p>
        </div>
        <div>
          <p class="font-semibold text-sm mb-3">Company</p>
          <ul class="space-y-2 text-sm text-secondary">
            <li><a href="src/about/about.html" class="hover:text-accent">About</a></li>
            <li><a href="src/contact/contact.html" class="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-sm mb-3">Account</p>
          <ul class="space-y-2 text-sm text-secondary">
            <li><a href="src/signin/signin.html" class="hover:text-accent">Sign In</a></li>
            <li><a href="src/signup/signup.html" class="hover:text-accent">Sign Up</a></li>
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

const renderCourses = (courses) => {
  const grid = document.getElementById(`courses-grid`);
  if (!grid) return;
  
  grid.innerHTML = ``;
  
  forEachCourse(courses, (course) => {
    const card = document.createElement(`div`);
    card.className = `card rounded-xl p-6`;
    card.innerHTML = `
      <h3 class="font-semibold mb-2 text-lg">${course.name}</h3>
      <p class="text-sm mb-2 text-secondary">Category: ${course.category}</p>
      <p class="text-sm mb-3 text-secondary">Instructor: ${course.instructor}</p>
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm text-secondary">${course.modules} modules</span>
        <span class="text-xl font-bold text-accent">$${course.price}</span>
      </div>
      <span class="text-xs px-3 py-1 rounded-full ${course.inStock ? `badge-available` : `badge-coming-soon`}">
        ${course.inStock ? `Available` : `Coming Soon`}
      </span>
    `;
    grid.appendChild(card);
  });
};

const populateFilters = () => {
  const select = document.getElementById(`category-filter`);
  if (!select) return;
  
  select.innerHTML = `<option value="all">All Categories</option>`;
  getCourseCategories(getAllCourses()).forEach((cat) => {
    const option = document.createElement(`option`);
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    select.appendChild(option);
  });
};

const applyFilters = () => {
  const search = document.getElementById(`search-input`)?.value || ``;
  const category = document.getElementById(`category-filter`)?.value || `all`;
  const [sortBy, order] = (document.getElementById(`sort-select`)?.value || `name-asc`).split(`-`);
  
  let filtered = getAllCourses();
  
  if (search) filtered = searchCourses(filtered, search);
  if (category !== `all`) filtered = filterByCategory(filtered, category);
  
  filtered = sortBy === `name` ? sortByName(filtered, order === `asc`) : sortByPrice(filtered, order === `asc`);
  
  renderCourses(filtered);
};

const renderAdminCourses = () => {
  const list = document.getElementById(`admin-courses-list`);
  if (!list) return;
  
  list.innerHTML = `<h3 class="text-lg font-semibold mb-4">Manage Courses (${getAllCourses().length} total)</h3>`;
  
  getAllCourses().forEach((course) => {
    const card = document.createElement(`div`);
    card.className = `card rounded-xl p-4 mb-3`;
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <h4 class="font-semibold">${course.name}</h4>
          <p class="text-sm text-secondary">$${course.price} | ${course.modules} modules</p>
        </div>
        <div class="flex gap-2">
          <button class="btn-primary px-3 py-1 rounded text-xs" onclick="window.updatePrice(${course.id})">Update</button>
          <button class="btn-secondary px-3 py-1 rounded text-xs" onclick="window.deleteCourseById(${course.id})">Delete</button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
};

window.updatePrice = (id) => {
  const course = getAllCourses().find((c) => c.id === id);
  const newPrice = prompt(`New price for "${course.name}":`, course.price);
  if (newPrice && !isNaN(newPrice)) {
    updateCourse(id, { price: parseInt(newPrice) });
    renderAdminCourses();
    applyFilters();
  }
};

window.deleteCourseById = (id) => {
  const course = getAllCourses().find((c) => c.id === id);
  if (confirm(`Delete "${course.name}"?`)) {
    deleteCourse(id);
    renderAdminCourses();
    applyFilters();
  }
};

const initAdmin = () => {
  const toggle = document.getElementById(`admin-toggle`);
  const panel = document.getElementById(`admin-panel`);
  const form = document.getElementById(`course-form`);
  const addBtn = document.getElementById(`add-field-btn`);
  
  if (!toggle || !panel || !form) return;
  
  toggle.addEventListener(`click`, () => {
    panel.classList.toggle(`hidden`);
    toggle.textContent = panel.classList.contains(`hidden`) ? `Admin Panel` : `Close Panel`;
    if (!panel.classList.contains(`hidden`)) renderAdminCourses();
  });
  
  addBtn.addEventListener(`click`, () => {
    const div = document.createElement(`div`);
    div.className = `flex gap-2 mb-2`;
    div.innerHTML = `
      <input type="text" placeholder="Field name" class="flex-1 px-4 py-2 rounded-lg dynamic-field-name">
      <input type="text" placeholder="Value" class="flex-1 px-4 py-2 rounded-lg dynamic-field-value">
      <button type="button" class="btn-secondary px-3 py-2 rounded-lg" onclick="this.parentElement.remove()">Remove</button>
    `;
    document.getElementById(`dynamic-fields`).appendChild(div);
  });
  
  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    
    const data = {
      name: document.getElementById(`course-name`).value,
      category: document.getElementById(`course-category`).value,
      price: parseInt(document.getElementById(`course-price`).value),
      modules: parseInt(document.getElementById(`course-modules`).value),
      instructor: document.getElementById(`course-instructor`).value,
      rating: 4.5,
      inStock: true
    };
    
    document.querySelectorAll(`.dynamic-field-name`).forEach((input, i) => {
      const name = input.value.trim();
      const value = document.querySelectorAll(`.dynamic-field-value`)[i].value.trim();
      if (name && value) data[name] = value;
    });
    
    const course = createCourse(data);
    
    console.log(`Object CRUD Demo:`);
    console.log(`READ:`, course);
    course.discount = 10;
    console.log(`CREATE (add discount):`, course);
    course.price = course.price - 10;
    console.log(`UPDATE (change price):`, course);
    delete course.discount;
    console.log(`DELETE (remove discount):`, course);
    
    form.reset();
    document.getElementById(`dynamic-fields`).innerHTML = ``;
    renderAdminCourses();
    applyFilters();
    populateFilters();
  });
};

const init = () => {
  initTheme();
  renderNavbar();
  renderFooter();
  
  if (document.getElementById(`courses-grid`)) {
    populateFilters();
    renderCourses(getAllCourses());
    
    document.getElementById(`search-input`)?.addEventListener(`input`, applyFilters);
    document.getElementById(`category-filter`)?.addEventListener(`change`, applyFilters);
    document.getElementById(`sort-select`)?.addEventListener(`change`, applyFilters);
    
    initAdmin();
  }
};

if (document.readyState === `loading`) {
  document.addEventListener(`DOMContentLoaded`, init);
} else {
  init();
}
